import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  BellAlertIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  PhoneIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed bottom-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-t border-white/20 shadow-t">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-center">
        <div className="flex space-x-6 text-white font-medium justify-center">
          <NavLink to="/" icon={<HomeIcon className="h-6 w-6 text-white" />} />
          <NavLink to="/products" icon={<ShoppingBagIcon className="h-6 w-6 text-white" />} />
          <NavLink to="/cart" icon={<ShoppingCartIcon className="h-6 w-6 text-white" />} />
          <NavLink to="/contact" icon={<PhoneIcon className="h-6 w-6 text-white" />} />
          <NavLink to="/notification" icon={<BellAlertIcon className="h-6 w-6 text-white" />} />

          {/* User Menu Dropdown */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setShowUserMenu((prev) => !prev)}
              className="relative group transition-all duration-300 ease-in-out text-sm flex items-center justify-center"
            >
              <UserCircleIcon className="h-6 w-6 text-white" />
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </button>

            {showUserMenu && (
              <div className="absolute bottom-12 right-0 w-40 bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl shadow-lg py-2 z-50 text-white">
                <DropLink to="/login" label="Login" />
                <DropLink to="/register" label="Register" />
                <DropLink to="/update-profile" label="Update Info" />
                <DropLink to="/settings" label="Settings" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ to, icon }) => (
  <Link
    to={to}
    className="relative group transition-all duration-300 ease-in-out text-sm flex items-center justify-center"
  >
    {icon}
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
  </Link>
);

const DropLink = ({ to, label }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-sm hover:bg-purple-600/30 transition-colors duration-200"
  >
    {label}
  </Link>
);

export default Navbar;
