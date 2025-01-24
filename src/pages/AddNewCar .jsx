// Version 2 (Changed heading text and button color)
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
    <div className="p-6 max-w-lg mx-auto bg-gray-50 rounded-md shadow-md mt-8">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Register a Car</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Make</label>
          <input
            type="text"
            name="make"
            value={carDetails.make}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter the make"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewCar;
