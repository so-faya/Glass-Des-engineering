import React, { useState, useEffect } from 'react';
import '../index.css';
import NavBar from '../components/NavBar';
import AboutSub from '../components/AboutSub';
import ServiceSection from '../components/ServiceSection';
import NewsSub from '../components/NewsSub';
import TestimonialsSub from '../components/TestimonialSub';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';
import churchImage from '../assets/images/church-7376515_1280.jpg';
import whiteImage from '../assets/images/white-2563976_1280.jpg';

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const images = [churchImage, whiteImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-container">
      <NavBar fixed={true} /> {/* Set fixed prop to true */}
      <div className="hero-container">
        <div className="hero-background-container">
          <div
            className={`hero-background bg-cover bg-center ${bgIndex === 1 ? 'dark-overlay' : ''}`}
            style={{ backgroundImage: `url(${images[bgIndex]})` }}
          />
          <div className="hero-content-container flex justify-between px-10 py-20 animate-slide-down">
            <div className="hero-left-content flex flex-col items-start">
              <p className="gold-border mb-4">Lorem ipsum dolor sit amet.</p>
              <h1 className="text-4xl font-bold mb-4">Lorem ipsum dolor sit. adipiscing elit. Nunc.</h1>
            </div>
            <div className="hero-right-content">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet diam tortor, id vestibulum dui pulvinar vel.
              </p>
              <button className="get-quote-button">Get Quote Now</button>
            </div>
          </div>
        </div>
      </div>

      <AboutSub />
      <ServiceSection />
      <NewsSub />
      <TestimonialsSub />
      <ScrollToTopButton heroClassName="hero-container" />
      <Footer />
    </div>
  );
};

export default Home;
