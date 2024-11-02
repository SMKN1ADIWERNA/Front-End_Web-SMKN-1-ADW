"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, Building, GraduationCap, UserCircle2, Expand, School, Award, Podcast, Scissors, Star, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuLinksProps {
  closeModals: () => void;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ closeModals }) => {
  const location = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActive = (path: string) => location === path;

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <div className="space-y-1">
      <Link
        href="/"
        className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
        onClick={closeModals}
      >
        <Home className="mr-1" />
        Home
      </Link>
      <Link
        href="/blogs"
        className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/blogs') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
        onClick={closeModals}
      >
        <FileText className="mr-1" />
        Artikel
      </Link>
      <Link
        href="/fasilitas"
        className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/fasilitas') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
        onClick={closeModals}
      >
        <Building className="mr-1" />
        Fasilitas
      </Link>
      <Link
        href="/jurusan"
        className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/jurusan') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
        onClick={closeModals}
      >
        <GraduationCap className="mr-1" />
        Jurusan
      </Link>

      {/* Dropdown Ruang Siswa */}
      <div
        className="block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center cursor-pointer py-2"
        onClick={() => toggleDropdown('studentSpace')}
      >
        <UserCircle2 className="mr-1" />
        Ruang Siswa
        <Expand className={`ml-auto transform ${activeDropdown === 'studentSpace' ? 'rotate-180' : 'rotate-0'}`} />
      </div>

      <AnimatePresence>
        {activeDropdown === 'studentSpace' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="ml-6 space-y-1 overflow-hidden"
          >
            <Link
              href="/ekskul"
              className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/ekskul') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
              onClick={closeModals}
            >
              Ekskul
            </Link>
            <Link
              href="/organisasi"
              className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/organisasi') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
              onClick={closeModals}
            >
              Organisasi
            </Link>
            <Link
              href="/seragam"
              className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/seragam') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
              onClick={closeModals}
            >
              <Scissors className="mr-1" />
              Seragam
            </Link>
            <Link
              href="/model-rambut"
              className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/model-rambut') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
              onClick={closeModals}
            >
              <School className="mr-1" />
              Model Rambut
            </Link>
            <Link
              href="/prestasi-siswa"
              className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/prestasi-siswa') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
              onClick={closeModals}
            >
              <Star className="mr-1" />
              Prestasi Siswa
            </Link>
            <Link
              href="/podcast"
              className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/podcast') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
              onClick={closeModals}
            >
              <Podcast className="mr-1" />
              Podcast
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown Profil */}
      <div
        className="block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center cursor-pointer py-2"
        onClick={() => toggleDropdown('profile')}
      >
        <UserCircle2 className="mr-1" />
        Profil
        <Expand className={`ml-auto transform ${activeDropdown === 'profile' ? 'rotate-180' : 'rotate-0'}`} />
      </div>

      <AnimatePresence>
        {activeDropdown === 'profile' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="ml-6 space-y-1 overflow-hidden"
          >
            <Link
              href="/lagu-lagu"
              className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/lagu-lagu') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
              onClick={closeModals}
            >
              Lagu-lagu
            </Link>
            <Link
              href="/visi-misi"
              className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/visi-misi') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
              onClick={closeModals}
            >
              Visi Misi
            </Link>
            <Link
              href="/sambutan-kepala-sekolah"
              className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/sambutan-kepala-sekolah') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
              onClick={closeModals}
            >
              Sambutan Kepala Sekolah
            </Link>
            <Link
              href="/tim-smkn1adiwerna"
              className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/tim-smkn1adiwerna') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
              onClick={closeModals}
            >
              Tim SMK N 1 Adiwerna
            </Link>
            <Link
              href="/penghargaan-sekolah"
              className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/penghargaan-sekolah') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
              onClick={closeModals}
            >
              <Award className="mr-1" />
              Penghargaan Sekolah
            </Link>
            <Link
              href="/guru-dan-karyawan"
              className={`block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center py-2 ${isActive('/guru-dan-karyawan') ? 'bg-gray-200 dark:bg-gray-700 rounded-lg px-2' : ''}`}
              onClick={closeModals}
            >
              <Users className="mr-1" />
              Guru dan Karyawan
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuLinks;
