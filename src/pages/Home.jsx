import React from "react";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 h-full">
      <Sidebar />
      <div className="flex-1 p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800">Welcome to WeRide</h1>
        <p className="text-gray-600 mt-2">
          Manage your ride history and book new trips seamlessly.
        </p>

        {/* Ride Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">Total Rides</h2>
            <p className="text-2xl font-bold text-blue-600">45</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">
              Upcoming Rides
            </h2>
            <p className="text-2xl font-bold text-green-600">3</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">
              Total Distance
            </h2>
            <p className="text-2xl font-bold text-purple-600">320 km</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Book a New Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
