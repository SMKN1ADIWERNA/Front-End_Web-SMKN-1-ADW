import React from "react";
import { Users, Briefcase, Book } from "lucide-react";

const TimSmkn1Adw: React.FC = () => {
  const teams = [
    {
      name: "Tim Kesiswaan",
      description:
        "Tim ini bertanggung jawab atas kegiatan ekstrakurikuler dan pengembangan siswa di SMKN 1 Adiwerna.",
      icon: <Users size={48} className="text-blue-500" />,
    },
    {
      name: "Tim BK",
      description:
        "Bimbingan dan Konseling berfokus pada mendukung kesejahteraan mental dan karier siswa.",
      icon: <Briefcase size={48} className="text-green-500" />,
    },
    {
      name: "Tim Kurikulum",
      description:
        "Tim ini mengelola program pembelajaran dan pengembangan kurikulum sekolah.",
      icon: <Book size={48} className="text-purple-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center">{team.icon}</div>
              <h2 className="text-xl font-bold text-gray-700 text-center mt-4">
                {team.name}
              </h2>
              <p className="text-gray-500 text-center mt-2">{team.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TimSmkn1Adw;
