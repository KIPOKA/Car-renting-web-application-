// Import your React and image assets at the top of your file

import React from 'react';
import Blob from '../../assets/blob1.svg';
import Car from '../../assets/benz.png';
import BookCar from '../../components/bookcar/BookCar';
import BookingSteps from '../../containers/BookingSteps';



function TopSection() {
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
         {/* <Button text="Rent"/> */}
          {/* <Button text="Rent Your Car"/>
          <Button theme="filled" text="Sell Your Car"/> */}
          <div className='flex mt-10 flex-wrap'>
          <button className='btn-primary'>
            Book Ride
          </button>
          <button className='btn-secondary mt-2'>
            Rent Car
          </button>
          </div>

          <BookCar/>
        </div>
        
        <div className="rightContainer">
          <div className="absolute ">
            <img src={Car} alt=""/>
          </div>
          <div className=" ">
            <img src={Blob} alt="" className='image' />
          </div>
        </div> 
      </div>
    
    

     
    </>
  );
}

export default TopSection;
