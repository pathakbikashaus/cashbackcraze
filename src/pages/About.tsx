import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <h1 className="text-4xl font-bold text-electric-blue mb-6 text-center">About CashbackCraze</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
        CashbackCraze is your ultimate destination for finding the best deals, coupons, and referral rewards. We're passionate about helping you save money and earn more on your everyday purchases. Join our community and start maximizing your savings today!
      </p>
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-neon-green mb-4">Our Mission</h2>
        <p className="text-md text-gray-600 max-w-xl mx-auto">
          To empower consumers with easy access to the most lucrative cashback opportunities, product deals, and referral bonuses, making saving money an exciting and rewarding experience.
        </p>
      </div>
    </div>
  );
};

export default About;