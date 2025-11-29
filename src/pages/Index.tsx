import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-electric-blue to-blue-700 text-white py-20 md:py-32 text-center overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gold-accent drop-shadow-lg">
            Join the Craze. Save More. Earn More.
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light">
            Your ultimate destination for the best cashback deals, coupons, and referral rewards.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/coupons">
              <Button className="bg-neon-green hover:bg-green-600 text-white text-lg px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                Find Coupons
              </Button>
            </Link>
            <Link to="/deals">
              <Button variant="outline" className="bg-white text-electric-blue hover:bg-gray-100 text-lg px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                Explore Deals
              </Button>
            </Link>
          </div>
        </div>
        {/* Eye-catching banner with rotating highlights - Placeholder */}
        <div className="absolute bottom-0 left-0 w-full bg-gold-accent bg-opacity-20 py-2 text-sm md:text-base animate-pulse">
          <p className="text-white font-semibold">✨ Top Deal Alert: Get 25% off at [Store Name]! ✨</p>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-electric-blue text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coupons Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-neon-green mb-4">🎟️</div>
              <h3 className="text-2xl font-bold text-electric-blue mb-4">Exclusive Coupons</h3>
              <p className="text-gray-700 mb-6">
                Unlock massive savings with our hand-picked voucher codes and discounts from your favorite stores.
              </p>
              <Link to="/coupons">
                <Button className="bg-neon-green hover:bg-green-600 text-white">
                  View Coupons
                </Button>
              </Link>
            </div>

            {/* Evergreen Product Deals Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-gold-accent mb-4">💰</div>
              <h3 className="text-2xl font-bold text-electric-blue mb-4">Evergreen Product Deals</h3>
              <p className="text-gray-700 mb-6">
                Find the best value products with our expert roundups, comparison tables, and affiliate links.
              </p>
              <Link to="/deals">
                <Button className="bg-neon-green hover:bg-green-600 text-white">
                  Discover Deals
                </Button>
              </Link>
            </div>

            {/* Referral Rewards Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl text-electric-blue mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-electric-blue mb-4">Referral Rewards</h3>
              <p className="text-gray-700 mb-6">
                Earn extra cash and bonuses by sharing our exclusive referral codes for apps and banks.
              </p>
              <Link to="/referrals">
                <Button className="bg-neon-green hover:bg-green-600 text-white">
                  Get Referrals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google AdSense Placeholder - Footer */}
      <div className="bg-gray-100 text-gray-500 p-8 text-center">
        <p className="text-sm">Google AdSense Placeholder</p>
        <p className="text-xs">Ad will be displayed here</p>
      </div>
    </div>
  );
};

export default Index;