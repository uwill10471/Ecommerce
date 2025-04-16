import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../site-asset/SearchBar';
const Cart = () => {
  const handleSearch = (searchTerm) => {
    // Implement search functionality here
    console.log("Searching for:", searchTerm);
  }
  
  return(
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-16 px-6">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        Your Cart
      </h1>
      <p className="text-center text-gray-300 mb-10 text-lg">
        Review and manage your selected items with ease and elegance.
      </p>
    <SearchBar onSearch={handleSearch}/>
    <br />
    <br />
      {/* Placeholder cart item */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-6 mb-6 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 hover:scale-[1.01] transition-all">
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">Product Name</h2>
          <p className="text-sm text-gray-300">High quality item with great value.</p>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-lg font-bold text-white">$49.99</span>
           <Link 
           to="/product-view"
           className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
           >
           View Details
           </Link>
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white text-sm font-semibold">
            Remove
          </button>

        </div>
      </div>
  
      {/* Cart Summary */}
      <div className="mt-10 text-right">
        <p className="text-lg mb-2 text-gray-300">Total: <span className="text-white font-bold">$49.99</span></p>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow hover:scale-105 transition-all">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
)};

export default Cart;
