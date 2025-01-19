import React, { useState } from "react";

const Payment = () => {
  // Mock data for existing cards
  const [currentCards, setCurrentCards] = useState([
    {
      id: 1,
      cardHolder: "John Doe",
      cardNumber: "**** **** **** 1234",
      expirationDate: "12/24",
    },
    {
      id: 2,
      cardHolder: "Jane Smith",
      cardNumber: "**** **** **** 5678",
      expirationDate: "06/25",
    },
  ]);

  const [newCard, setNewCard] = useState({
    cardHolder: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    // Add new card to the list (mock implementation)
    const newCardFormatted = {
      id: currentCards.length + 1,
      cardHolder: newCard.cardHolder,
      cardNumber: `**** **** **** ${newCard.cardNumber.slice(-4)}`,
      expirationDate: newCard.expirationDate,
    };
    setCurrentCards([...currentCards, newCardFormatted]);
    setNewCard({ cardHolder: "", cardNumber: "", expirationDate: "", cvv: "" });
    console.log("New card added:", newCardFormatted);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-md shadow-md flex flex-row w-full">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Payment</h1>

      {/* Current Cards */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Current Cards
        </h2>
        {currentCards.length > 0 ? (
          <ul className="space-y-4">
            {currentCards.map((card) => (
              <li
                key={card.id}
                className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
              >
                <div>
                  <p className="text-gray-700 font-medium">{card.cardHolder}</p>
                  <p className="text-gray-700">{card.cardNumber}</p>
                  <p className="text-gray-400 text-sm">
                    Expires: {card.expirationDate}
                  </p>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 text-sm"
                  onClick={() =>
                    setCurrentCards(
                      currentCards.filter((current) => current.id !== card.id)
                    )
                  }
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No cards available.</p>
        )}
      </div>

      {/* Add New Card */}
      <div>
        <h2 className="text-xl font-semibold text-gray-600 mb-4">
          Add New Card
        </h2>
        <form onSubmit={handleAddCard}>
          {/* Cardholder Name */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Cardholder Name
            </label>
            <input
              type="text"
              name="cardHolder"
              value={newCard.cardHolder}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter cardholder name"
            />
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={newCard.cardNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter card number"
            />
          </div>

          {/* Expiration Date */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Expiration Date
            </label>
            <input
              type="text"
              name="expirationDate"
              value={newCard.expirationDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YY"
            />
          </div>

          {/* CVV */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">CVV</label>
            <input
              type="password"
              name="cvv"
              value={newCard.cvv}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter CVV"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
