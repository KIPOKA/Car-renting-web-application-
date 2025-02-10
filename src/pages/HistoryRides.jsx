import React from "react";

const HistoryRides = () => {
  const rides = [];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Ride History</h1>
      {rides.length > 0 ? (
        <ul>
          {rides.map((ride) => (
            <li key={ride.id} className="border p-2 mb-2">
              {ride.date}: {ride.from} → {ride.to}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No rides available.</p>
      )}
    </div>
  );
};

export default HistoryRides;
