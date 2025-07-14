// components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-900 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-purple-300">NoteVault</h1>
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition duration-300">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
