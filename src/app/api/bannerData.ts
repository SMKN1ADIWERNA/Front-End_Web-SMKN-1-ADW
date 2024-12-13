export const fetchBannerData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/highlights?populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    });

    if (!response.ok) {
      console.error('Error fetching data:', response.status, response.statusText);
      return [];
    }

    const result = await response.json();

    const bannerData = result.data.map((item: any) => {
      const imageUrl = item.Media_Gambar?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.Media_Gambar.url}`
        : '';
      return {
        url: imageUrl,
        title: item.Judul || 'No Title',
        description: item.Deskripsi_Singkat || 'No Description',
      };
    });
    

    return bannerData;
  } catch (error) {
    console.error('Error fetching highlight data:', error);
    return [];
  }
};
