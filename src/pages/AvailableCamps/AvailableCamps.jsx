import React, { useEffect, useState } from "react";

const AvailableCamps = () => {
  const [camps, setCamps] = useState([]);

  // Fetch data from public/camps.json
  useEffect(() => {
    fetch("/camps.json")
      .then((response) => response.json())
      .then((data) => setCamps(data))
      .catch((error) => console.error("Error fetching camps:", error));
  }, []);

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Available Camps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {camps.map((camp, index) => (
          <div key={index} className="card bg-white shadow-lg rounded-lg">
            <figure>
              <img
                src={camp.image}
                alt={camp.campName}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="text-xl font-bold">{camp.campName}</h2>
              <p className="text-sm">
                <strong>Location:</strong> {camp.location}
              </p>
              <p className="text-sm">
                <strong>Fees:</strong> {camp.campFees}
              </p>
              <p className="text-sm">
                <strong>Date & Time:</strong> {camp.dateTime}
              </p>
              <p className="text-sm">
                <strong>Healthcare Professional:</strong>{" "}
                {camp.healthcareProfessionalName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCamps;
