import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import NewsSub from '../components/NewsSub'
import backgroundImageNews from '../assets/images/building-8373618_1280.jpg'

const NewsPage = () => {
  return (
    <div className='newspage-container'>
      <NavBar fixed={true} /> {/* Set fixed prop to true */}

      {/* Newspage hero section */}
      <div className="newspage-hero-container bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImageNews})` }}>
        <div className="text-center">
          <div className="breadcrumb text-white mb-4">Home / News</div>
          <h1 className="text-4xl font-bold text-white">News</h1>
        </div>
      </div>

      <NewsSub />
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}

export default NewsPage