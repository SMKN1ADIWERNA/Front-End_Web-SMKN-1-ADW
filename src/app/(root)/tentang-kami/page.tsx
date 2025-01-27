import React from 'react';

const TentangKami = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h1>
          <p className="text-lg text-gray-600">
            Selamat datang di SMK 1 Adiwerna! Kami adalah sekolah yang berdedikasi untuk menciptakan generasi penerus yang berkualitas dan siap menghadapi tantangan dunia kerja.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="w-full md:w-5/12 bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/headmaster.jpg"
              alt="Kepala Sekolah"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Kepala Sekolah</h2>
              <p className="text-sm text-gray-600">
                Selamat datang di SMK 1 Adiwerna. Kami berkomitmen untuk memberikan pendidikan terbaik bagi siswa dengan berbagai program unggulan.
              </p>
            </div>
          </div>

          <div className="w-full md:w-5/12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Visi dan Misi
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Visi:</strong> Menjadi sekolah unggul yang menghasilkan lulusan berkualitas.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Misi:</strong>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Meningkatkan mutu pendidikan melalui inovasi pembelajaran.</li>
                  <li>Menyiapkan siswa untuk dunia kerja dan wirausaha.</li>
                  <li>Membentuk karakter siswa yang berintegritas.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
