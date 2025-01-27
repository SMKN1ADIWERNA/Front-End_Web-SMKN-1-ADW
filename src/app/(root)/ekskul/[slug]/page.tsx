import { Metadata } from 'next';

interface EkskulDetailProps {
  params: { slug: string };
}

// (Opsional) Metadata untuk SEO
export function generateMetadata({ params }: EkskulDetailProps): Metadata {
  return {
    title: `Ekskul ${params.slug} - SMK 1 Adiwerna`,
    description: `Informasi lengkap tentang ekstrakurikuler ${params.slug}`,
  };
}

const EkskulDetail = async ({ params }: EkskulDetailProps) => {
  const { slug } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/ekskul?filters[Url_Browser][$eq]=${slug}&populate=*`,
    { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}` } }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  const item = data.data[0];
  const activity = {
    name: item.attributes.Nama,
    description: item.attributes.Keterangan,
    image: `${process.env.NEXT_PUBLIC_API_URL}${item.attributes.Thumbnail.data.attributes.url}`,
  };

  return (
    <div className="container mx-auto p-4">
      <img src={activity.image} alt={activity.name} className="rounded-lg mb-4" />
      <h1 className="text-3xl font-bold mb-2">{activity.name}</h1>
      <p className="text-lg">{activity.description}</p>
    </div>
  );
};

export default EkskulDetail;
