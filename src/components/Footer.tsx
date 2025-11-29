import React from 'react';
import { Link } from 'react-router-dom'; // Added this import
import { MadeWithDyad } from './made-with-dyad';

const Footer = () => {
  return (
    <footer className="bg-electric-blue text-white p-6 mt-8 shadow-inner">
      <div className="container mx-auto text-center">
        {/* Google AdSense Placeholder */}
        <div className="bg-gray-800 text-gray-400 p-4 mb-6 rounded-lg">
          <p className="text-sm">Google AdSense Placeholder</p>
          <p className="text-xs">Ad will be displayed here</p>
        </div>

        <p className="text-sm mb-4">
          Disclaimer: CashbackCraze uses affiliate links and referral codes. We may earn commissions at no extra cost to you.
        </p>
        <nav className="flex justify-center space-x-4 text-sm mb-4">
          <Link to="/about" className="hover:text-gold-accent transition-colors">About</Link>
          <Link to="/contact" className="hover:text-gold-accent transition-colors">Contact</Link>
          <Link to="/privacy" className="hover:text-gold-accent transition-colors">Privacy Policy</Link>
        </nav>
        <p className="text-xs text-gray-300 mb-2">&copy; {new Date().getFullYear()} CashbackCraze. All rights reserved.</p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;