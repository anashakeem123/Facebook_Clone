'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 bg-gray-200 text-black dark:bg-gray-800 dark:text-white p-2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full max-w-6xl px-6 lg:px-0 py-8">
        {/* Left Section */}
        <div className="text-center lg:text-left lg:w-1/2 px-5 mb-10 lg:mb-0">
          <Image src="/Facebook-Logo.png" alt="Facebook Logo" width={200} height={100} />
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-semibold">
            Stay connected with the world, share your moments, and create memories.
          </p>
        </div>

        {/* Right Section */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md rounded-lg p-6 w-full max-w-md mr-7`}>
          <div>
            <input
              className={`my-3 w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
              type="text"
              placeholder="Email or Phone No"
            />
            <input
              className={`my-3 w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
              type="password"
              placeholder="Password"
            />
            <button
              className="bg-blue-600 w-full py-2 rounded-md text-lg font-bold text-white hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Log In
            </button>
            <Link
              href="https://www.facebook.com/recover/initiate"
              className="text-blue-600 text-sm block text-center my-3 hover:underline"
            >
              Forgotten password?
            </Link>
          </div>
          <hr className="my-4" />
          <button
            className="bg-green-600 w-full py-2 rounded-md text-lg font-bold text-white hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            Create New Account
          </button>
        </div>
      </div>

      {/* Create Page Section */}
      <div className="text-center text-sm sm:text-base lg:text-lg mt-8 space-x-1">
        <span className="font-bold text-blue-600 cursor-pointer hover:underline">Create a Page</span>
        <span> to showcase your brand, talent, or business to the world.</span>
      </div>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} mt-16 w-full`}>
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              This Facebook clone is built by <strong>Anas Hakeem</strong> to demonstrate front-end development skills with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-6 py-6 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Facebook Clone. Built with ♥ by <strong>Anas Hakeem</strong> for learning and development purposes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
