import React from 'react';

const ViewDetails = () => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
        {/* Product Image */}
        <img
          src="https://source.unsplash.com/random/800x600?product"
          alt="Product"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* Product Title */}
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
          Product Name
        </h1>

        {/* Product Description */}
        <p className="mt-4 text-lg text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl consectetur finibus.
          Praesent nec nisl a purus blandit viverra. Nam posuere, odio eu tempus sollicitudin, urna nisi interdum
          massa, at tempus ex metus eget urna.
        </p>

        {/* Action Button */}
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-sm font-semibold text-white hover:scale-105 transition-transform duration-200">
          Buy Now
        </button>
      </div>
    </div>
  </div>
);

export default ViewDetails;
