import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ParticipantAnalytics = () => {
  const [campData, setCampData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/registerCamps") // API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("API Response:", data);
        const formattedData = data.map((camp) => ({
          name: camp.campName,
          fees: typeof camp.campFees === "string" 
            ? parseFloat(camp.campFees.replace("$", "")) // Remove $ sign and convert to number
            : camp.campFees, // Use number directly if already a number
          registerCount: camp.registerCount, // Number of participants
        }));
        setCampData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Participant Analytics ({campData.length})
      </h1>
      {isLoading ? (
        <p>Loading data...</p>
      ) : campData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={campData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{
                value: "Camp Name",
                position: "insideBottom",
                offset: -5,
              }}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              label={{ value: "Fees & Participants", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="fees" fill="#82ca9d" name="Camp Fees ($)" />
            <Bar dataKey="registerCount" fill="#8884d8" name="Registered Participants" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>No data available for analytics.</p>
      )}
    </div>
  );
};

export default ParticipantAnalytics;
