import React from 'react';
import { useSupabaseQuery } from '@/hooks/use-supabase-query';
import { supabase } from '@/integrations/supabase/client';
import { useLinkTracking } from '@/hooks/use-link-tracking';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner'; // Using sonner for simple toasts

interface Coupon {
  id: string;
  title: string;
  description: string;
  code: string;
  store_name: string;
  expiry_date: string | null;
  is_featured: boolean;
  link: string | null; // Added link for ShareASale
}

const Coupons = () => {
  const { trackLinkClick, copyToClipboard } = useLinkTracking();

  const { data: coupons, isLoading, error } = useSupabaseQuery<Coupon[]>({
    queryKey: ['coupons'],
    supabaseQuery: supabase.from('coupons').select('*').order('is_featured', { ascending: false }).order('created_at', { ascending: false }),
  });

  const handleCopyCode = (code: string, couponId: string) => {
    copyToClipboard(code, `Coupon code "${code}" copied!`);
    trackLinkClick({
      link_url: `coupon_code:${code}`,
      link_type: 'coupon',
      item_id: couponId,
    });
  };

  const handleCouponLinkClick = (link: string, couponId: string) => {
    trackLinkClick({
      link_url: link,
      link_type: 'coupon',
      item_id: couponId,
    });
  };

  if (isLoading) {
    return <div className="min-h-screen py-8 text-center text-gray-600">Loading coupons...</div>;
  }

  if (error) {
    return <div className="min-h-screen py-8 text-center text-red-500">Error loading coupons: {error.message}</div>;
  }

  const featuredCoupon = coupons?.find(coupon => coupon.is_featured);
  const otherCoupons = coupons?.filter(coupon => !coupon.is_featured);

  return (
    <div className="min-h-screen py-8">
      <h1 className="text-4xl font-bold text-primary-blue mb-6 text-center">Coupons</h1>
      <p className="text-lg text-gray-700 text-center">
        Discover the hottest coupons and voucher codes here!
      </p>

      {featuredCoupon && (
        <div className="mt-8 p-6 bg-accent-green text-white rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-2">Hot Coupon of the Week!</h2>
          <p className="text-xl mb-3">{featuredCoupon.title}</p>
          <p className="text-md mb-4">{featuredCoupon.description}</p>
          <Button
            onClick={() => handleCopyCode(featuredCoupon.code, featuredCoupon.id)}
            className="mt-4 bg-highlight-yellow text-primary-blue font-bold py-2 px-6 rounded-full hover:opacity-90 transition-opacity"
          >
            Copy Code: {featuredCoupon.code}
          </Button>
          {featuredCoupon.link && (
            <a
              href={featuredCoupon.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCouponLinkClick(featuredCoupon.link!, featuredCoupon.id)}
              className="block mt-4 text-white hover:text-highlight-yellow underline"
            >
              Visit Store
            </a>
          )}
        </div>
      )}

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherCoupons?.map((coupon) => (
          <div key={coupon.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-primary-blue mb-2">{coupon.store_name} - {coupon.title}</h3>
            <p className="text-gray-600 mb-3">{coupon.description}</p>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md mb-3">
              <span className="font-mono text-accent-green text-lg">{coupon.code}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopyCode(coupon.code, coupon.id)}
                className="text-primary-blue hover:text-accent-green transition-colors"
              >
                Copy
              </Button>
            </div>
            {coupon.expiry_date && (
              <p className="text-sm text-gray-500">Expires: {new Date(coupon.expiry_date).toLocaleDateString()}</p>
            )}
            {coupon.link && (
              <a
                href={coupon.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCouponLinkClick(coupon.link!, coupon.id)}
                className="block mt-3 text-accent-green hover:underline font-medium"
              >
                Get Deal &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;