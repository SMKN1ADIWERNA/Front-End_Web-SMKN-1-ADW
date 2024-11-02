"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText as FileTextIcon,
  User as UserIcon,
  Building as BuildingIcon,
  Edit3 as EditIcon,
  Music as MusicIcon,
  Mic as MicIcon,
  Users as UsersIcon,
  Volleyball as VolleyballIcon,
  Award as AwardIcon,
  School as SchoolIcon,
  Smile as SmileIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SubDropdownMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const SubDropdownMenuSiswa: React.FC<SubDropdownMenuProps> = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute left-full top-0 ml-2 mt-2 w-48 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg py-2 z-30"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link href="/ekskul" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center">
            <VolleyballIcon className="mr-2 text-blue-600" />
            Ekskul
          </Link>
          <Link href="/organisasi" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center">
            <UsersIcon className="mr-2 text-green-600" />
            Organisasi
          </Link>
          <Link href="/seragam-sekolah" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center">
            <UserIcon className="mr-2 text-green-600" />
            Seragam
          </Link>
          <Link href="/model-rambut" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center">
            <SmileIcon className="mr-2 text-purple-600" />
            Model Rambut
          </Link>
          <Link href="/prestasi-siswa" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center">
            <AwardIcon className="mr-2 text-yellow-600" />
            Prestasi Siswa
          </Link>
          <Link href="/podcast" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center">
            <MicIcon className="mr-2 text-orange-600" />
            Podcast
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SubDropdownMenu: React.FC<SubDropdownMenuProps> = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute left-full top-0 ml-2 mt-2 w-48 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg py-2 z-30"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link href="/lagu-lagu" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center rounded-t-xl">
            <MusicIcon className="mr-2 text-blue-600" />
            Lagu Lagu
          </Link>
          <Link href="/visi-misi" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center">
            <FileTextIcon className="mr-2 text-orange-600" />
            Visi Misi
          </Link>
          <Link href="/sambutan-kepala-sekolah-tim" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center rounded-b-xl">
            <MicIcon className="mr-2 text-green-600" />
            Sambutan Kepala Sekolah
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DropdownMenu: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const [isRuangSiswaSubDropdownOpen, setIsRuangSiswaSubDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setIsSubDropdownOpen(false);
    setIsRuangSiswaSubDropdownOpen(false);
  };

  const handleSubMouseEnter = () => setIsSubDropdownOpen(true);
  const handleSubMouseLeave = () => setIsSubDropdownOpen(false);
  const handleRuangSiswaSubMouseEnter = () => setIsRuangSiswaSubDropdownOpen(true);
  const handleRuangSiswaSubMouseLeave = () => setIsRuangSiswaSubDropdownOpen(false);

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={toggleDropdown}
        className="text-gray-900 bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out p-2 rounded-full shadow-md flex items-center"
      >
        Lainnya
        <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg py-2 z-20"
          >
            <div className="relative">
              <div
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center cursor-pointer"
                onMouseEnter={handleSubMouseEnter}
                onMouseLeave={handleSubMouseLeave}
              >
                <UserIcon className="mr-2 text-green-600" />
                Profil
                <svg className="w-4 h-4 inline ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <SubDropdownMenu
                isOpen={isSubDropdownOpen}
                onMouseEnter={handleSubMouseEnter}
                onMouseLeave={handleSubMouseLeave}
              />
            </div>
            <div className="relative">
              <div
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center cursor-pointer"
                onMouseEnter={handleRuangSiswaSubMouseEnter}
                onMouseLeave={handleRuangSiswaSubMouseLeave}
              >
                <SmileIcon className="mr-2 text-orange-600" />
                Ruang Siswa
                <svg className="w-4 h-4 inline ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <SubDropdownMenuSiswa
                isOpen={isRuangSiswaSubDropdownOpen}
                onMouseEnter={handleRuangSiswaSubMouseEnter}
                onMouseLeave={handleRuangSiswaSubMouseLeave}
              />
            </div>
            <Link href="/tentang-kami" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center">
              <BuildingIcon className="mr-2 text-purple-600" />
              Tentang Kami
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
