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
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Page Content */}
        <div className="p-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome to <span className="text-blue-500">FastRide Rentals</span>
            </h1>
            <p className="text-gray-600 mt-4">
              Whether you're planning a road trip, need a ride for a business
              trip, or just want a reliable vehicle for the day, we've got you
              covered.
            </p>
          </div>

          {/* Search Form */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Find Your Rental Car
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="carType"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Select Car Type
                </label>
                <select
                  id="carType"
                  value={carType}
                  onChange={(e) => setCarType(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- Select a Car Type --</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Pickup Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter a location"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="pickupDate"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Pickup Date
                </label>
                <input
                  type="date"
                  id="pickupDate"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="returnDate"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Return Date
                </label>
                <input
                  type="date"
                  id="returnDate"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={handleSearch}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Search
              </button>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
              <span className="text-blue-500 text-4xl">🚗</span>
              <h3 className="font-semibold text-gray-700 mt-2">
                Wide Selection
              </h3>
              <p className="text-gray-600 text-center mt-1">
                A wide range of cars to meet your needs.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
              <span className="text-blue-500 text-4xl">🌍</span>
              <h3 className="font-semibold text-gray-700 mt-2">
                Convenient Locations
              </h3>
              <p className="text-gray-600 text-center mt-1">
                Pickup and return at locations across the country.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
              <span className="text-blue-500 text-4xl">💰</span>
              <h3 className="font-semibold text-gray-700 mt-2">
                Affordable Rates
              </h3>
              <p className="text-gray-600 text-center mt-1">
                Enjoy competitive pricing and great deals.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
              <span className="text-blue-500 text-4xl">📅</span>
              <h3 className="font-semibold text-gray-700 mt-2">
                Flexible Bookings
              </h3>
              <p className="text-gray-600 text-center mt-1">
                Plan your trip with flexible dates and times.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
              <span className="text-blue-500 text-4xl">🔧</span>
              <h3 className="font-semibold text-gray-700 mt-2">
                Reliable Cars
              </h3>
              <p className="text-gray-600 text-center mt-1">
                Well-maintained vehicles for a smooth ride.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
              <span className="text-blue-500 text-4xl">⭐</span>
              <h3 className="font-semibold text-gray-700 mt-2">
                Excellent Support
              </h3>
              <p className="text-gray-600 text-center mt-1">
                24/7 customer support to assist you anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
