import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-yellow-950 text-white footer-container">
      <div className="relative overflow-hidden pt-20 flex flex-col items-center">
        <div className="relative">
          <a href="#" className="bg-gold text-black h-40 w-40 rounded-full flex items-center justify-center absolute top-[-3rem] left-1/2 transform -translate-x-1/2 z-10 text-center text-2xl">
            Get Schedule Now
          </a>
          <div className="relative mt-24 z-0">
            <div className="marquee whitespace-nowrap">
              <p className="inline-block animate-marquee text-4xl font-bold">
                Schedule a Free Consultation for Windows and Doors Replacement
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-white fade-border my-20"></div>
      <div className="flex justify-evenly pb-20 border-b border-white fade-border linkoos">
        <div className="linkoos-container flex-1 flex flex-col p-4 m-2">
          <h3 className="text-xl mb-10 font-bold">Des-Engineering</h3>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <div className="flex space-x-4 mt-10">
            <a href="#" className="text-white"><FaFacebook /></a>
            <a href="#" className="text-white"><FaInstagram /></a>
            <a href="#" className="text-white"><FaWhatsapp /></a>
            <a href="#" className="text-white"><FaTwitter /></a>
          </div>
        </div>
        <div className="linkoos-container flex-1 flex flex-col p-4 m-2">
          <h3 className="text-xl mb-2 font-bold">Our Links</h3>
          <a href="#" className="footer-link">Features</a>
          <a href="#" className="footer-link">Team Member</a>
          <a href="#" className="footer-link">Our Careers</a>
          <a href="#" className="footer-link">Login Here</a>
          <a href="#" className="footer-link">Register</a>
        </div>
        <div className="linkoos-container flex-1 flex flex-col p-4 m-2">
          <h3 className="text-xl mb-2 font-bold">Find it Fast </h3>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/NewsPage" className="footer-link">Features</Link>
          <Link to="/Contact" className="footer-link">Contact</Link>
        </div>
        <div className="linkoos-container flex-1 flex flex-col p-4 m-2">
          <h3 className="text-xl mb-5 font-bold">Contact Us</h3>
          <p className=" mb-5">1234 Address St.</p>
          <p>email@example.com</p>
          <p className=" mt-5">+123 456 7890</p>
        </div>
      </div>
      <p className="text-center mt-10 pb-10">Made with ❤️ by So-faya. - Powered by God.</p>
    </footer>
  );
};

export default Footer;
