import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
    {/* Hero Section */}
    <section className="flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-2xl animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-[0_5px_15px_rgba(255,255,255,0.1)]">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
            Our E‑Commerce Store
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Discover premium products curated just for you. Shop smart. Live stylish.
        </p>
        <Link
          to="/products"
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          Shop Now 🚀
        </Link>
      </div>
    </section>

    {/* Featured Products Section */}
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {['Product A', 'Product B', 'Product C'].map((product, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={`https://source.unsplash.com/random/400x300?sig=${index}&product`}
                alt={product}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{product}</h3>
              <p className="text-sm text-gray-300 mb-4">
                A brief description of {product}. Quality assured and crafted to perfection.
              </p>
              <Link
                to="/products"
                className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-sm font-semibold text-white hover:scale-105 transition-transform duration-200"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Categories Section */}
    <section className="py-16 px-4 bg-gray-800/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {['Men', 'Women', 'Kids'].map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={`https://source.unsplash.com/random/300x300?sig=${index}&${category}`}
                alt={category}
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{category}</h3>
              <Link
                to="/products"
                className="mt-2 inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-sm font-semibold text-white hover:scale-105 transition-transform duration-200"
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          What Our Customers Say
        </h2>
        <div className="space-y-8">
          {[
            {
              name: 'Jane Doe',
              testimonial:
                'This store offers the best products. I love how everything is curated and the quality is top-notch!',
            },
            {
              name: 'John Smith',
              testimonial:
                'Excellent customer service, fast delivery, and unbeatable quality. A must-visit store!',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:scale-[1.02] transition-all duration-200"
            >
              <p className="text-lg text-gray-300 italic mb-4">"{item.testimonial}"</p>
              <p className="text-right font-bold">- {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;
