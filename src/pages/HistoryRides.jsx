import React, { useState, useEffect } from "react";

const HistoryRides = () => {
  const [rides, setRides] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      setRides([
        { id: 1, date: "2024-02-01", from: "Location A", to: "Location B" },
        { id: 2, date: "2024-02-05", from: "Location C", to: "Location D" },
        { id: 3, date: "2024-02-10", from: "Location E", to: "Location F" },
      ]);
    }, 1000);
  }, []);

  const filteredRides = rides.filter(
    (ride) =>
      ride.from.toLowerCase().includes(search.toLowerCase()) ||
      ride.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Ride History</h1>
      <input
        type="text"
        placeholder="Search by location..."
        className="border p-2 mb-2 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredRides.length > 0 ? (
        <ul>
          {filteredRides.map((ride) => (
            <li key={ride.id} className="border p-2 mb-2">
              {ride.date}: {ride.from} → {ride.to}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No rides found.</p>
      )}
    </div>
  );
};

export default HistoryRides;
