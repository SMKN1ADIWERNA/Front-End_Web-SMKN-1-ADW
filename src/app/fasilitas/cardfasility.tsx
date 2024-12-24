"use client";
import React, { useEffect, useState } from "react";
import { fetchFacilitiesData } from "../api/fetchFacilities";
import { Image } from "lucide-react";
import Link from "next/link";

interface FacilityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  slug: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({
  title,
  description,
  icon,
  image,
  slug,
}) => {
  return (
    <Link href={`/fasilitas/${slug}`}>
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full text-blue-600">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

const CardFacility: React.FC = () => {
  const [facilities, setFacilities] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFacilitiesData();
      setFacilities(data);
    };
    fetchData();
  }, []);

  const iconMapping = [<Image size={32} />];

  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={facility.id}
              title={facility.title}
              description={facility.description}
              icon={iconMapping[index % iconMapping.length]} // Map icon berdasarkan urutan
              image={facility.image}
              slug={facility.slug} // Gunakan slug untuk navigasi
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardFacility;
