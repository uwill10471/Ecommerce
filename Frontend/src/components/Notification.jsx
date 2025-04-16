import React from 'react';

const Notification = () => {
  // Sample notifications array, replace with your dynamic content as needed.
  const notifications = [
    { id: 1, title: 'Order Shipped', message: 'Your order #12345 has been shipped.' },
    { id: 2, title: 'New Message', message: 'You received a new message from Customer Support.' },
    { id: 3, title: 'Promotion', message: 'Enjoy a 20% discount on your next purchase!' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
          {/* Header */}
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg mb-6">
            Notifications
          </h1>
          {/* Notification List */}
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li key={notification.id} className="p-4 bg-white/10 rounded-xl border border-white/10 shadow hover:scale-[1.02] transition-all duration-200">
                <h2 className="text-2xl font-semibold">{notification.title}</h2>
                <p className="mt-2 text-gray-300 text-sm">{notification.message}</p>
              </li>
            ))}
          </ul>
          {/* Clear All Button */}
          <div className="mt-8 flex justify-end">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-sm font-semibold text-white hover:scale-105 transition-transform duration-200">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
