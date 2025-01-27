import React from "react";

// Komponen untuk menampilkan detail fasilitas
interface FasilitasDetailProps {
  title: string;
  description: string;
  image: string;
}

// Fungsi untuk mendapatkan data fasilitas berdasarkan slug
const getFasilitasData = async (slug: string) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/fasilitas?filters[Url_Browser][$eq]=${slug}&populate=Gambar`;

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
    },
    cache: "no-store", // Menghindari caching (opsional, jika data selalu dinamis)
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await response.json();
  const fasilitas = result.data[0];

  if (!fasilitas) {
    return null;
  }

  return {
    title: fasilitas.Nama_Tempat || "No Title",
    description: fasilitas.Deskripsi || "No Description",
    image:
      fasilitas.Gambar && fasilitas.Gambar[0]?.formats?.medium?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${fasilitas.Gambar[0].formats.medium.url}`
        : "https://via.placeholder.com/300x200?text=No+Image",
  };
};

const FasilitasDetail: React.FC<FasilitasDetailProps> = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Ambil data fasilitas
  const fasilitas = await getFasilitasData(slug);

  if (!fasilitas) {
    return (
      <div className="container mx-auto px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-800">Fasilitas tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="flex flex-col items-center">
        <img
          src={fasilitas.image}
          alt={fasilitas.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-800">{fasilitas.title}</h1>
        <p className="mt-4 text-gray-600">{fasilitas.description}</p>
      </div>
    </div>
  );
};

export default FasilitasDetail;
