// components/NoteCard.jsx
import React from 'react';

const NoteCard = ({ title, content }) => {
  return (
    <div className="bg-purple-900 text-white p-4 rounded-lg shadow-md space-y-2 hover:shadow-lg transition duration-300 break-words">
      <h3 className="text-lg font-semibold text-purple-300">{title}</h3>
      <p className="text-purple-200 text-sm">{content}</p>
      <div className="flex gap-3 mt-2">
        <button className="text-sm px-3 py-1 bg-purple-700 rounded hover:bg-purple-800 transition">Edit</button>
        <button className="text-sm px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition">Delete</button>
      </div>
    </div>
  );
};

export default NoteCard;
