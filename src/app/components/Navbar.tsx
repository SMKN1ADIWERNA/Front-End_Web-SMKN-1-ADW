"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Newspaper, Search, Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import DesktopLinks from './DesktopLinks';
import MobileMenu from './MobileMenu';
import LogoComponent from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
  };

  const closeModals = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  const isBlogPage = location.pathname === '/blogs';

  return (
    <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 fixed w-full z-50 top-0 transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        <LogoComponent />

        <DesktopLinks />
        <div className="hidden md:flex items-center relative">
          <DarkModeToggle />
          <Link
            href="/blogs"
            className={`transition duration-300 ease-in-out p-2 rounded-full flex items-center ${isBlogPage ? 'bg-blue-600' : `${isDarkMode ? 'text-white hover:text-blue-500' : 'text-black hover:text-blue-500'}`}`}
          >
            <Newspaper />
          </Link>
          <div className="flex items-center ml-4 relative">
            <svg
              className={`w-6 h-6 absolute left-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m2.8-5.4a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className={`px-4 py-2 pl-10 rounded-md w-48 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
            />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <DarkModeToggle />
          <button
            onClick={toggleSearch}
            className={`focus:outline-none mr-2 transform active:scale-95 active:shadow-inner ml-2 ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m2.8-5.4a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z"
              ></path>
            </svg>
          </button>
          <button
            onClick={toggleMenu}
            className={`${isDarkMode ? 'text-white' : 'text-black'} focus:outline-none`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {(isMenuOpen || isSearchOpen) && (
        <MobileMenu
          isMenuOpen={isMenuOpen}
          isSearchOpen={isSearchOpen}
          closeModals={closeModals}
        />
      )}
    </nav>
  );
};

export default Navbar;
