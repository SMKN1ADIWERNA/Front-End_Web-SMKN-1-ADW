import React from 'react';

const uniforms = [
  { day: 'Senin - Selasa', name: 'OSIS', image: '/images/osis-uniform.jpg' },
  { day: 'Rabu - Kamis', name: 'Eksekutif', image: '/images/eksekutif-uniform.jpg' },
  { day: 'Jumat', name: 'Pramuka', image: '/images/pramuka-uniform.jpg' },
  { day: 'Baju Bengkel', name: 'Warepak', image: '/images/warepak-uniform.jpg' },
  { day: 'Olahraga', name: 'Seragam Olahraga', image: '/images/sports-uniform.jpg' },
];

const SeragamSekolah = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {uniforms.map((uniform, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={uniform.image}
                alt={`${uniform.name} uniform`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-700">
                  {uniform.name}
                </h2>
                <p className="text-sm text-gray-600">{uniform.day}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeragamSekolah;
