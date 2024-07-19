import React from 'react';
import '../index.css';
import NavBar from '../components/NavBar';
import backgroundImageAbout from '../assets/images/arch-home.jpg'
import ScrollToTopButton from '../components/ScrollToTopButton';
import AboutSub from '../components/AboutSub';
import NewsSub from '../components/NewsSub';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-container">
      <NavBar fixed={true} /> {/* Set fixed prop to true */}

      {/*about hero section*/}
      <div className="about-hero-container bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImageAbout})` }}>
        <div className="text-center">
          <div className="breadcrumb text-white mb-4">Home / About Us</div>
          <h1 className="text-4xl font-bold text-white">ABOUT US</h1>
        </div>
      </div>

      <AboutSub />
      <NewsSub />
      <ScrollToTopButton heroClassName="about-hero-container" /> {/* Pass an empty string if there's no hero section */}
      <Footer />
    </div>
  );
}

export default About;
