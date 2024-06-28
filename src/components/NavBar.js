import React, { useState } from 'react';
import '../index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = ({ fixed }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={`relative ${fixed ? 'fixed-navbar' : ''}`}>
      <nav className="navbar flex items-center bg-white text-black py-7 px-5">
        <div className="logo-container cursor-pointer" onClick={reloadPage}>
          <div className="logo">LOGO</div>
        </div>
        <div className="vertical-line-left border-l h-6 border-gray-300"></div>
        <div className="links-container flex space-x-8">
          <a href="#home" className="hover:border-b-2 hover:border-gold">Home</a>
          <a href="#about" className="hover:border-b-2 hover:border-gold">About</a>
          <a href="#services" className="hover:border-b-2 hover:border-gold">Services</a>
          <a href="#news" className="hover:border-b-2 hover:border-gold">News</a>
          <a href="#contact" className="hover:border-b-2 hover:border-gold">Contact</a>
        </div>
        <div className="vertical-line-right border-l h-6 border-gray-300"></div>
        <button className="menu-icon ml-auto px-4 text-3xl" onClick={toggleSidebar}>☰</button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-100 bg-[#171010] text-white transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 sidebar-container`}
      >
        <button className="absolute top-4 left-4 text-2xl" onClick={toggleSidebar}>
          &times;
        </button>
        <div className="p-4">
          <div className="text-2xl mb-4">Glass Making Company</div>
          <div className="mb-4">We specialize in handcrafted glass products, providing top-notch services and beautiful glassware.</div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <i className="fa fa-map-marker mr-2"></i>
              <span>123 Glass Street, City, Country</span>
            </div>
            <div className="flex items-center mb-2">
              <i className="fa fa-phone mr-2"></i>
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center mb-2">
              <i className="fa fa-envelope mr-2"></i>
              <span>info@glasscompany.com</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>

      {sidebarOpen && <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default NavBar;
