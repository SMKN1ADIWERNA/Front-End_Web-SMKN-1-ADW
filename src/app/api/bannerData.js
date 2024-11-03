export const fetchBannerData = async () => {
    try {
      const response = await fetch('http://202.65.116.9:1337/api/banner-gambar-berandas?populate=*');
      const result = await response.json();
  
      const bannerData = result.data.map(item => {
        const imageData = item.attributes.Gambar?.data?.[0];
        return {
          url: imageData ? `http://202.65.116.9:1337${imageData.attributes.url}` : '',
          title: item.attributes.Judul,
          description: item.attributes.Deskripsi,
        };
      });
  
      return bannerData;
    } catch (error) {
      console.error('Error fetching banner data:', error);
      return [];
    }
  };
  