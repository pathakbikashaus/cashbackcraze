import React from 'react';

const Referrals = () => {
  return (
    <div className="min-h-screen py-8">
      <h1 className="text-4xl font-bold text-electric-blue mb-6 text-center">Earn Rewards with My Referrals</h1>
      <p className="text-lg text-gray-700 text-center">
        Share these referral codes and links to earn fantastic rewards!
      </p>
      {/* Featured Referral Spotlight */}
      <div className="mt-8 p-6 bg-gold-accent text-electric-blue rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-2">Featured Referral Spotlight: This Month!</h2>
        <p className="text-xl mb-3">Get $50 when you sign up for Bank X with my code!</p>
        <button className="mt-4 bg-electric-blue text-white font-bold py-2 px-6 rounded-full hover:opacity-90 transition-opacity">
          Copy Code: BANKX50
        </button>
      </div>
      {/* Referral cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-electric-blue mb-2">App/Bank Name {i + 1}</h3>
            <p className="text-gray-600 mb-3">Referral Benefit: Get $10 bonus!</p>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md mb-3">
              <span className="font-mono text-neon-green text-lg">REFCODE{i + 1}</span>
              <button className="text-electric-blue hover:text-neon-green transition-colors">Copy</button>
            </div>
            <a href="#" className="text-neon-green hover:underline font-medium">
              My Referral Link &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referrals;