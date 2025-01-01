import React from 'react';
import { Scissors } from 'lucide-react'; // Menggunakan ikon gunting sebagai representasi tema

const hairstyles = [
  { name: 'Short Hair', description: 'Model rambut pendek untuk tampilan fresh.', image: '/images/short-hair.jpg' },
  { name: 'Long Hair', description: 'Model rambut panjang untuk kesan elegan.', image: '/images/long-hair.jpg' },
  { name: 'Curly Hair', description: 'Model rambut keriting untuk tampilan unik.', image: '/images/curly-hair.jpg' },
  { name: 'Straight Hair', description: 'Model rambut lurus untuk gaya sederhana.', image: '/images/straight-hair.jpg' },
  { name: 'Pixie Cut', description: 'Potongan rambut pixie untuk gaya modern.', image: '/images/pixie-cut.jpg' },
  { name: 'Bangs', description: 'Tambahkan poni untuk gaya lucu.', image: '/images/bangs.jpg' },
];

const ModelRambut = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Model Rambut
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hairstyles.map((style, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700">
                  {style.name}
                </h2>
                <p className="text-sm text-gray-600">{style.description}</p>
                <div className="flex items-center justify-center mt-4">
                  <Scissors className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelRambut;
