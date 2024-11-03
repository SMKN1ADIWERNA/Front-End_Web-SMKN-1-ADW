import React, { useEffect, useState } from 'react';
import { fetchStatistikSekolah } from '../../api/statistikSekolahApi';

const Selengkapnya = () => {
  const [statistik, setStatistik] = useState<{
    Nama_Kepala_Sekolah: string;
    Deskripsi_Text: string;
    Profile_Kepala_Sekolah: string;
  } | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchStatistikSekolah();
      if (data) {
        setStatistik({
          Nama_Kepala_Sekolah: data.Nama_Kepala_Sekolah,
          Deskripsi_Text: data.Deskripsi_Text,
          Profile_Kepala_Sekolah: `http://202.65.116.9:1337${data.Profile_Kepala_Sekolah?.data?.attributes?.url}`,
        });
      }
    };
    getData();
  }, []);

  if (!statistik) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white w-full shadow-lg rounded-3xl p-6 max-w-4xl mx-auto mt-10 dark:bg-gray-800">
      <div className="flex items-center mb-6">
        <img
          src={statistik.Profile_Kepala_Sekolah}
          alt="Kepala Sekolah"
          className="w-24 h-24 rounded-full object-cover mr-4"
          style={{ aspectRatio: '1 / 1' }}
        />
        <div>
          <h2 className="text-2xl font-semibold">Sambutan Kepala Sekolah</h2>
          <p className="text-gray-500">{statistik.Nama_Kepala_Sekolah}</p>
        </div>
      </div>
      <p className="text-gray-600">
        {statistik.Deskripsi_Text}
      </p>
    </div>
  );
};

export default Selengkapnya;
