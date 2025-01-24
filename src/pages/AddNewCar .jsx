// Version 4 (Added comments and a different heading style)
import React, { useState } from "react";

const AddNewCar = () => {
  const [carDetails, setCarDetails] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    condition: "New",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({ ...carDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    setCarDetails({ ...carDetails, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Car details submitted:", carDetails);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-100 rounded-md shadow-md mt-8">
      {/* Main Heading */}
      <h1 className="text-3xl font-semibold text-gray-900 mb-4 text-center">
        Add New Vehicle
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Input for Car Make */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Make</label>
          <input
            type="text"
            name="make"
            value={carDetails.make}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter car make"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddNewCar;
