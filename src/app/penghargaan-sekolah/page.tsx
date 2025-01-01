import React from "react";
import { Trophy } from "lucide-react";

const PenghargaanSekolah: React.FC = () => {
  const awards = [
    {
      title: "Juara 1 Lomba Robotika Nasional",
      year: 2023,
      image: "https://api-webdisdik.jabarprov.go.id/storage/disdik_web/assets/news/img/attachment-1683899023391.jpg",
    },
    {
      title: "Sekolah Adiwiyata Nasional",
      year: 2022,
      image: "/images/adiwiyata.jpg",
    },
    {
      title: "Juara 2 Lomba Debat Bahasa Inggris",
      year: 2023,
      image: "/images/debat.jpg",
    },
    {
      title: "Penghargaan Inovasi Pendidikan",
      year: 2021,
      image: "/images/inovasi.jpg",
    },
    {
      title: "Sekolah Berbasis Lingkungan",
      year: 2020,
      image: "/images/lingkungan.jpg",
    },
    {
      title: "Juara 3 Festival Sains dan Teknologi",
      year: 2023,
      image: "/images/sains.jpg",
    },
    {
      title: "Penghargaan Seni dan Budaya",
      year: 2022,
      image: "/images/seni.jpg",
    },
    {
      title: "Juara 1 Kompetisi Karya Ilmiah Remaja",
      year: 2023,
      image: "/images/karya-ilmiah.jpg",
    },
    {
      title: "Penghargaan Sekolah Ramah Anak",
      year: 2021,
      image: "/images/ramah-anak.jpg",
    },
    {
      title: "Juara Umum Olimpiade Matematika",
      year: 2022,
      image: "/images/matematika.jpg",
    },
    {
      title: "Sekolah Inovasi Digital",
      year: 2023,
      image: "/images/digital.jpg",
    },
    {
      title: "Juara 2 Festival Film Pendek",
      year: 2023,
      image: "/images/film-pendek.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg flex items-center p-4 hover:shadow-xl transition-shadow"
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-700">{award.title}</h3>
                <p className="text-sm text-gray-500">Tahun: {award.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PenghargaanSekolah;
