import { fetcher } from '../lib/fetcher';
import ArticleCard from './ArticleCard';
import { fetchArticles } from '../../api/artikel';


export default async function ArticlesPage() {
  const data = await fetcher('/artikels?fields=Judul,Deskripsi,urlArtikel,documentId');

  const articles = data.data;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Daftar Artikel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article: any) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.attributes.Judul}
            description={article.attributes.Deskripsi}
            url={article.attributes.urlArtikel}
            imageUrl={
              article.attributes.documentId
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads/${article.attributes.documentId}`
                : null
            }
          />
        ))}
      </div>
    </div>
  );
}
