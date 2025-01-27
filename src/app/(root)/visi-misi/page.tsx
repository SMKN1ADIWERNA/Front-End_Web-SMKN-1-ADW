import React from "react";
// import Cover from "./cover";
import { CheckCircle } from "lucide-react";

const VisiMisi: React.FC = () => {
  const visiMisiItems = [
    "Mengembangkan potensi siswa secara maksimal melalui pendidikan berkualitas.",
    "Menanamkan nilai-nilai moral dan etika sebagai dasar kehidupan.",
    "Menyiapkan siswa untuk menghadapi tantangan global.",
    "Mendorong inovasi dan kreativitas dalam pembelajaran.",
    "Menjadi sekolah unggulan yang dikenal karena prestasi akademik.",
    "Meningkatkan kerja sama antara guru, siswa, dan masyarakat.",
    "Menyediakan fasilitas pendidikan terbaik bagi siswa.",
    "Mengintegrasikan teknologi dalam setiap aspek pembelajaran.",
    "Menjaga kelestarian lingkungan dalam kegiatan sekolah.",
    "Meningkatkan kesejahteraan guru dan staf sekolah.",
    "Menghasilkan lulusan yang siap kerja dan berkompetensi tinggi.",
    "Membangun karakter siswa yang disiplin, tanggung jawab, dan religius.",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiMisiItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4 hover:shadow-xl transition-shadow"
            >
              <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full">
                <CheckCircle size={24} className="text-blue-500" />
              </div>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
