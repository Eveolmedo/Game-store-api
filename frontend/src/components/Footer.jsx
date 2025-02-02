import React from 'react';
import { FaMoneyBill, FaCreditCard, FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope, FaTruck } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="bg-[#3E5F82] w-100 h-80 mt-40 p-20 space-x-50 flex justify-around text-white">
      <div>
        <div>
          <h1 className="text-xl font-bold">Medios de pago</h1>
          <div className="flex place-items-center mt-2">
            <FaMoneyBill className='text-3xl mr-5'/>
            <FaCreditCard className='text-2xl'/>
          </div>
        </div>
        <h1 className="text-xl font-bold mt-10">Envios a todo el pais</h1>
        <FaTruck className='text-3xl mt-5'/>
      </div>
        <div>
          <h1 className="text-xl font-bold">Seguinos en nuestras redes</h1>
          <div className="flex place-items-center mt-2">
            <FaFacebook className='text-3xl mr-5'/>
            <FaInstagram className='text-3xl mr-5'/>
            <FaTwitter className='text-3xl mr-5'/>
          </div>
          <h2 className="text-xl font-bold mt-10">Contacto</h2>
          <div className="flex place-items-center mt-2">
            <FaWhatsapp className='text-2xl mr-2'/>
            <p>1160446688</p>
          </div>
          <div className="flex place-items-center mt-2">
            <FaEnvelope className='text-2xl mr-2'/>
            <p>gamestore@gmail.com</p>
          </div>
        </div>
    </div>
  );
};

export default Footer;