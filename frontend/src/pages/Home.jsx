// pages/Home.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NoteCard from './NoteCard';
import NoteModal from './NoteModal';
import { Plus } from 'lucide-react';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 px-4 sm:px-6 lg:px-12 py-10 text-white relative overflow-hidden">
      
      {/* Decorative Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 blur-3xl">
        <div className="absolute w-96 h-96 bg-purple-700 rounded-full top-[-50px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-pink-600 rounded-full bottom-[-80px] right-[-120px] animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-purple-100 tracking-wide relative"
        >
          Your Notes
          <span className="block h-1 w-16 bg-purple-500 mt-2 rounded-full"></span>
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white px-6 py-3 rounded-full font-medium shadow-xl backdrop-blur-lg border border-purple-400"
        >
          <Plus className="w-5 h-5" />
          Add Note
        </motion.button>
      </div>

      {/* Notes Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10"
      >
        <NoteCard title="Sample Note 1" content="This is a dummy note." />
        <NoteCard title="Reminder" content="Buy cake for gf." />
        <NoteCard title="Study Plan" content="Finish React + Mongo by Saturday." />
        <NoteCard title="Inspiration" content="Stay consistent. Build daily." />
      </motion.div>

      {/* Modal */}
      {showModal && <NoteModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Home;
