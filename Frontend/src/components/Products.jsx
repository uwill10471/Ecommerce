import React from 'react';
import { Link } from 'react-router-dom';
const Products = () => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
          Our Products
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Browse through our exclusive range of products — just three clicks away.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {['Product 1', 'Product 2', 'Product 3','Product 1', 'Product 2', 'Product 3'].map((name, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
          >
            {/* Image Card Section */}
            <img
              src="https://source.unsplash.com/random/400x300?product"
              alt={name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-2xl font-semibold text-white mb-2">{name}</div>
            <p className="text-sm text-gray-300 mb-4">
              This is a beautiful and high-quality item you’re going to love.
            </p>
           <Link 
           to="/product-view"
           className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
           >
           View Details
           </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Products;
