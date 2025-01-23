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
    // Add your API call or form submission logic here
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-md shadow-md mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Add New Car</h1>
      <form onSubmit={handleSubmit}>
        {/* Car Make */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Make</label>
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

        {/* Car Model */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Model</label>
          <input
            type="text"
            name="model"
            value={carDetails.model}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter car model"
            required
          />
        </div>

        {/* Year */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Year</label>
          <input
            type="number"
            name="year"
            value={carDetails.year}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter manufacturing year"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={carDetails.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter price in USD"
            required
          />
        </div>

        {/* Condition */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Condition
          </label>
          <select
            name="condition"
            value={carDetails.condition}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Car Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddNewCar;
