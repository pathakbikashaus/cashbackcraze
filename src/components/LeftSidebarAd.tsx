import React from 'react';

const LeftSidebarAd: React.FC = () => {
  return (
    <div className="hidden lg:block w-[160px] h-[600px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-center text-gray-600 dark:text-gray-300 text-sm rounded-lg shadow-md p-2">
      <p>Skyscraper Ad (160x600)</p>
      <p className="text-xs mt-1">Static Ad Placeholder</p>
    </div>
  );
};

export default LeftSidebarAd;