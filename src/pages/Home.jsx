import React, { useState } from "react"; 
import Sidebar from "./Sidebar";

const Home = () => { 
  return (
    <div className="flex min-h-screen bg-gray-100 h-full">
      <Sidebar />
    </div>
  );
};

export default Home;
