import React from 'react';

const Deals = () => {
  return (
    <div className="min-h-screen py-8">
      <h1 className="text-4xl font-bold text-electric-blue mb-6 text-center">Product Deals</h1>
      <p className="text-lg text-gray-700 text-center">
        Find the best evergreen product deals and roundups!
      </p>
      {/* Placeholder for product roundups */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-electric-blue mb-4">Product Roundup: Category {i + 1}</h2>
            <div className="relative mb-4">
              <img src="/placeholder.svg" alt="Product Image" className="w-full h-48 object-cover rounded-md" />
              {i === 0 && (
                <span className="absolute top-2 left-2 bg-gold-accent text-electric-blue text-xs font-bold px-3 py-1 rounded-full">
                  Best Value Pick!
                </span>
              )}
            </div>
            <p className="text-gray-700 mb-4">
              A detailed comparison of top products in this category, helping you save more.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Product A: Great features, good price.</li>
              <li>Product B: Premium quality, higher cost.</li>
              <li>Product C: Budget-friendly, essential functions.</li>
            </ul>
            <a href="#" className="text-neon-green hover:underline font-medium">
              View Deal &rarr;
            </a>
            {i === 1 && (
              <div className="mt-4 text-sm text-gray-500">
                <p>Includes coupon integration: Use code DEAL10 for 10% off!</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;