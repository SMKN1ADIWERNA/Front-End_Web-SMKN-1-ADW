import React from 'react';

const organizations = [
  { name: 'OSIS', image: '/images/osis.jpg' },
  { name: 'Pramuka', image: '/images/pramuka.jpg' },
  { name: 'PMR', image: '/images/pmr.jpg' },
  { name: 'KIR', image: '/images/kir.jpg' },
  { name: 'Paskibra', image: '/images/paskibra.jpg' },
  { name: 'English Club', image: '/images/english-club.jpg' },
  { name: 'Teater', image: '/images/teater.jpg' },
  { name: 'Karate', image: '/images/karate.jpg' },
  { name: 'Basket', image: '/images/basket.jpg' },
  { name: 'Futsal', image: '/images/futsal.jpg' },
  { name: 'Rohis', image: '/images/rohis.jpg' },
  { name: 'Tari Tradisional', image: '/images/tari-tradisional.jpg' },
  { name: 'Musik', image: '/images/musik.jpg' },
  { name: 'Paduan Suara', image: '/images/paduan-suara.jpg' },
];

const OrganisasiSekolah = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={org.image}
                alt={org.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-700">
                  {org.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganisasiSekolah;
