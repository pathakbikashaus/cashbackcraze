import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react'; // Changed from DollarSign to Sparkles

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Sparkles className="h-8 w-8 text-highlight-yellow" /> {/* Using Sparkles icon */}
      <span className="text-3xl font-extrabold text-white">
        Cashback<span className="text-highlight-yellow">Craze</span>
      </span>
    </Link>
  );
};

export default Logo;