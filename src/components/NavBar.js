import React, { useState } from 'react';
import '../index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
  // State to track whether the sidebar is open
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar's open/closed state
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to reload the page
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="relative">
      {/* Navbar section */}
      <nav className="navbar flex items-center bg-white text-black py-7 px-5">
        {/* Logo section with click handler to reload the page */}
        <div className="logo-container cursor-pointer" onClick={reloadPage}>
          <div className="logo">LOGO</div>
        </div>
        {/* Vertical line after the logo */}
        <div className="vertical-line-left border-l h-6 border-gray-300"></div>
        {/* Navigation links section */}
        <div className="links-container flex space-x-8">
          <a href="#home" className="hover:border-b-2 hover:border-gold">Home</a>
          <a href="#about" className="hover:border-b-2 hover:border-gold">About</a>
          <a href="#services" className="hover:border-b-2 hover:border-gold">Services</a>
          <a href="#news" className="hover:border-b-2 hover:border-gold">News</a>
          <a href="#contact" className="hover:border-b-2 hover:border-gold">Contact</a>
        </div>
        {/* Vertical line before the menu icon */}
        <div className="vertical-line-right border-l h-6 border-gray-300"></div>
        {/* Menu icon button */}
        <button className="menu-icon ml-auto px-4 text-3xl" onClick={toggleSidebar}>☰</button>
      </nav>

      {/* Sidebar section */}
      <div
        className={`fixed top-0 right-0 h-full w-100 bg-[#171010] text-white transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 sidebar-container`}
      >
        {/* Close button for the sidebar */}
        <button className="absolute top-4 left-4 text-2xl" onClick={toggleSidebar}>
          &times;
        </button>
        {/* Sidebar content */}
        <div className="p-4">
          {/* Company name */}
          <div className="text-2xl mb-4">Glass Making Company</div>
          {/* Briefing about the company */}
          <div className="mb-4">We specialize in handcrafted glass products, providing top-notch services and beautiful glassware.</div>
          {/* Contact information */}
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
          {/* Social media icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {sidebarOpen && <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Navbar;
