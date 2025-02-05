import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#043468] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Game Store</h1>
        <ul className="flex gap-4">
          <li><Link to="/" className="hover:underline">INICIO</Link></li>
          <li><Link to="/login" className="hover:underline">INICIAR SESIÓN</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;