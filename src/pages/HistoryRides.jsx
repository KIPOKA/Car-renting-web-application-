import React, { useState, useEffect } from "react";

const HistoryRides = () => {
  const [rides, setRides] = useState([]);
  const [selectedRide, setSelectedRide] = useState(null);

  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      setRides([
        {
          id: 1,
          date: "2024-02-01",
          from: "Location A",
          to: "Location B",
          fare: "$15",
          duration: "20 min",
        },
        {
          id: 2,
          date: "2024-02-05",
          from: "Location C",
          to: "Location D",
          fare: "$25",
          duration: "35 min",
        },
        {
          id: 3,
          date: "2024-02-10",
          from: "Location E",
          to: "Location F",
          fare: "$30",
          duration: "45 min",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Ride History</h1>
      {rides.length > 0 ? (
        <ul>
          {rides.map((ride) => (
            <li
              key={ride.id}
              className="border p-2 mb-2 cursor-pointer hover:bg-gray-200"
              onClick={() => setSelectedRide(ride)}
            >
              {ride.date}: {ride.from} → {ride.to}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Loading rides...</p>
      )}

      {/* Modal */}
      {selectedRide && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-lg font-bold mb-2">Ride Details</h2>
            <p>
              <strong>Date:</strong> {selectedRide.date}
            </p>
            <p>
              <strong>From:</strong> {selectedRide.from}
            </p>
            <p>
              <strong>To:</strong> {selectedRide.to}
            </p>
            <p>
              <strong>Fare:</strong> {selectedRide.fare}
            </p>
            <p>
              <strong>Duration:</strong> {selectedRide.duration}
            </p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setSelectedRide(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryRides;
