import React, { useState } from 'react';
import '../index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useCart } from '../context/CartContext';

const NavBar = ({ fixed }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cart } = useCart();// Access the cart state

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    < div className={`relative ${fixed ? 'fixed-navbar' : ''}`}>
      <nav className="navbar flex items-center bg-white text-black px-5 py-7">
        <div className="logo-container cursor-pointer border flex justify-center">
          <Link to="/" className="logo">LOGO</Link>
        </div>
        <div className="vertical-line-left border-l h-6 border-gray-300"></div>
        <div className="links-container flex space-x-8">
          <Link to="/" className="pagelinks hover:border-b-2 hover:border-gold">Home</Link>
          <Link to="/services" className="pagelinks hover:border-b-2 hover:border-gold">Services</Link>
          <Link to="/about" className="pagelinks hover:border-b-2 hover:border-gold">About</Link>
          <Link to="/NewsPage" className="pagelinks hover:border-b-2 hover:border-gold">News</Link>
          <Link to="/Contact" className="pagelinks hover:border-b-2 hover:border-gold">Contact</Link>
        </div>
        <div className="vertical-line-right border-l h-6 border-gray-300"></div>
        <div className="flex items-center ml-auto space-x-4">
          <Link to='/cart' className=" relative fa fa-shopping-cart text-lg cursor-pointer px-4"></Link>
            {cart.length > 0 &&(
              <span className='cart-count absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>{cart.length}</span>
            )}
          <i className="fa fa-user text-lg cursor-pointer px-4"></i>
          <button className="menu-icon px-4 text-3xl" onClick={toggleSidebar}>☰</button>
        </div>
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
          <div className="mb-4 menudiff">We specialize in handcrafted glass products, providing top-notch services and beautiful glassware.</div>

          {/* Links moved to sidebar - displayed in a column */}
          <div className="linkcontainer2 flex flex-col space-y-4 my-10">
            <Link to="/" className="pagelinks2 pb-2 border-b hover:text-gold">Home <span> &nrArr;</span></Link>
            <Link to="/services" className="pagelinks2 pb-2 border-b hover:text-gold">Services <span> &nrArr;</span></Link>
            <Link to="/about" className="pagelinks2 pb-2 border-b hover:text-gold">About <span> &nrArr;</span></Link>
            <Link to="/NewsPage" className="pagelinks2 pb-2 border-b hover:text-gold">News <span> &nrArr;</span></Link>
            <Link to="/Contact" className="pagelinks2 pb-2 border-b hover:text-gold">Contact <span> &nrArr;</span></Link>
          </div>

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
