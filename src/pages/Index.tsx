import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Gift, Percent } from "lucide-react"; // Importing icons for the new section

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-blue to-blue-800 text-white py-24 md:py-40 text-center overflow-hidden shadow-xl">
        <div className="container mx-auto relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-highlight-yellow drop-shadow-lg animate-fade-in-down">
            Join the Craze. Save More. Earn More.
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light opacity-90 animate-fade-in-up">
            Your ultimate destination for the best cashback deals, coupons, and referral rewards.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up delay-200">
            <Link to="/coupons">
              <Button className="bg-accent-green hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                Find Coupons
              </Button>
            </Link>
            <Link to="/deals">
              <Button variant="outline" className="bg-white text-primary-blue hover:bg-gray-100 text-lg px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 border-2 border-white">
                Explore Deals
              </Button>
            </Link>
          </div>
        </div>
        {/* Eye-catching banner with rotating highlights - Placeholder */}
        <div className="absolute bottom-0 left-0 w-full bg-highlight-yellow bg-opacity-20 py-3 text-sm md:text-base animate-pulse">
          <p className="text-white font-semibold">✨ Top Deal Alert: Get 25% off at [Store Name]! ✨</p>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-white shadow-inner">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-blue text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coupons Section */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300 group">
              <div className="text-5xl text-accent-green mb-4 group-hover:scale-110 transition-transform duration-300">🎟️</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-4">Exclusive Coupons</h3>
              <p className="text-gray-700 mb-6">
                Unlock massive savings with our hand-picked voucher codes and discounts from your favorite stores.
              </p>
              <Link to="/coupons">
                <Button className="bg-accent-green hover:bg-green-700 text-white">
                  View Coupons
                </Button>
              </Link>
            </div>

            {/* Evergreen Product Deals Section */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300 group">
              <div className="text-5xl text-highlight-yellow mb-4 group-hover:scale-110 transition-transform duration-300">💰</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-4">Evergreen Product Deals</h3>
              <p className="text-gray-700 mb-6">
                Find the best value products with our expert roundups, comparison tables, and affiliate links.
              </p>
              <Link to="/deals">
                <Button className="bg-accent-green hover:bg-green-700 text-white">
                  Discover Deals
                </Button>
              </Link>
            </div>

            {/* Referral Rewards Section */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300 group">
              <div className="text-5xl text-primary-blue mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="text-2xl font-bold text-primary-blue mb-4">Referral Rewards</h3>
              <p className="text-gray-700 mb-6">
                Earn extra cash and bonuses by sharing our exclusive referral codes for apps and banks.
              </p>
              <Link to="/referrals">
                <Button className="bg-accent-green hover:bg-green-700 text-white">
                  Get Referrals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-blue text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100">
              <div className="flex justify-center mb-4">
                <Percent className="h-12 w-12 text-accent-green" />
              </div>
              <h3 className="text-xl font-semibold text-primary-blue mb-3">1. Browse Deals & Coupons</h3>
              <p className="text-gray-700">
                Explore our extensive collection of cashback offers, discount codes, and product deals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-highlight-yellow" />
              </div>
              <h3 className="text-xl font-semibold text-primary-blue mb-3">2. Select & Activate</h3>
              <p className="text-gray-700">
                Choose the best offer, copy the code, or click the link to activate your savings.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100">
              <div className="flex justify-center mb-4">
                <Gift className="h-12 w-12 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-primary-blue mb-3">3. Enjoy Your Rewards!</h3>
              <p className="text-gray-700">
                Complete your purchase and watch your savings and rewards grow!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary-blue text-white text-center shadow-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-highlight-yellow mb-6">Ready to Start Saving?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't miss out on incredible opportunities to save money and earn rewards. Join CashbackCraze today!
          </p>
          <Link to="/coupons">
            <Button className="bg-accent-green hover:bg-green-700 text-white text-xl px-10 py-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
              Get Started Now
            </Button>
          </Link>
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