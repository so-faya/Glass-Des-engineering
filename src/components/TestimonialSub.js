import React, { useEffect } from 'react';
import '../index.css';
import profileImage1 from '../assets/images/profileimage1.jpg'; 
import profileImage2 from '../assets/images/profileimage2.jpg';
import profileImage3 from '../assets/images/profileimage3.jpg';
import profileImage4 from '../assets/images/profileimage4.jpg';

const profileImages = [profileImage1, profileImage2, profileImage3, profileImage4];

const TestimonialsSub = () => {
  useEffect(() => {
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;

    const interval = setInterval(() => {
      testimonials.forEach((testimonial, index) => {
        testimonial.style.transform = `translateX(${(index - currentIndex) * (100 + 8)}%)`;
      });
      currentIndex = (currentIndex + 1) % testimonials.length;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-section py-24 bg-gray-200 overflow-hidden">
      <p className="gold-border mx-auto mb-8 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sapien sit amet dolor vestibulum, vitae facilisis ligula efficitur.</p>
      <h2 className="text-4xl font-bold mb-16 text-center">Lorem ipsum dolor</h2>
      <div className="testimonials-container flex">
        {profileImages.map((image, index) => (
          <div key={index} className="testimonial-card bg-white text-center p-8 relative mx-4 transition-transform duration-1000 ease-in-out">
            <div className="profile-image-container w-24 h-24 rounded-full overflow-hidden mx-auto absolute -top-12 left-1/2 transform -translate-x-1/2 border-4 border-white z-10">
              <img src={image} alt={`Profile ${index + 1}`} className="w-full h-full object-cover"/>
            </div>
            <div className="stars my-4 mt-12">
              {[1, 2, 3, 4, 5].map(star => (
                <span key={star} className="text-gold">&#9733;</span>
              ))}
            </div>
            <blockquote className="mb-4 mt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sapien sit amet dolor vestibulum, vitae facilisis ligula efficitur.</blockquote>
            <h3 className="text-xl font-bold">Lorem ipsum</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSub;
