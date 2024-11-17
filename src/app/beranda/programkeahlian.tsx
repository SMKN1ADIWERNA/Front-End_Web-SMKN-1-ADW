import React from "react";
import { GraduationCap, Wrench, Code, Briefcase, Truck, Layout } from "lucide-react";

const ProgramKeahlian: React.FC = () => {
  const programs = [
    {
      id: 1,
      name: "Teknik Kendaraan Ringan Otomotif",
      icon: <Truck className="w-12 h-12 text-blue-600" />,
    },
    {
      id: 2,
      name: "Teknik dan Bisnis Sepeda Motor",
      icon: <Wrench className="w-12 h-12 text-green-600" />,
    },
    {
      id: 3,
      name: "Rekayasa Perangkat Lunak",
      icon: <Code className="w-12 h-12 text-purple-600" />,
    },
    {
      id: 4,
      name: "Bisnis Daring dan Pemasaran",
      icon: <Briefcase className="w-12 h-12 text-yellow-600" />,
    },
    {
      id: 5,
      name: "Desain Pemodelan dan Informasi Bangunan",
      icon: <Layout className="w-12 h-12 text-red-600" />,
    },
    {
      id: 6,
      name: "Teknik Elektronika Industri",
      icon: <GraduationCap className="w-12 h-12 text-indigo-600" />,
    },
  ];

  return (
    <div className="relative dark:bg-gray-900">
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
                <h1 className="text-2xl font-bold text-blue-600 mb-1 mt-3 md:text-left dark:text-blue-400">
                    Program Keahlian
                </h1>
                <p className="text-lg text-gray-600 mb-12 md:text-left dark:text-gray-300">
                    Lihat Program Keahlian Sekolah Unggulan Kami
                </p>      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col items-center text-center"
          >
            <div className="mb-4">{program.icon}</div>
            <h2 className="text-lg font-semibold text-gray-900">{program.name}</h2>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProgramKeahlian;
