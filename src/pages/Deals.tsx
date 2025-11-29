import React from 'react';
import { useSupabaseQuery } from '@/hooks/use-supabase-query';
import { supabase } from '@/integrations/supabase/client';
import { useLinkTracking } from '@/hooks/use-link-tracking';
import { Button } from '@/components/ui/button';

interface Deal {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  link: string; // Amazon Associates link
  is_featured: boolean;
  coupon_code_integration: string | null;
}

const Deals = () => {
  const { trackLinkClick } = useLinkTracking();

  const { data: deals, isLoading, error } = useSupabaseQuery<Deal[]>({
    queryKey: ['deals'],
    supabaseQuery: supabase.from('deals').select('*').order('is_featured', { ascending: false }).order('created_at', { ascending: false }),
  });

  const handleDealLinkClick = (link: string, dealId: string) => {
    trackLinkClick({
      link_url: link,
      link_type: 'deal',
      item_id: dealId,
    });
  };

  if (isLoading) {
    return <div className="min-h-screen py-8 text-center text-gray-600">Loading deals...</div>;
  }

  if (error) {
    return <div className="min-h-screen py-8 text-center text-red-500">Error loading deals: {error.message}</div>;
  }

  return (
    <div className="min-h-screen py-8">
      <h1 className="text-4xl font-bold text-primary-blue mb-6 text-center">Product Deals</h1>
      <p className="text-lg text-gray-700 text-center">
        Find the best evergreen product deals and roundups!
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {deals?.map((deal) => (
          <div key={deal.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-primary-blue mb-4">{deal.title}</h2>
            <div className="relative mb-4">
              <img
                src={deal.image_url || "/placeholder.svg"}
                alt={deal.title}
                className="w-full h-48 object-cover rounded-md"
              />
              {deal.is_featured && (
                <span className="absolute top-2 left-2 bg-highlight-yellow text-primary-blue text-xs font-bold px-3 py-1 rounded-full">
                  Featured Deal!
                </span>
              )}
            </div>
            <p className="text-gray-700 mb-4">
              {deal.description}
            </p>
            {deal.coupon_code_integration && (
              <div className="mt-4 text-sm text-gray-500 mb-4">
                <p>Includes coupon integration: Use code <span className="font-bold text-accent-green">{deal.coupon_code_integration}</span> for extra savings!</p>
              </div>
            )}
            <a
              href={deal.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleDealLinkClick(deal.link, deal.id)}
              className="text-accent-green hover:underline font-medium"
            >
              View Deal &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;