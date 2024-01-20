// Import your React and image assets at the top of your file

import React from 'react';
import Blob from '../assets/blob1.svg';
import Car from '../assets/benz.png';

function HomePage() {
  return (
    <>
      <div className='topSection'>
        <div className="leftContainer xl:mt-20 sm:mt-10 lg:mt-10 2xl:mt-20">
          <h1 className='textContent text-brandPrimary'>
            Rent The Best Quality Car's With Us
          </h1>
          <div className="description text-gray-500">
            Unleash the Journey, Embrace the Freedom! Your Key to Convenient and Affordable Car Rentals.
          </div>
        </div>
        <div className="rightContainer ">
          <div className="absolute">
            <img src={Car} alt=""/>
          </div>
          <div className="">
            <img src={Blob} alt="" className='image' />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
