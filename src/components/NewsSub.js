import React from 'react';
import '../index.css';
import blogImage1 from '../assets/images/blog-image1.jpg'
import blogImage2 from '../assets/images/blog-image2.jpg'
import blogImage3 from '../assets/images/blog-image3.jpg'

const NewsSub = () => {
  return (
    <div className="news-sub-container bg-white ">
      <p className="gold-border mb-8">News & Blog</p>
      <div className="flex justify-between items-center mb-8 newstitle">
        <h2 className="text-4xl font-bold">Latest News & Blog</h2>
        <button className="more-news-button">More News & Blog</button>
      </div>
      <div className="flex justify-between  news-container-holder">
        <div className="news-container p-4">
          <img src={blogImage1} alt="News 1" className="news-image" />
          <h3 className="font-bold mt-4">Lorem ipsum dolor sit amet, consectetur.  dolor sit ametr</h3>
          <p className="mt-2">02 April 2024 <span className="ml-2">Comment 03</span></p>
        </div>
        <div className="news-container wow p-4">
          <img src={blogImage2} alt="News 2" className="news-image" />
          <h3 className="font-bold mt-4">Lorem ipsum dolor sit amet, consectetur.</h3>
          <p className="mt-2">20 June 2024 <span className="ml-2">Comment 01</span></p>
        </div>
        <div className="news-container p-4">
          <img src={blogImage3} alt="News 3" className="news-image" />
          <h3 className="font-bold mt-4">Lorem ipsum dolor sit amet, consectetur.</h3>
          <p className="mt-2">30 June 2024 <span className="ml-2">Comment 05</span></p>
        </div>
      </div>
    </div>
  );
};

export default NewsSub;
