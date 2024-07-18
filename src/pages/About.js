import React from 'react';
import '../index.css';
import NavBar from '../components/NavBar';
import ScrollToTopButton from '../components/ScrollToTopButton';
import AboutSub from '../components/AboutSub';
import NewsSub from '../components/NewsSub';

const About = () => {
  return (
    <div className="about-container">
      <NavBar fixed={true} /> {/* Set fixed prop to true */}
      <AboutSub />
      <NewsSub />
      <ScrollToTopButton heroClassName="" /> {/* Pass an empty string if there's no hero section */}
    </div>
  );
}

export default About;
