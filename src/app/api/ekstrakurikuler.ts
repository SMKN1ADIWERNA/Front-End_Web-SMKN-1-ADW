// utils/api.ts
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const API_KEY = process.env.STRAPI_API_KEY;

export const fetchEkstrakurikuler = async () => {
  const response = await fetch(`${BASE_URL}/api/ekstrakurikulers?populate=Thumbnail`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data.data.map((item: any) => ({
    id: item.id,
    name: item.Nama,
    image: `${BASE_URL}${item.Thumbnail.formats.medium.url}`,
    description: item.Keterangan,
  }));
};
