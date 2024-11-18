"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Skeleton from '../components/Skeleton';
import CardComponent from './CardComponent';
// import HeroSection from './HeroSection';
import { fetchJurusanData } from '../api';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

interface Card {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
}

const Jurusan: React.FC = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchJurusanData();
      setCards(data);
      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      {/* <HeroSection /> */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full justify-items-center">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => <Skeleton key={index} />)
        ) : (
          cards.map((card, index) => (
            <div key={card.id} className="relative">
              <CardComponent
                card={card}
                expanded={expandedIndices.includes(index)}
                onClick={() => {}}
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <FacebookShareButton url={card.url} title={card.title}>
                  <button className="bg-blue-600 text-white p-2 rounded">Facebook</button>
                </FacebookShareButton>
                <TwitterShareButton url={card.url} title={card.title}>
                  <button className="bg-blue-400 text-white p-2 rounded">Twitter</button>
                </TwitterShareButton>
                <WhatsappShareButton url={card.url} title={card.title}>
                  <button className="bg-green-500 text-white p-2 rounded">WhatsApp</button>
                </WhatsappShareButton>
              </div>
              <Link href={`/jurusan/${card.url}`} className="block absolute inset-0 z-10" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Jurusan;
