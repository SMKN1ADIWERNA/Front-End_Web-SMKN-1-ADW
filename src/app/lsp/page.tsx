import React from 'react';

const certificates = [
  {
    name: 'Teknik Informatika',
    holder: 'John Doe',
    issueDate: '10 Januari 2025',
    certificateId: 'TI-2025-001',
    image: '/images/sertifikat-ti.jpg',
  },
  {
    name: 'Akuntansi',
    holder: 'Jane Smith',
    issueDate: '15 Januari 2025',
    certificateId: 'AK-2025-002',
    image: '/images/sertifikat-akuntansi.jpg',
  },
  {
    name: 'Desain Grafis',
    holder: 'Alice Johnson',
    issueDate: '20 Januari 2025',
    certificateId: 'DG-2025-003',
    image: '/images/sertifikat-desain.jpg',
  },
];

const LembarSertifikasiProfesi = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={certificate.image}
                alt={`${certificate.name} certificate`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700">
                  {certificate.name}
                </h2>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Nama Pemegang:</span> {certificate.holder}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Tanggal Terbit:</span> {certificate.issueDate}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">ID Sertifikat:</span> {certificate.certificateId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LembarSertifikasiProfesi;
