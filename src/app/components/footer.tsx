import React from 'react';
import {
  WhatsApp,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  // TikTok,
} from '@mui/icons-material';
import Logo from '../../favicon.ico'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-white p-2 rounded-full">
              <img
                src={Logo.src}
                alt="SMA Negeri 1"
                className="w-8 h-8"
              />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold">SMA Negeri 1</h1>
              <p className="text-sm">CONTOH KOTASEKOLAH</p>
            </div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-4">
            <h2 className="font-semibold">Sosial Media</h2>
            <div className="flex space-x-3 mt-2">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <WhatsApp className="text-green-500" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-blue-600" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <Twitter className="text-blue-400" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-pink-600" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <YouTube className="text-red-600" />
              </a>
              {/* <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                <TikTok className="text-black" />
              </a> */}
            </div>
          </div>
        </div>

        {/* Profil Sekolah */}
        <div>
          <h2 className="font-semibold mb-4">Profil Sekolah</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#profil-sekolah">Profil Sekolah</a></li>
            <li><a href="#staf-tenaga-kependidikan">Staf Tenaga Kependidikan</a></li>
            <li><a href="#staf-pengajar">Staf Pengajar</a></li>
            <li><a href="#galeri">Galeri</a></li>
            <li><a href="#agenda">Agenda</a></li>
            <li><a href="#fasilitas">Fasilitas</a></li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </div>

        {/* Link Penting */}
        <div>
          <h2 className="font-semibold mb-4">Link Penting</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#dapodikdasmen">Dapodikdasmen</a></li>
            <li><a href="#informasi-gtk">Informasi GTK</a></li>
            <li><a href="#informasi-nisn">Informasi NISN</a></li>
            <li><a href="#verval-ptk">Verval PTK</a></li>
            <li><a href="#verval-pd">Verval PD</a></li>
            <li><a href="#pmp">PMP</a></li>
            <li><a href="#absensi-online">Absensi Online</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        <p>2024 © SMA Negeri 1 Contoh Kotasekolah — Oleh <a href="https://websekolah.co.id" className="text-blue-400">Websekolah.co.id</a></p>
      </div>
    </footer>
  );
};

export default Footer;