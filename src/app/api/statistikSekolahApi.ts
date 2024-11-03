// src/api/statistikSekolahApi.ts

interface StatistikSekolahAttributes {
    Nama_Kepala_Sekolah: string;
    Deskripsi_Text: string;
    Guru_Staff: string;
    Siswa: string;
    Rombel: string;
    Profile_Kepala_Sekolah: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  }
  
  interface StatistikSekolahData {
    id: number;
    attributes: StatistikSekolahAttributes;
  }
  
  export interface ApiResponse {
    data: StatistikSekolahData;
  }
  
  // Fetch data from Strapi API
  export const fetchStatistikSekolah = async (): Promise<StatistikSekolahAttributes | null> => {
    try {
      const response = await fetch('http://202.65.116.9:1337/api/statistik-sekolah?populate=*');
      const result: ApiResponse = await response.json();
      return result.data.attributes;
    } catch (error) {
      console.error('Error fetching statistik sekolah data:', error);
      return null;
    }
  };
  