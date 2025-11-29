import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LeftSidebarAd from './LeftSidebarAd';
import RightSidebarAds from './RightSidebarAds';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow container mx-auto py-8 px-4">
        {/* Left Sidebar for Skyscraper Ad */}
        <aside className="hidden lg:flex justify-center pr-4">
          <LeftSidebarAd />
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow max-w-full lg:max-w-[calc(100%-160px-300px-32px)] xl:max-w-[calc(100%-160px-300px-48px)] mx-auto">
          {children}
        </main>

        {/* Right Sidebar for Rotating Ads */}
        <aside className="hidden md:flex justify-center pl-4">
          <RightSidebarAds />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;