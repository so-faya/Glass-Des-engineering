import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import backgroundImageAbout from '../assets/images/arch-home.jpg';

const Services = () => {
  return (
    <div className='services-container'>
      <NavBar fixed={true} /> {/* Set fixed prop to true */}

      {/*service hero section*/}
      <div className="about-hero-container bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImageAbout})` }}>
        <div className="text-center">
          <div className="breadcrumb text-white mb-4">Home / Services</div>
          <h1 className="text-4xl font-bold text-white">SERVICES</h1>
        </div>
      </div>
      
      <ServiceSection />
      <Footer />
    </div>
  )
}

export default Services