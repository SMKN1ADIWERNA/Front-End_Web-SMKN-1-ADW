'use client'
import React, { useEffect, useState } from "react";

export const fetchFacilitiesData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/fasilitas?populate=Gambar`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      console.error("Error fetching data:", response.status, response.statusText);
      return [];
    }

    const result = await response.json();

    const facilitiesData = result.data.map((fasilitas: any) => ({
      id: fasilitas.id,
      name: fasilitas.Nama_Tempat || "No Title",
      description: fasilitas.Deskripsi || "No Description",
      image: fasilitas.Gambar && fasilitas.Gambar[0]?.formats?.medium?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${fasilitas.Gambar[0].formats.medium.url}`
        : "https://via.placeholder.com/300x200?text=No+Image",
      slug: fasilitas.Url_Browser || `fasilitas-${fasilitas.id}`, // Ambil Url_Browser dari Strapi
    }));

    return facilitiesData;
  } catch (error) {
    console.error("Error fetching fasilitas data:", error);
    return [];
  }
};

const Fasilitas: React.FC = () => {
  const [facilities, setFacilities] = useState<
    { id: number; name: string; image: string; description: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadFacilities = async () => {
      const data = await fetchFacilitiesData();
      setFacilities(data);
      setLoading(false);
    };

    loadFacilities();
  }, []);

  return (
    <div className="relative dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-blue-600 mb-1 mt-3 md:text-left dark:text-blue-400">
          Fasilitas Sekolah
        </h1>
        <p className="text-lg text-gray-600 mb-12 md:text-left dark:text-gray-300">
          Lihat Fasilitas Sekolah Unggulan Kami
        </p>
        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-300">Memuat data...</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
              >
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900 text-center">
                    {facility.name}
                  </h2>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Fasilitas;
