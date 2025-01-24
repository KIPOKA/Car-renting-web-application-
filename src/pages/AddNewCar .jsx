// Version 3 (Added a reset button and changed placeholder text)
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

  const handleReset = () => {
    setCarDetails({
      make: "",
      model: "",
      year: "",
      price: "",
      condition: "New",
      image: null,
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-md shadow-md mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Car Information Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Make</label>
          <input
            type="text"
            name="make"
            value={carDetails.make}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Car Make"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="w-full mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default AddNewCar;
