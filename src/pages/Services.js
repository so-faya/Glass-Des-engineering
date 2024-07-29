import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import ScrollToTopButton from '../components/ScrollToTopButton';
import backgroundImageAbout from '../assets/images/arch-home.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaShoppingCart, FaEye, FaBus, FaLock, FaHeadphonesAlt, FaMoneyBillWave, FaSearch } from 'react-icons/fa'; // Import FaSearch icon

const Services = () => {
  const [viewMode, setViewMode] = useState('slider'); // State variable to manage view mode

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    centerMode: true,
    centerPadding: '50px',
  };

  const products = [
    { image: require('../assets/images/door-1.jpg'), title: 'Solid wooden door', price: '$100' },
    { image: require('../assets/images/door-2.jpg'), title: 'Solid wooden door', price: '$200' },
    { image: require('../assets/images/window-1.jpg'), title: 'Plain Window', price: '$150' },
    { image: require('../assets/images/door-983783_1280.jpg'), title: 'Solid Wooden Door', price: '$120' },
    { image: require('../assets/images/door-2926843_1280.jpg'), title: 'Solid Wooden Door', price: '$130' },
    { image: require('../assets/images/door-3036579_1280.jpg'), title: 'Solid Wooden Door', price: '$140' },
    { image: require('../assets/images/door-3299119_1280.jpg'), title: 'Solid Wooden Door', price: '$160' },
    { image: require('../assets/images/door-2768502_1280.jpg'), title: 'Solid Wooden Door', price: '$170' },
    { image: require('../assets/images/shibuyasky-4768679_1280.jpg'), title: 'Sky View', price: '$110' },
    { image: require('../assets/images/window-7305702_1280.jpg'), title: 'Window', price: '$180' },
    { image: require('../assets/images/cozy-2681090_1280.jpg'), title: 'Cozy Corner', price: '$190' },
    { image: require('../assets/images/door-1106012_1280.jpg'), title: 'Door', price: '$200' }
  ];

  const toggleViewMode = () => {
    setViewMode(viewMode === 'slider' ? 'grid' : 'slider');
  };

  return (
    <div className='services-container'>
      <NavBar fixed={true} /> {/* Set fixed prop to true */}

      {/* Service hero section */}
      <div className="about-hero-container bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImageAbout})` }}>
        <div className="text-center">
          <div className="breadcrumb text-white mb-4">Home / Services</div>
          <h1 className="text-4xl font-bold text-white">SERVICES</h1>
        </div>
      </div>

      {/* Service feature section */}
      <div className="service-feature mb-55 mt-0 mx-10 bg-white">
        <div className="insurance-info mb-40 flex ">
          <div className='insuranceinfo1 flex px-7 my-7 basis-1/4 justify-center'>
            <FaBus className='icon-bud text-5xl mr-4 font-thin text-gray-500'/>
            <div className='insurance-div'>
              <div className='insurance-header font-bold'>Free Shipping</div>
              <div className='insurance-comment text-gray-500 text-sm'>Free Shipping Over $100</div>
            </div>
          </div>

          <div className='insuranceinfo2 flex  px-7 my-7 basis-1/4 justify-center border-l'>
            <FaLock className='icon-bud text-5xl mr-4 font-thin text-gray-500'/>
            <div className='insurance-div'>
              <div className='insurance-header font-bold'>Payment Secure</div>
              <div className='insurance-comment text-gray-500 text-sm'>Got 100% Payment Safe</div>
            </div>
          </div>
          
          <div className='insuranceinfo3 flex basis-1/4 px-7 my-7 justify-center border-l'>
            <FaHeadphonesAlt className='icon-bud text-5xl mr-4 font-thin text-gray-500'/>
            <div className='insurance-div'>
              <div className='insurance-header font-bold'>Support 24/7</div>
              <div className='insurance-comment text-gray-500 text-sm'>Quality 24/7 Support</div>
            </div>
          </div>
          
          <div className='insuranceinfo4 flex basis-1/4 px-7 my-7 justify-center border-l'>
            <FaMoneyBillWave className='icon-bud text-5xl mr-4 font-thin text-gray-500'/>
            <div className='insurance-div'>
              <div className='insurance-header font-bold'>100% Money Back</div>
              <div className='insurance-comment text-gray-500 text-sm'>Customers Money Back</div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-gold pl-2 mx-auto text-center mb-6" style={{ width: 'fit-content' }}>
          <p className="inline-block feature-title">FEATURED WINDOWS AND DOORS PRODUCT</p>
        </div>
        <h2 className="text-center mb-20 feature-para">WINDOWS AND DOORS PRODUCT</h2>

          {/* Search bar */}
        <div className="flex justify-center my-8">
          <div className="relative w-1/2">
            <input 
              type="text" 
              placeholder="Search for Product" 
              className="w-full py-2 pl-4 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <FaSearch className="absolute top-2 right-2 text-gray-500" />
          </div>
          <button className="ml-4 px-4 py-2 bg-gold text-white rounded-md">Search</button>
        </div>


        {viewMode === 'slider' ? (
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="slide-item relative text-center">
                <img src={product.image} alt={`Slide ${index + 1}`} className="w-full h-400 mb-4" />
                <h3 className="mt-2">{product.title}</h3>
                <span className="block mt-1">{product.price}</span>
                <div className="icon-container absolute top-0 right-6 flex flex-col items-center space-y-2 mt-2 mr-2">
                  <div className="icon-wrapper relative">
                    <FaEye className="icon-eye text-black" />
                    <span className="icon-tag hidden absolute top-0 right-full ml-2 bg-black text-white px-2 py-1 rounded">Quick View</span>
                  </div>
                  <div className="icon-wrapper relative">
                    <FaStar className="icon-star text-black" />
                    <span className="icon-tag hidden absolute top-0 right-full ml-2 bg-black text-white px-2 py-1 rounded">Rating</span>
                  </div>
                  <div className="icon-wrapper relative">
                    <FaShoppingCart className="icon-cart text-black" />
                    <span className="icon-tag hidden absolute top-0 right-full ml-2 bg-black text-white px-2 py-1 rounded">Add to cart</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-20">
            {products.map((product, index) => (
              <div key={index} className="slide-item relative text-center pt-20">
                <img src={product.image} alt={`Slide ${index + 1}`} className="w-full h-400 mb-4" />
                <h3 className="mt-2">{product.title}</h3>
                <span className="block mt-1">{product.price}</span>
                <div className="icon-container absolute top-0 right-6 flex flex-col items-center space-y-2 mt-2 mr-2">
                  <div className="icon-wrapper relative">
                    <FaEye className="icon-eye text-black" />
                    <span className="icon-tag hidden absolute top-0 right-full ml-2 bg-black text-white px-2 py-1 rounded">Quick</span>
                  </div>
                  <div className="icon-wrapper relative">
                    <FaStar className="icon-star text-black" />
                    <span className="icon-tag hidden absolute top-0 right-full ml-2 bg-black text-white px-2 py-1 rounded">Rating</span>
                  </div>
                  <div className="icon-wrapper relative">
                    <FaShoppingCart className="icon-cart text-black" />
                    <span className="icon-tag hidden absolute top-0 right-full ml-2 bg-black text-white px-2 py-1 rounded">Add to cart</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className='mproduct-button mt-20'>
          <button onClick={toggleViewMode} className='mproduct-lbutton bg-gold'>
            {viewMode === 'slider' ? 'View More Product' : 'View Less Product'}
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden pt-5 flex flex-col items-center pb-20">
        <div className="relative">
          <div className="relative mt-5 z-0">
            <div className="marquee whitespace-nowrap">
              <p className="inline-block animate-marquee text-4xl font-bold">
                Schedule a Free Consultation for Windows and Doors Replacement
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <ServiceSection />
      <ScrollToTopButton heroClassName="about-hero-container"/>
      <Footer />
    </div>
  );
}

export default Services;
