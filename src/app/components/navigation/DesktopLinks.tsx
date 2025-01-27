import React from 'react';
import Link from 'next/link';
import {
  CopyCheck,
  TvMinimal,
  Layers
} from 'lucide-react';
import DropdownMenu from './DropdownMenu';

const DesktopLinks = () => {
  return (
    <div className="hidden md:flex space-x-4">
      <Link href="/" 
      className="text-black dark:text-white hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-700 transition duration-300 ease-in-out p-2 rounded-full transform active:scale-95 active:shadow-inner flex items-center">
        <TvMinimal className="mr-2" />
        Beranda
      </Link>
      <Link href="/profil" className="text-black dark:text-white hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-700 transition duration-300 ease-in-out p-2 rounded-full transform active:scale-95 active:shadow-inner flex items-center">
        <CopyCheck className="mr-2" />
        Profil
      </Link>
      <Link href="/jurusan" className="text-black dark:text-white hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-700 transition duration-300 ease-in-out p-2 rounded-full transform active:scale-95 active:shadow-inner flex items-center">
        <Layers className="mr-2" />
        Jurusan
      </Link>
      <DropdownMenu />
    </div>
  );
};

export default DesktopLinks;
