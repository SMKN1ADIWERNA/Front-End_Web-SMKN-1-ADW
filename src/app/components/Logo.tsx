import React from 'react';
import Link from 'next/link';
import Logo from '../favicon.ico'; 

const LogoComponent = () => {
  return (
    <Link href="/" className="flex items-center">
      <img
        src={Logo.src}
        alt="SMK Negeri 1 Adiwerna Logo"
        className="h-10 mr-2 cursor-pointer border-2 border-white rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-black dark:text-white text-lg font-semibold cursor-pointer">
          SMK Negeri 1 Adiwerna
        </span>
        <span className="text-gray-500 dark:text-gray-300 text-sm hidden md:block">
          Sekolah Pusat Keunggulan, <span className="bg-green-100 text-green-500 px-1 rounded">Asean Eco School</span>
        </span>
      </div>
    </Link>
  );
};

export default LogoComponent;
