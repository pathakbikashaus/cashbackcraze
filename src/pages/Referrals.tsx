import React from 'react';
import { useSupabaseQuery } from '@/hooks/use-supabase-query';
import { supabase } from '@/integrations/supabase/client';
import { useLinkTracking } from '@/hooks/use-link-tracking';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Using shadcn/ui Avatar

interface Referral {
  id: string;
  title: string;
  benefit: string | null;
  code: string;
  link: string;
  is_featured: boolean;
  logo_url: string | null; // Added logo_url
}

const Referrals = () => {
  const { trackLinkClick, copyToClipboard } = useLinkTracking();

  const { data: referrals, isLoading, error } = useSupabaseQuery<Referral[]>({
    queryKey: ['referrals'],
    supabaseQuery: supabase.from('referrals').select('*').order('is_featured', { ascending: false }).order('created_at', { ascending: false }),
  });

  const handleCopyCode = (code: string, referralId: string) => {
    copyToClipboard(code, `Referral code "${code}" copied!`);
    trackLinkClick({
      link_url: `referral_code:${code}`,
      link_type: 'referral',
      item_id: referralId,
    });
  };

  const handleReferralLinkClick = (link: string, referralId: string) => {
    trackLinkClick({
      link_url: link,
      link_type: 'referral',
      item_id: referralId,
    });
  };

  if (isLoading) {
    return <div className="min-h-screen py-8 text-center text-gray-600">Loading referrals...</div>;
  }

  if (error) {
    return <div className="min-h-screen py-8 text-center text-red-500">Error loading referrals: {error.message}</div>;
  }

  const featuredReferral = referrals?.find(referral => referral.is_featured);
  const otherReferrals = referrals?.filter(referral => !referral.is_featured);

  return (
    <div className="min-h-screen py-8">
      <h1 className="text-4xl font-bold text-primary-blue mb-6 text-center">Earn Rewards with My Referrals</h1>
      <p className="text-lg text-gray-700 text-center">
        Share these referral codes and links to earn fantastic rewards!
      </p>

      {featuredReferral && (
        <div className="mt-8 p-6 bg-highlight-yellow text-primary-blue rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-2">Featured Referral Spotlight: {featuredReferral.title}</h2>
          <p className="text-xl mb-3">{featuredReferral.benefit}</p>
          {featuredReferral.logo_url && (
            <Avatar className="mx-auto mb-4 h-20 w-20">
              <AvatarImage src={featuredReferral.logo_url} alt={`${featuredReferral.title} logo`} />
              <AvatarFallback>{featuredReferral.title.substring(0, 2)}</AvatarFallback>
            </Avatar>
          )}
          <Button
            onClick={() => handleCopyCode(featuredReferral.code, featuredReferral.id)}
            className="mt-4 bg-primary-blue text-white font-bold py-2 px-6 rounded-full hover:opacity-90 transition-opacity"
          >
            Copy Code: {featuredReferral.code}
          </Button>
          <a
            href={featuredReferral.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleReferralLinkClick(featuredReferral.link, featuredReferral.id)}
            className="block mt-4 text-primary-blue hover:text-accent-green underline"
          >
            My Referral Link &rarr;
          </a>
        </div>
      )}

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherReferrals?.map((referral) => (
          <div key={referral.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-3">
              {referral.logo_url && (
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={referral.logo_url} alt={`${referral.title} logo`} />
                  <AvatarFallback>{referral.title.substring(0, 2)}</AvatarFallback>
                </Avatar>
              )}
              <h3 className="text-xl font-semibold text-primary-blue">{referral.title}</h3>
            </div>
            <p className="text-gray-600 mb-3">Benefit: {referral.benefit}</p>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md mb-3">
              <span className="font-mono text-accent-green text-lg">{referral.code}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopyCode(referral.code, referral.id)}
                className="text-primary-blue hover:text-accent-green transition-colors"
              >
                Copy
              </Button>
            </div>
            <a
              href={referral.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleReferralLinkClick(referral.link, referral.id)}
              className="block mt-3 text-accent-green hover:underline font-medium"
            >
              My Referral Link &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referrals;