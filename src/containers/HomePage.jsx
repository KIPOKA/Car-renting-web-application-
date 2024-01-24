

import React from 'react';  
import TopSection from '../components/topsection/TopSection';
import Navbar from '../components/navbar/NavBar';
import BookingSteps from './BookingSteps';
import AboutUs from './AboutUs';



function HomePage() {
  return (
    <>
    <div className='flex flex-col w-full h-full items-center overflow-x-hidden'>
      <Navbar/>
      <TopSection/> 
      <BookingSteps/>
      <AboutUs/>
    </div>
    </>
  );
}

export default HomePage;
