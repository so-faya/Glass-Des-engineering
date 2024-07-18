import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../index.css';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > document.querySelector('.hero-container').offsetHeight) {
      setVisible(true);
    } else {
      setVisible(false);
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
  }, []);

  return (
    <div className={`scroll-to-top ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
      <FaArrowUp className="arrow-icon" />
    </div>
  );
};

export default ScrollToTopButton;
