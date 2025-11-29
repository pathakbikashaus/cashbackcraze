import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-primary-blue text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-highlight-yellow">
          CashbackCraze
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-highlight-yellow transition-colors">Home</Link>
          <Link to="/coupons" className="hover:text-highlight-yellow transition-colors">Coupons</Link>
          <Link to="/deals" className="hover:text-highlight-yellow transition-colors">Deals</Link>
          <Link to="/referrals" className="hover:text-highlight-yellow transition-colors">Referrals</Link>
          <Link to="/about" className="hover:text-highlight-yellow transition-colors">About</Link>
          <Link to="/contact" className="hover:text-highlight-yellow transition-colors">Contact</Link>
        </nav>
        {/* Mobile navigation will be added later if needed, using a Sheet or Drawer component */}
        <div className="md:hidden">
          {/* Placeholder for mobile menu icon */}
          <Button variant="ghost" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;