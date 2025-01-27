import { fetcher } from '@/lib/fetcher';

export async function generateStaticParams() {
  const data = await fetcher('/artikels?fields=urlArtikel');
  return data.data.map((article: { attributes: { urlArtikel: string } }) => ({
    slug: article.attributes.urlArtikel,
  }));
}

export default async function ArticleDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await fetcher(`/artikels?filters[urlArtikel][$eq]=${slug}&fields=Judul,Konten,Pengarang,documentId`);
  const article = data.data[0]?.attributes;

  if (!article) {
    throw new Error('Artikel tidak ditemukan');
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">{article.Judul}</h1>
      <p className="text-gray-500 mb-4">Ditulis oleh {article.Pengarang}</p>
      {article.documentId && (
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads/${article.documentId}`}
          alt={article.Judul}
          className="w-full rounded-lg mb-6"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: article.Konten }} />
    </div>
  );
}
