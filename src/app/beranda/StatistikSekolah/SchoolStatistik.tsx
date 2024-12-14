"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, Edit } from 'lucide-react';
import { fetchStatistikSekolah } from '../../api/statistikSekolahApi';

const SchoolStatistik = () => {
  const [statistik, setStatistik] = useState<{
    Nama_Kepala_Sekolah: string;
    Deskripsi_Text: string;
    Jumlah_Guru_Staff: string;
    Jumlah_Siswa: string;
    Jumlah_Rombongan_Belajar: string;
    Profile_Kepala_Sekolah?: string;
  } | null>(null);

  const [isExpanded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchStatistikSekolah();
      if (data) {
        setStatistik({
          Nama_Kepala_Sekolah: data.Nama_Kepala_Sekolah,
          Deskripsi_Text: data.Deskripsi_Text,
          Jumlah_Guru_Staff: data.Jumlah_Guru_Staff,
          Jumlah_Siswa: data.Jumlah_Siswa,
          Jumlah_Rombongan_Belajar: data.Jumlah_Rombongan_Belajar,
          Profile_Kepala_Sekolah: data.Profile_Kepala_Sekolah
            ? `http://202.65.116.9:1337${data.Profile_Kepala_Sekolah?.data?.attributes?.url}`
            : undefined,
        });
      }
    };
    getData();
  }, []);

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  if (!statistik) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative dark:bg-gray-900 py-2">
      <div className="relative bg-white dark:bg-gray-800 w-full shadow-lg rounded-3xl -mt-16 z-10 max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto p-6 md:p-10 mb-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center mb-6 lg:mb-0 lg:w-1/2 lg:text-left text-center flex-col lg:flex-row">
            {statistik.Profile_Kepala_Sekolah && (
              <img
                src={statistik.Profile_Kepala_Sekolah}
                alt="Kepala Sekolah"
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover mb-4 lg:mb-0 lg:mr-4"
                style={{ aspectRatio: '1 / 1' }}
              />
            )}
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Sambutan Kepala Sekolah
              </h2>
              <p className="text-gray-500 dark:text-gray-400">{statistik.Nama_Kepala_Sekolah}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1 mb-4 lg:mb-2 px-4 lg:px-0">
                {isExpanded
                  ? statistik.Deskripsi_Text
                  : truncateText(statistik.Deskripsi_Text, 20)}
              </p>
              <div className="flex space-x-4 justify-center lg:justify-start mt-4">
                <Link href="/profile-kepala-sekolah" passHref>
                  <button className="flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    Selengkapnya
                    <Edit className="ml-2" />
                  </button>
                </Link>
                <Link href="/lihat-profile-kepala-sekolah" passHref>
                  <button className="flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    Lihat Profile
                    <Search className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* School Stats Section */}
          <div className="flex lg:w-1/2 border-t border-gray-200 dark:border-gray-700 pt-4 lg:pt-0 lg:border-t-0">
            <div className="flex-1 text-center px-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {statistik.Jumlah_Guru_Staff}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">GURU & STAF</p>
            </div>
            <div className="flex-1 text-center px-4 border-l border-gray-300 dark:border-gray-700">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {statistik.Jumlah_Siswa}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">SISWA</p>
            </div>
            <div className="flex-1 text-center px-4 border-l border-gray-300 dark:border-gray-700">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {statistik.Jumlah_Rombongan_Belajar}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">ROMBEL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolStatistik;
