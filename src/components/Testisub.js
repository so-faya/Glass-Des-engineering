import React from 'react';
import '../index.css';

const profileImages = [
  require('../assets/images/profileimage1.jpg').default,
  require('../assets/images/profileimage2.jpg').default,
  require('../assets/images/profileimage3.jpg').default,
  require('../assets/images/profileimage4.jpg').default
];

const Testisub = () => {
  return (
    <div className="bg-custom-pink pt-24 px-20">
      <p className="border-l-4 border-gold pl-4 mx-auto text-center w-max">
        Lorem ipsum dolor sit amet, consectetur.
      </p>
      <h2 className="mt-4 text-center">
        Lorem ipsum dolor.
      </h2>
      <div className="slider-container overflow-hidden">
        <div className="slider">
          {profileImages.map((image, index) => (
            <div key={index} className="card relative bg-white rounded-lg shadow-lg p-8 w-80 mx-4">
              <div className="profile-image-wrapper">
                <img
                  src={image}
                  alt={`Profile ${index + 1}`}
                  className="profile-image rounded-full border-4 border-white"
                />
              </div>
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex} className="text-gold">★</span>
                ))}
              </div>
              <p className="text-center mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h3 className="text-center mb-2">
                Lorem ipsum.
              </h3>
              <div className="text-center text-gray-500">
                Lorem ipsum.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testisub;
