import React from 'react';
import { Building, Compass, Book } from 'lucide-react';

const Cover: React.FC = () => {
  return (
    <div className="relative h-auto py-10 bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{
          backgroundImage:
            "url('https://smkn1adw.sch.id/fp/sites/default/files/field/image/WhatsApp%20Image%202023-11-12%20at%2010.51.14.jpeg')",
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Fasilitas Sekolah yang Memadai
        </h1>
        <p className="text-sm md:text-lg mt-4 text-white max-w-screen-sm mx-auto">
          Kami menyediakan fasilitas modern untuk menunjang kegiatan belajar mengajar, 
          membantu siswa mencapai prestasi terbaik.
        </p>

        {/* Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-white bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
            <Compass size={48} className="text-blue-500 mb-4" />
            <h2 className="text-lg font-semibold">Lab Modern</h2>
            <p className="text-sm mt-2 text-center">
              Laboratorium dengan peralatan terbaru untuk eksplorasi ilmu.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-white bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
            <Book size={48} className="text-yellow-500 mb-4" />
            <h2 className="text-lg font-semibold">Perpustakaan</h2>
            <p className="text-sm mt-2 text-center">
              Koleksi buku dan referensi lengkap untuk mendukung pembelajaran.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-white bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
            <Building size={48} className="text-green-500 mb-4" />
            <h2 className="text-lg font-semibold">Gedung Nyaman</h2>
            <p className="text-sm mt-2 text-center">
              Ruang belajar yang nyaman dan lingkungan yang kondusif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
