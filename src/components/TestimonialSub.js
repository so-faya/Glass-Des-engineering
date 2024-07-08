import React, { useEffect, useRef } from 'react';
import '../index.css';
import profileImage1 from '../assets/images/profileimage1.jpg';
import profileImage2 from '../assets/images/profileimage2.jpg';
import profileImage3 from '../assets/images/profileimage3.jpg';
import profileImage4 from '../assets/images/profileimage4.jpg';

const profileImages = [profileImage1, profileImage2, profileImage3, profileImage4];

const TestimonialsSub = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let currentIndex = 0;

    const interval = setInterval(() => {
      const width = container.offsetWidth;
      container.scrollLeft = (currentIndex * width) / 4;
      currentIndex = (currentIndex + 1) % profileImages.length;
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-section py-24 bg-[#e7d7d7] px-20"> 
      <div className="text-center">
        <p className="gold-border mx-auto mb-8 px-4 inline-block">Lorem ipsum dolor sit amet.</p>
        <h2 className="text-4xl font-bold mb-16">Lorem ipsum dolor sit amet</h2>
      </div>
      <div ref={containerRef} className="testimonials-container flex overflow-hidden whitespace-nowrap space-x-8">
        {profileImages.map((image, index) => (
          <div key={index} className="testimonial-card bg-white text-center p-8 relative w-1/3 flex-shrink-0 h-96 mx-4">
            <div className="profile-image-container w-24 h-24 rounded-full overflow-hidden mx-auto -mt-12">
              <img src={image} alt={`Profile ${index + 1}`} className="w-full h-full object-cover"/>
            </div>
            <div className="stars my-4">
              {[1, 2, 3, 4, 5].map(star => (
                <span key={star} className="text-gold">&#9733;</span>
              ))}
            </div>
            <blockquote className="mb-4 text-center overflow-hidden text-ellipsis">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sapien sit amet dolor vestibulum, vitae facilisis ligula efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sapien sit amet dolor vestibulum."</blockquote>
            <h3 className="text-xl font-bold mb-2">Lorem ipsum</h3>
            <div className="text-gray-400 mb-4">Lorem ipsum dolor sit amet.</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSub;
