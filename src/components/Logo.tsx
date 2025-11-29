import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign } from 'lucide-react'; // Using DollarSign icon for cashback theme

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <DollarSign className="h-8 w-8 text-highlight-yellow" />
      <span className="text-3xl font-extrabold text-white">
        Cashback<span className="text-highlight-yellow">Craze</span>
      </span>
    </Link>
  );
};

export default Logo;