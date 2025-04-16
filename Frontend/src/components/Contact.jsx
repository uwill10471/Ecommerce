import React from 'react';

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 flex items-center justify-center px-4 py-16 text-white">
    <div className="w-full max-w-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-2xl shadow-2xl">
      <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
        Contact Us
      </h1>
      <p className="text-center text-gray-300 mb-8">
        We’d love to hear from you. Reach out with any questions or feedback!
      </p>
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl hover:scale-[1.02] hover:shadow-xl transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
