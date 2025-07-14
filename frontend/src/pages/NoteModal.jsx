// components/NoteModal.jsx
import React from 'react';
import { motion } from 'framer-motion';

const NoteModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-purple-900 p-6 rounded-xl w-full max-w-md"
      >
        <h2 className="text-xl font-semibold text-purple-300 mb-4">Create a New Note</h2>
        <form className="space-y-4 max-h-[70vh] overflow-y-auto">
          <input
            type="text"
            placeholder="Note Title"
            className="w-full px-4 py-2 rounded bg-purple-800 text-white placeholder-purple-400 focus:outline-none"
          />
          <textarea
            rows="5"
            placeholder="Note Content"
            className="w-full px-4 py-2 rounded bg-purple-800 text-white placeholder-purple-400 focus:outline-none"
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default NoteModal;
