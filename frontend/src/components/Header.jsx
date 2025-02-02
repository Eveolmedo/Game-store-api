import React from 'react';
import logo from "../assets/PlayStation_2_logo.svg.png"

const Header = () => {
  return (
      <div className="justify-items-center">
      <img
        src={logo}
        alt="Logo Playstation 2"
        className="w-64 h-64 object-contain"
      />
    </div>
  );
};

export default Header;