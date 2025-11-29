import React, { useState, useEffect } from 'react';

const adContent = [
  { id: 1, text: "Ad 1: Save Big Today!", bgColor: "bg-blue-200", textColor: "text-blue-800" },
  { id: 2, text: "Ad 2: Exclusive Offer!", bgColor: "bg-green-200", textColor: "text-green-800" },
  { id: 3, text: "Ad 3: Limited Time Deal!", bgColor: "bg-yellow-200", textColor: "text-yellow-800" },
];

const RightSidebarAds: React.FC = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % adContent.length);
    }, 5000); // Change ad every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentAd = adContent[currentAdIndex];

  return (
    <div className="hidden md:block w-[300px] h-[250px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-center text-gray-600 dark:text-gray-300 text-sm rounded-lg shadow-md p-2">
      <div className={`w-full h-full flex flex-col items-center justify-center rounded-lg ${currentAd.bgColor} ${currentAd.textColor}`}>
        <p className="font-bold text-lg">{currentAd.text}</p>
        <p className="text-xs mt-1">Rotating Ad Placeholder</p>
        <p className="text-xs mt-1">Ad {currentAd.id} of {adContent.length}</p>
      </div>
    </div>
  );
};

export default RightSidebarAds;