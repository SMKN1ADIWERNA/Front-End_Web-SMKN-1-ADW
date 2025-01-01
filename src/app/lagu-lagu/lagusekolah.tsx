import React from "react";
import { Music, PlayCircle } from "lucide-react";

const LaguLaguSekolah: React.FC = () => {
  const songs = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Lagu Sekolah ${i + 1}`,
    description: `Deskripsi singkat tentang lagu sekolah ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {songs.map((song) => (
            <div
              key={song.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <div className="p-4 bg-blue-100 rounded-full">
                <Music size={32} className="text-blue-500" />
              </div>
              <h2 className="text-lg font-semibold mt-4">{song.title}</h2>
              <p className="text-sm text-gray-600 text-center">{song.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition-colors">
                <PlayCircle size={20} />
                <span>Dengarkan</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaguLaguSekolah;
