import React from 'react';
import serviceImage1 from '../assets/images/wooden-door.jpg';  // Adjust path as necessary
import serviceImage2 from '../assets/images/glass-door.jpg';  // Adjust path as necessary
import serviceImage3 from '../assets/images/arch-home.jpg';  // Adjust path as necessary

const ServiceSection = () => {
  return (
    <div className="service-section">
      <div className="service-description text-center">
        <p className="gold-border">SERVICE MAKE YOU HAPPIER LIFE</p>
      </div>
      <h1 className="service-title text-center">
        Trusted Wooden & Door 
        <span className='service-title text-center'></span>
        Useful Service.
      </h1>
      
      <div className="service-option flex justify-between mt-10">
        <div className="service-container">
          <div className="service-image-container">
            <img src={serviceImage1} alt="Service 1" className="service-image" />
          </div>
          <h2>1.Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sapien sit amet dolor vestibulum, vitae facilisis ligula efficitur.</p>
          <a href="/service" className="service-link">
            <div className="service-arrow-circle">
              <i className="fa fa-arrow-right"></i>
            </div>
          </a>
        </div>
        <div className="service-container">
          <div className="service-image-container">
            <img src={serviceImage2} alt="Service 2" className="service-image" />
          </div>
          <h2>2. Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sapien sit amet dolor vestibulum, vitae facilisis ligula efficitur.</p>
          <a href="/service" className="service-link">
            <div className="service-arrow-circle">
              <i className="fa fa-arrow-right"></i>
            </div>
          </a>
        </div>
        <div className="service-container">
          <div className="service-image-container">
            <img src={serviceImage3} alt="Service 3" className="service-image" />
          </div>
          <h2>3. Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula sapien sit amet dolor vestibulum, vitae facilisis ligula efficitur.</p>
          <a href="/service" className="service-link">
            <div className="service-arrow-circle">
              <i className="fa fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
