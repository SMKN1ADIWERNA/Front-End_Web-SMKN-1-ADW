import React from "react";
import { Music, Star } from "lucide-react";

const Cover: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 text-center">
      <div className="absolute top-4 left-4">
        <Music size={48} className="text-white opacity-20" />
      </div>
      <div className="absolute bottom-4 right-4">
        <Star size={48} className="text-white opacity-20" />
      </div>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-4">Lagu-Lagu Sekolah</h1>
        <p className="text-xl font-light">
          Inspirasi dan semangat dari nada-nada yang memotivasi kita setiap hari.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition">
            Jelajahi Lagu
          </button>
          <button className="bg-blue-500 border border-white text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition">
            Dengarkan Sekarang
          </button>
        </div>
      </div>
      <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}></div>
    </div>
  );
};

export default Cover;
