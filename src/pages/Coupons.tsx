import React from 'react';

const Coupons = () => {
  return (
    <div className="min-h-screen py-8">
      <h1 className="text-4xl font-bold text-primary-blue mb-6 text-center">Coupons</h1>
      <p className="text-lg text-gray-700 text-center">
        Discover the hottest coupons and voucher codes here!
      </p>
      {/* Placeholder for "Hot Coupon of the Week" */}
      <div className="mt-8 p-6 bg-accent-green text-white rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-2">Hot Coupon of the Week!</h2>
        <p className="text-xl">Get 20% off at Your Favorite Store!</p>
        <button className="mt-4 bg-highlight-yellow text-primary-blue font-bold py-2 px-6 rounded-full hover:opacity-90 transition-opacity">
          Copy Code: CRAZE20
        </button>
      </div>
      {/* Placeholder for coupon grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-primary-blue mb-2">Store Name {i + 1}</h3>
            <p className="text-gray-600 mb-3">Discount Description {i + 1}</p>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md mb-3">
              <span className="font-mono text-accent-green text-lg">CODE{i + 1}</span>
              <button className="text-primary-blue hover:text-accent-green transition-colors">Copy</button>
            </div>
            <p className="text-sm text-gray-500">Expires: DD/MM/YYYY</p>
            <p className="text-xs text-red-500">Time left: X days Y hours</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;