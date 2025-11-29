import React from 'react';
import { Link } from 'react-router-dom';
import { MadeWithDyad } from './made-with-dyad';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white p-6 mt-8 shadow-inner">
      <div className="container mx-auto text-center">
        {/* Leaderboard Ad Placeholder */}
        <div className="w-full bg-gray-800 text-gray-400 p-4 mb-6 rounded-lg flex items-center justify-center" style={{ minHeight: '90px' }}>
          <p className="text-sm">Leaderboard Ad (728x90)</p>
          <p className="text-xs mt-1">Ad will be displayed here</p>
        </div>

        <p className="text-sm mb-4">
          Disclaimer: CashbackCraze uses affiliate links and referral codes. We may earn commissions at no extra cost to you.
        </p>
        <nav className="flex justify-center space-x-4 text-sm mb-4">
          <Link to="/about" className="hover:text-highlight-yellow transition-colors">About</Link>
          <Link to="/contact" className="hover:text-highlight-yellow transition-colors">Contact</Link>
          <Link to="/privacy" className="hover:text-highlight-yellow transition-colors">Privacy Policy</Link>
        </nav>
        <p className="text-xs text-gray-300 mb-2">&copy; {new Date().getFullYear()} CashbackCraze. All rights reserved.</p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;