import React from 'react';

interface MenuToggleProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  toggleSearch: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ isMenuOpen, toggleMenu, toggleSearch }) => {
  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={toggleSearch}
        className="text-white focus:outline-none mr-2 transform active:scale-95 active:shadow-inner ml-2"
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
        className="text-white focus:outline-none"
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
            d={
              isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
            }
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default MenuToggle;
