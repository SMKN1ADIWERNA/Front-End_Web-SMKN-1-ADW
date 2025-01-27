import React from 'react';
import Link from 'next/link';
import Logo from '../../favicon.ico';
import { Leaf } from 'lucide-react'; // Import the Leaf icon from lucide-react

const LogoComponent = () => {
  return (
    <Link href="/" className="flex items-center">
      <img
        src={Logo.src}
        alt="SMK Negeri 1 Adiwerna Logo"
        className="h-10 mr-2 cursor-pointer border-2 dark:border-white border-gray-300 rounded-full transition-colors duration-300"
      />
      <div className="flex flex-col">
        <span className="text-black dark:text-white text-lg font-semibold cursor-pointer transition-colors duration-300">
          SMK Negeri 1 Adiwerna
        </span>
        <span className="text-gray-500 dark:text-gray-300 text-sm hidden md:flex items-center">
          Sekolah Pusat Keunggulan,
          <span className="flex items-center bg-green-100 dark:bg-green-700 text-green-500 dark:text-green-300 px-1 rounded ml-1 transition-colors duration-300">
            Asean Eco School
            <Leaf className="ml-1 h-4 w-4" /> {/* Add Leaf icon with spacing */}
          </span>
        </span>
      </div>
    </Link>
  );
};

export default LogoComponent;
