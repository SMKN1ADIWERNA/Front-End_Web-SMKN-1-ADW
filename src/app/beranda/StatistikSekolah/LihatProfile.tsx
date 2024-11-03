import React, { useEffect, useState } from 'react';
import { fetchStatistikSekolah } from '../../api/statistikSekolahApi';

const LihatProfile = () => {
  const [profile, setProfile] = useState<{
    Nama_Kepala_Sekolah: string;
    Profile_Kepala_Sekolah: string;
  } | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchStatistikSekolah();
      if (data) {
        setProfile({
          Nama_Kepala_Sekolah: data.Nama_Kepala_Sekolah,
          Profile_Kepala_Sekolah: `http://202.65.116.9:1337${data.Profile_Kepala_Sekolah?.data?.attributes?.url}`,
        });
      }
    };
    getData();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white w-full shadow-lg rounded-3xl p-6 max-w-3xl mx-auto mt-10 dark:bg-gray-800">
      <div className="text-center">
        <img
          src={profile.Profile_Kepala_Sekolah}
          alt="Kepala Sekolah"
          className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
          style={{ aspectRatio: '1 / 1' }}
        />
        <h2 className="text-xl font-semibold">{profile.Nama_Kepala_Sekolah}</h2>
      </div>
    </div>
  );
};

export default LihatProfile;
