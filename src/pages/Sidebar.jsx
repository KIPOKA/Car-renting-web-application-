import React, { useState } from "react";
import {
  FaCar,
  FaPlus,
  FaHistory,
  FaMoneyBill,
  FaCog,
  FaUser,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } h-screen bg-blue-500 text-white flex flex-col items-center transition-all duration-300`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="mt-4 text-xl text-white focus:outline-none hover:bg-blue-600 rounded-full p-2"
        >
          {isOpen ? "<" : ">"}
        </button>

        {/* Profile Section */}
        <div className="mt-8 flex flex-col items-center">
          <FaUser className="text-4xl mb-2" />
          {isOpen && <h2 className="text-lg font-semibold">User Name</h2>}
        </div>

        {/* Menu Items */}
        <nav className="mt-8 w-full">
          <ul className="flex flex-col gap-4">
            <li className="w-full">
              <a
                href="#rent-car"
                className="flex items-center gap-4 px-4 py-2 hover:bg-blue-600 rounded-lg"
              >
                <FaCar />
                {isOpen && <span>Rent Car</span>}
              </a>
            </li>
            <li className="w-full">
              <a
                href="#add-new-car"
                className="flex items-center gap-4 px-4 py-2 hover:bg-blue-700 rounded-lg"
              >
                <FaPlus />
                {isOpen && <span>Add New Car</span>}
              </a>
            </li>
            <li className="w-full">
              <a
                href="#history-rides"
                className="flex items-center gap-4 px-4 py-2 hover:bg-blue-700 rounded-lg"
              >
                <FaHistory />
                {isOpen && <span>History Rides</span>}
              </a>
            </li>
            <li className="w-full">
              <a
                href="#payment"
                className="flex items-center gap-4 px-4 py-2 hover:bg-blue-700 rounded-lg"
              >
                <FaMoneyBill />
                {isOpen && <span>Payment</span>}
              </a>
            </li>
            <li className="w-full">
              <a
                href="#settings"
                className="flex items-center gap-4 px-4 py-2 hover:bg-blue-700 rounded-lg"
              >
                <FaCog />
                {isOpen && <span>Settings</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
