interface StatistikSekolahAttributes {
  Nama_Kepala_Sekolah: string;
  Deskripsi_Text: string;
  Jumlah_Guru_Staff: string;
  Jumlah_Siswa: string;
  Jumlah_Rombongan_Belajar: string;
  Profile_Kepala_Sekolah?: {
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
export const fetchStatistikSekolah =
  async (): Promise<StatistikSekolahAttributes | null> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/statistik?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        console.error(
          "Error fetching data:",
          response.status,
          response.statusText
        );
        return null;
      }

      const result: ApiResponse = await response.json();
      const data = result.data.attributes;

      return {
        Nama_Kepala_Sekolah: data?.Nama_Kepala_Sekolah || "Unknown",
        Deskripsi_Text: data?.Deskripsi_Text || "",
        Jumlah_Guru_Staff: data?.Jumlah_Guru_Staff || "0",
        Jumlah_Siswa: data?.Jumlah_Siswa || "0",
        Jumlah_Rombongan_Belajar: data?.Jumlah_Rombongan_Belajar || "0",
        Profile_Kepala_Sekolah: data?.Profile_Kepala_Sekolah
          ? {
              data: {
                attributes: {
                  url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.Profile_Kepala_Sekolah.data.attributes.url}`,
                },
              },
            }
          : undefined,
      };
    } catch (error) {
      console.error("Error fetching statistik sekolah data:", error);
      return null;
    }
  };
