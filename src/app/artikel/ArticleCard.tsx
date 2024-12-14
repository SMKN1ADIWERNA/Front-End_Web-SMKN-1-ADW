import Link from 'next/link';
import { Image } from 'lucide-react';

type ArticleCardProps = {
  id: number;
  title: string;
  description: string;
  url: string;
  imageUrl: string | null;
};

const ArticleCard = ({ id, title, description, url, imageUrl }: ArticleCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
    {imageUrl ? (
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg w-full h-48 object-cover mb-4"
      />
    ) : (
      <div className="flex items-center justify-center bg-gray-200 h-48 rounded-lg mb-4">
        <Image size={32} className="text-gray-500" />
      </div>
    )}
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link href={`/articles/${url}`}>
      <a className="text-blue-500 hover:underline">Baca Selengkapnya</a>
    </Link>
  </div>
);

export default ArticleCard;
