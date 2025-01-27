import React, { useState } from "react";

const Payment = () => {
  const [currentCards, setCurrentCards] = useState([
    {
      id: 1,
      cardHolder: "John Doe",
      cardNumber: "**** **** **** 1234",
      expirationDate: "12/24",
      cardType: "Visa",
    },
    {
      id: 2,
      cardHolder: "Jane Smith",
      cardNumber: "**** **** **** 5678",
      expirationDate: "06/25",
      cardType: "MasterCard",
    },
  ]);

  const [newCard, setNewCard] = useState({
    cardHolder: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  const detectCardType = (number) => {
    const visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const masterCard = /^5[1-5][0-9]{14}$/;

    if (visa.test(number)) return "Visa";
    if (masterCard.test(number)) return "MasterCard";
    return "Unknown";
  };

  const validateCard = () => {
    const errors = {};
    if (!newCard.cardHolder.trim()) {
      errors.cardHolder = "Cardholder name is required.";
    }
    if (!/^\d{16}$/.test(newCard.cardNumber)) {
      errors.cardNumber = "Card number must be 16 digits.";
    } else if (detectCardType(newCard.cardNumber) === "Unknown") {
      errors.cardNumber = "Unsupported card type.";
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(newCard.expirationDate)) {
      errors.expirationDate = "Expiration date must be in MM/YY format.";
    }
    if (!/^\d{3,4}$/.test(newCard.cvv)) {
      errors.cvv = "CVV must be 3 or 4 digits.";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    const validationErrors = validateCard();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    setTimeout(() => {
      const newCardFormatted = {
        id: currentCards.length + 1,
        cardHolder: newCard.cardHolder,
        cardNumber: `**** **** **** ${newCard.cardNumber.slice(-4)}`,
        expirationDate: newCard.expirationDate,
        cardType: detectCardType(newCard.cardNumber),
      };
      setCurrentCards([...currentCards, newCardFormatted]);
      setNewCard({
        cardHolder: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
      });
      setLoading(false);
    }, 2000); // Simulate processing time
  };

  const handleDeleteCard = () => {
    setCurrentCards(currentCards.filter((card) => card.id !== cardToDelete));
    setCardToDelete(null);
    setShowDeleteModal(false);
  };

  const maskCardInput = (value) =>
    value
      .replace(/\D/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  const maskExpirationDate = (value) =>
    value.replace(/\D/g, "").replace(/(\d{2})(\d{2})/, "$1/$2");

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-md shadow-md">
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
                className="p-4 border border-gray-300 rounded-md flex justify-between items-center transition-transform transform hover:scale-105"
              >
                <div>
                  <p className="text-gray-700 font-medium">{card.cardHolder}</p>
                  <p className="text-gray-700">{card.cardNumber}</p>
                  <p className="text-gray-400 text-sm">
                    {card.cardType} | Expires: {card.expirationDate}
                  </p>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 text-sm"
                  onClick={() => {
                    setCardToDelete(card.id);
                    setShowDeleteModal(true);
                  }}
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
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Cardholder Name
            </label>
            <input
              type="text"
              name="cardHolder"
              value={newCard.cardHolder}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                errors.cardHolder ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.cardHolder ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
              placeholder="Enter cardholder name"
            />
            {errors.cardHolder && (
              <p className="text-red-500 text-sm mt-1">{errors.cardHolder}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={maskCardInput(newCard.cardNumber)}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                errors.cardNumber ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.cardNumber ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
              placeholder="Enter 16-digit card number"
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Expiration Date
            </label>
            <input
              type="text"
              name="expirationDate"
              value={maskExpirationDate(newCard.expirationDate)}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                errors.expirationDate ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.expirationDate
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              placeholder="MM/YY"
            />
            {errors.expirationDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.expirationDate}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">CVV</label>
            <input
              type="password"
              name="cvv"
              value={newCard.cvv}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                errors.cvv ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.cvv ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
              placeholder="Enter 3-4 digit CVV"
            />
            {errors.cvv && (
              <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {loading ? "Processing..." : "Add Card"}
          </button>
        </form>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-md p-6 shadow-lg text-center">
            <p className="text-gray-800 text-lg mb-4">
              Are you sure you want to delete this card?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteCard}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
