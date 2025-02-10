import React from "react";

const HistoryRides = () => {
  const rides = [
    { id: 1, date: "2024-02-01", from: "Location A", to: "Location B" },
    { id: 2, date: "2024-02-05", from: "Location C", to: "Location D" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Ride History</h1>
      <ul>
        {rides.map((ride) => (
          <li key={ride.id} className="border p-2 mb-2">
            {ride.date}: {ride.from} → {ride.to}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryRides;
