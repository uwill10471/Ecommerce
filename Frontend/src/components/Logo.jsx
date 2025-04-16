import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link
    to="/"
    className="fixed left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-black-400 to-blue-400 text-transparent bg-clip-text rounded-full flex items-center justify-center shadow-lg"
  >
    <span className="font-extrabold text-2xl">E‑Store</span>
  </Link>
);

export default Logo;
