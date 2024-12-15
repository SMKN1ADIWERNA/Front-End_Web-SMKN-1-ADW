"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchBannerData } from "../api/bannerData";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface BannerImage {
  url: string; // Ensure the interface has the required properties
  title?: string; // Make title and description optional
  description?: string;
}

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [images, setImages] = useState<BannerImage[]>([]); // Set initial type
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const bannerData = await fetchBannerData();
      setImages(bannerData);
      setIsLoading(false);

      // Preload images to cache them
      bannerData.forEach((img) => {
        const imgElement = new Image();
        imgElement.src = img.url;
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, images]);

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="relative w-full h-[90vh] bg-cover bg-center overflow-hidden">
      <div className="relative w-full h-full">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-white text-xl">Loading...</p>
          </div>
        ) : (
          <>
            <motion.div
              className="flex w-full h-full"
              initial={{ x: "0%" }}
              animate={{
                x:
                  direction === "next"
                    ? `-${currentIndex * 100}%`
                    : `-${currentIndex * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {images.map((image, index) => (
                <motion.div key={index} className="w-full h-full flex-shrink-0">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    loading="lazy" // Lazy load images
                  />
                </motion.div>
              ))}
            </motion.div>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
              <motion.div
                className="container mx-auto px-6 lg:px-12 text-white relative"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h1
                  className="text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                  style={{
                    fontSize: "clamp(1.5rem, 5vw, 3rem)", // Ukuran minimum, responsif, dan maksimum
                    whiteSpace: "normal", // Membolehkan pembungkusan teks
                    wordBreak: "break-word", // Memecah kata panjang
                  }}
                >
                  {images[currentIndex]?.title}
                </h1>
              </motion.div>

              <motion.div
                className="container mx-auto px-6 lg:px-12 text-white relative"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="mb-6 text-lg">
                  {images[currentIndex]?.description}
                </p>
                <motion.button
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full inline-flex items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Selengkapnya
                  <ArrowRight className="ml-2" />
                </motion.button>
              </motion.div>

              <div className="absolute bottom-20 right-10 flex space-x-4">
                <motion.button
                  className="text-white p-3 rounded-full bg-gray-700 hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrev}
                >
                  <ArrowLeft />
                </motion.button>
                <motion.button
                  className="text-white p-3 rounded-full bg-gray-700 hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                >
                  <ArrowRight />
                </motion.button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
