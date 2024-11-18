import React from 'react';
import { motion } from 'framer-motion';
import share from './share.png';

interface Card {
  id: number;
  title: string;
  description: string;
  img: string;
}

interface CardComponentProps {
  card: Card;
  expanded: boolean;
  onClick: () => void;
  onShareClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const CardComponent: React.FC<CardComponentProps> = ({ card, expanded, onClick, onShareClick }) => {
  return (
    <motion.div
      className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden cursor-pointer relative flex flex-col justify-between"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      style={{
        minWidth: expanded ? '300px' : '250px',
        maxWidth: '100%',
      }}
    >
      <a href="#" className="relative">
        <img className="rounded-t-lg w-full h-48 object-cover" src={card.img} alt={card.title} />
        <h5 className="absolute bottom-0 left-0 m-4 text-white bg-blue-600 rounded-full px-4 py-2 text-md">
          {card.title}
        </h5>
      </a>
      <div className="p-5 flex-grow">
        <p className="mb-3 font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
          {expanded ? card.description : `${card.description.substring(0, 120)}...`}
        </p>
      </div>
      <div className="p-5 pt-0 flex items-center justify-between">
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
          Jelajahi
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
        <motion.div
          className="bg-blue-500 rounded-lg p-2 shadow-lg hover:shadow-xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={onShareClick}
        >
          <img
            src={share.src}
            alt="Share Icon"
            className="w-4 h-4"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardComponent;
