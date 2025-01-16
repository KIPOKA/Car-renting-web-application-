import React, { useState } from "react";
import Navbar from "../components/navbar/NavBar";
import Sidebar from "./Sidebar";

const Home = () => {
  const [carType, setCarType] = useState("");
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSearch = () => {
    if (carType && location && pickupDate && returnDate) {
      console.log({
        carType,
        location,
        pickupDate,
        returnDate,
      });
      alert("Searching for available cars...");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 h-full">
      <Sidebar />
    </div>
  );
};

export default Home;
