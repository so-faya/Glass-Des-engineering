import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import backgroundImageAbout from '../assets/images/arch-home.jpg'

const Cart = () => {
  return (
    <div className='cart-container'>
        <NavBar fixed={true} /> {/* Set fixed prop to true */}

        {/* Cart hero section */}
        <div className="about-hero-container bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImageAbout})` }}>
        <div className="text-center">
            <div className="breadcrumb text-white mb-4">Home / Cart</div>
            <h1 className="text-4xl font-bold text-white">CART</h1>
        </div>
        </div>





        <Footer />
    </div>
  )
}

export default Cart