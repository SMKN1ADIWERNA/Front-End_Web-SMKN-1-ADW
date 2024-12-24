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
      title: fasilitas.Nama_Tempat || "No Title",
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
