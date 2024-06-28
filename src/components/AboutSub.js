import React from 'react';
import aboutImage from '../assets/images/about-main.jpg';  // Adjust path as necessary
import smallImage from '../assets/images/about-small.jpg';  // Adjust path as necessary

const AboutSub = () => {
  return (
    <div className="about-sub-container">
      <div className="about-image">
        <img src={aboutImage} alt="About gif" className="big-image"/>
        <img
          className="move-small-image"
          src={smallImage}
          alt="Small gif"
        />
      </div>
      <div className="about-info">
        <p className="gold-border mb-4">Lorem ipsum dolor sit amet.</p>
        <h1 className="text-4xl font-bold mb-4">Lorem ipsum dolor sit.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-gray"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit 
          amet consectetur adipisicing elit. Ratione illum accusamus et eveniet praesentium necessitatibus 
          sed quo suscipit illo perferendis!    
        </p>
        <div className="flex items-center mt-2">
          <button className="about-us-button">About Us</button>
          <div className="ml-4 flex items-center">
            <i className="fa fa-phone mr-2"></i>
            <span>(123) 456-7890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSub;
