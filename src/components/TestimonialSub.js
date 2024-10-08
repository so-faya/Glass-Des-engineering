import React from 'react';
import Slider from 'react-slick';
import '../index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import profileImage1 from '../assets/images/profileimage1.jpg';
import profileImage2 from '../assets/images/profileimage2.jpg';
import profileImage3 from '../assets/images/profileimage3.jpg';
import profileImage4 from '../assets/images/profileimage4.jpg';

const profileImages = [profileImage1, profileImage2, profileImage3, profileImage4];

const TestimonialsSub = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false, // Disable center mode to ensure proper slide count
    centerPadding: '0', // Ensure no extra padding
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900, // When screen width is 900px or less
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
        },
      },
      {
        breakpoint: 700, // When screen width is 700px or less
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="testimonials-section bg-[#e7d7d7] relative">
      <div className="text-center relative z-10 testimonials-section-hd">
        <p className="gold-border mx-auto mb-8 px-4 inline-block">Lorem ipsum dolor sit amet.</p>
        <h2 className="text-4xl font-bold">Lorem ipsum dolor sit amet</h2>
      </div>
      <div className="relative z-0">
        <Slider {...settings} className="testimonials-container pt-12">
          {profileImages.map((image, index) => (
            <div
              key={index}
              className="testimonial-card bg-card-color text-center mt-16 mb-8 p-6 relative border-x-8 border-custom-e7d7d7"
            >
              <div
                className="profile-image-container w-24 h-24 rounded-full overflow-hidden mx-auto"
                style={{
                  position: 'absolute',
                  top: '-60px',
                  left: 'calc(50% - 60px)',
                  zIndex: 5,
                }}
              >
                <img
                  src={image}
                  alt={`Profile ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="stars my-4 mt-20">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-gold">
                    &#9733;
                  </span>
                ))}
              </div>
              <blockquote className="mb-4 text-center overflow-hidden text-ellipsis">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sapien sit amet dolor vestibulum, vitae facilisis ligula efficitur."
              </blockquote>
              <h3 className="text-xl font-bold mb-2">Lorem ipsum</h3>
              <div className="text-gray-400 mb-4">Lorem ipsum dolor sit amet.</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsSub;
