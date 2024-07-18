import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../index.css';

const ScrollToTopButton = ({ heroClassName }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (heroClassName) {
      const heroElement = document.querySelector(`.${heroClassName}`);
      if (heroElement && window.scrollY > heroElement.offsetHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } else {
      setVisible(window.scrollY > 100); // Adjust this value as needed
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [heroClassName]);

  return (
    <div className={`scroll-to-top ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
      <FaArrowUp className="arrow-icon" />
    </div>
  );
};

export default ScrollToTopButton;
