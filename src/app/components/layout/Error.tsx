import React from 'react';
import { Ban } from 'lucide-react';
import { motion } from 'framer-motion';

const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <motion.div
        className="bg-white/30 backdrop-blur-lg p-8 rounded-xl shadow-lg text-center max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Ban style={{ fontSize: 80, color: '#ff3b30' }} />
        <h1 className="text-3xl font-semibold text-gray-800 mt-4">Sepertinya Ada Kesalahan</h1>
        <p className="text-lg text-gray-600 mt-2 mb-6">
          Coba Lagi Atau Refresh Browser Anda.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Mulai Ulang
        </button>
      </motion.div>
    </div>
  );
};

export default Error;
