import React from 'react';
import Widget from './widget';

const WidgetList: React.FC = () => {
  return (
    <>
      <Widget title="Teks Widget Ekskul">
        <p className="text-gray-600">Ini adalah contoh widget pada halaman Ekskul</p>
      </Widget>
      <Widget title="Artikel Terbaru">
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Mendalami Manfaat Pentingnya Website Sekolah
            </a>
            <span className="block text-gray-400 text-sm">Juni 8, 2024</span>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Menjelajahi Keajaiban Sains: Eksperimen Seru di Laboratorium Sekolah Kami!
            </a>
            <span className="block text-gray-400 text-sm">Juni 4, 2024</span>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Mengasah Bakat Seni: Workshop Lukisan dan Seni Kerajinan untuk Siswa Sekolah
            </a>
            <span className="block text-gray-400 text-sm">Juni 4, 2024</span>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Membangun Masa Depan: Panduan Karir bagi Siswa SMA
            </a>
            <span className="block text-gray-400 text-sm">Juni 4, 2024</span>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Pentingnya Kesehatan Mental: Tips dan Sumber Daya bagi Siswa dan Orang Tua
            </a>
            <span className="block text-gray-400 text-sm">Juni 4, 2024</span>
          </li>
        </ul>
      </Widget>
    </>
  );
};

export default WidgetList;
