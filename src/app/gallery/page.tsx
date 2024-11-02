import React from 'react';
import { School, Calendar, Users, Trophy, Repeat } from 'lucide-react';

const albums = [
  { title: 'Upacara', icon: <School className="text-5xl text-blue-500 mr-4" /> },
  { title: 'Kegiatan Sekolah', icon: <Calendar className="text-5xl text-blue-500 mr-4" /> },
  { title: 'MPLS', icon: <Users className="text-5xl text-blue-500 mr-4" /> },
  { title: 'Kejuaraan', icon: <Trophy className="text-5xl text-blue-500 mr-4" /> },
  { title: 'Upacara Rutin', icon: <Repeat className="text-5xl text-blue-500 mr-4" /> },
  { title: 'Organisasi', icon: <Users className="text-5xl text-blue-500 mr-4" /> },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Gallery Kegiatan Sekolah</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {albums.map((album) => (
          <div key={album.title} className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <div className="p-6 flex items-center">
              {album.icon}
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{album.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
