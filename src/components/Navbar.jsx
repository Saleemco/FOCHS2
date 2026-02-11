import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 lg:px-24 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold text-gray-900">EduVerse</span>
      </div>
      <div className="hidden md:flex items-center gap-10">
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Benefits</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Login</a>
        <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;