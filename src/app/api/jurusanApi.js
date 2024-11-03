// src/api/jurusanApi.js

export const fetchJurusanData = async () => {
    try {
      const response = await fetch('http://202.65.116.9:1337/api/jurusans?populate=*');
      const data = await response.json();
      const cardsData = data.data.map((item) => ({
        id: item.id,
        title: item.attributes.Judul_Jurusan,
        description: item.attributes.Deskripsi_Jurusan,
        img: item.attributes.Gambar_Jurusan.data
          ? `http://202.65.116.9:1337${item.attributes.Gambar_Jurusan.data.attributes.url}`
          : 'https://t4.ftcdn.net/jpg/02/97/01/65/360_F_297016511_NWrJG1s3mpyjqD3hwdKidfYsvhEnrPm4.jpg',
        url: item.attributes.JurusanURL,
      }));
      return cardsData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  
  export const fetchJurusanById = async (id) => {
    try {
      const response = await fetch(`http://202.65.116.9:1337/api/jurusans?filters[JurusanURL][$eq]=${id}&populate=*`);
      const data = await response.json();
      return data.data[0];
    } catch (error) {
      console.error("Error fetching jurusan by ID:", error);
      throw error;
    }
  };
  
  export const fetchAllJurusan = async () => {
    try {
      const response = await fetch(`http://202.65.116.9:1337/api/jurusans`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching all jurusan:", error);
      throw error;
    }
  };
  