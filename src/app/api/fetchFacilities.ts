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

    const facilitiesData = result.data.map((facility: any) => ({
      id: facility.id,
      title: facility.Nama_Tempat || "No Title",
      description: facility.Deskripsi || "No Description",
      image: facility.Gambar && facility.Gambar[0]?.formats?.medium?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${facility.Gambar[0].formats.medium.url}`
        : "https://via.placeholder.com/300x200?text=No+Image",
    }));

    return facilitiesData;
  } catch (error) {
    console.error("Error fetching facility data:", error);
    return [];
  }
};
