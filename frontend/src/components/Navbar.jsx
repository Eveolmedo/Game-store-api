import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#043468] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Game Store</h1>
        <ul className="flex gap-4">
          <li><a href="/" className="hover:underline">INICIO</a></li>
          <li><a href="/login" className="hover:underline">INICIAR SESIÓN</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;