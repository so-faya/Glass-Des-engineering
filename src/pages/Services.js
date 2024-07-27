import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import ScrollToTopButton from '../components/ScrollToTopButton';
import backgroundImageAbout from '../assets/images/arch-home.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaShoppingCart, FaEye } from 'react-icons/fa'; // Importing Font Awesome icons

const Services = () => {
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
    centerPadding: '50px', // Increase padding for more space between images
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
      <div className="service-feature my-55 mx-20 bg-white">
        <div className="border-l-4 border-gold pl-2 mx-auto text-center mb-6" style={{ width: 'fit-content' }}>
          <p className="inline-block feature-title">FEATURED WINDOWS AND DOORS PRODUCT</p>
        </div>
        <h2 className="text-center mb-20 feature-para">WINDOWS AND DOORS PRODUCT</h2>
        <Slider {...settings}>
          {/* Each slide item */}
          {products.map((product, index) => (
            <div key={index} className="slide-item relative text-center">
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
        </Slider>
        <div className='mproduct-button mt-20 '>
          <a href='#' className='mproduct-lbutton bg-gold'>View More Product</a>
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
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Services;
