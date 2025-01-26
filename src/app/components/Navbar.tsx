"use client";

import React, { useState } from "react";
import Link from "next/link";
import LogoComponent from "./Logo";
import DesktopLinks from "./DesktopLinks";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import SearchButton from "./SearchButton";
import HamburgerMenu from "./HamburgerMenu";
import { Newspaper, Image } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-3 fixed w-full z-50 top-0 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <LogoComponent />
        <DesktopLinks />
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <div className="hidden md:flex items-center ">

          <Link
            href="/artikel"
            className={`transition duration-300 ease-in-out p-2 rounded-full flex items-center`}
            >
            <Newspaper />
          </Link>
          <Link
            href="/artikel"
            className={`transition duration-300 ease-in-out p-2 rounded-full flex items-center`}
            >
            <Image />
          </Link>
            </div>
          <SearchButton onClick={toggleSearch} />
        </div>
        <HamburgerMenu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
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
