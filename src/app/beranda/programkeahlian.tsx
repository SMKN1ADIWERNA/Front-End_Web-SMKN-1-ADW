import React from "react";
import {
  Router,
  Building2,
  FlameKindling,
  Cable,
  Zap,
  Settings,
  Car,
} from "lucide-react";

const ProgramKeahlian: React.FC = () => {
  const programs = [
    {
      id: 1,
      name: "Teknik Jaringan Komputer Dan Telekomunikasi",
      icon: <Router className="w-12 h-12 text-blue-600" />,
    },
    {
      id: 2,
      name: "Desain Pemodelan Dan Informasi Bangunan",
      icon: <Building2 className="w-12 h-12 text-purple-600" />,
    },
    {
      id: 3,
      name: "Teknik Pengelasan Fabrikasi Logam",
      icon: <FlameKindling className="w-12 h-12 text-green-600" />,
    },
    {
      id: 4,
      name: "Teknik Elektronika",
      icon: <Cable className="w-12 h-12 text-red-600" />,
    },
    {
      id: 5,
      name: "Teknik Ketenagalistrikan",
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
    },
    {
      id: 6,
      name: "Teknik Mesin",
      icon: <Settings className="w-12 h-12 text-indigo-600" />,
    },
    {
      id: 7,
      name: "Teknik Otomotif",
      icon: <Car className="w-12 h-12 text-indigo-600" />,
    },
  ];

  return (
    <div className="relative dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-blue-600 mb-1 mt-3 dark:text-blue-400">
          Program Keahlian
        </h1>
        <p className="text-lg text-gray-600 mb-12 dark:text-gray-300">
          Lihat Program Keahlian Sekolah Unggulan Kami
        </p>
        <div className="grid grid-cols-4 gap-8">
          {/* Left cards */}
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {programs.slice(0, 6).map((program) => (
              <div
                key={program.id}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col items-center text-center h-full"
              >
                <div className="mb-4">{program.icon}</div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {program.name}
                </h2>
              </div>
            ))}
          </div>

          {/* Right card */}
          <div className="col-span-1 bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col items-center justify-center text-center h-full">
            <div>
              <div className="mb-4">{programs[6].icon}</div>
              <h2 className="text-lg font-semibold text-gray-900">
                {programs[6].name}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramKeahlian;
