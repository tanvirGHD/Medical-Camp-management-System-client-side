import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaUserMd, FaMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hook/useAxiosPublic";

const PopularCamp = () => {
  const [camps, setCamps] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    // Fetch camps data from the API
    axiosPublic("/registerCamps")
      .then((response) => {
        const data = response.data;
        // Combine camps with the same name and sum their registerCount
        const combinedCamps = data.reduce((acc, camp) => {
          // Compare camp names case-insensitively
          const existingCamp = acc.find((c) => c.campName.toLowerCase() === camp.campName.toLowerCase());
          if (existingCamp) {
            // If a camp with the same name exists, add to its registerCount
            existingCamp.registerCount += camp.registerCount;
          } else {
            // If it's a new camp name, add it to the array
            acc.push({ ...camp });
          }
          return acc;
        }, []);

        // Sort combined camps by registerCount in descending order and select top 6
        const sortedCamps = combinedCamps
          .sort((a, b) => b.registerCount - a.registerCount)
          .slice(0, 6);

        setCamps(sortedCamps); // Store sorted camps
      })
      .catch((error) => {
        console.error("Error fetching camps:", error);
      });
  }, [axiosPublic]);

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-center text-[#336699] mb-8 md:mb-20">
        Popular Medical Camp
      </h2>
      {camps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {camps.map((camp, index) => (
            <div
              key={camp._id}
              className={`bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                index === 0 ? "border-4 border-blue-600" : ""
              }`} // Add special styling for the top camp
            >
              {/* Image and Description */}
              <div className="mb-4">
                <img
                  src={camp.image}
                  alt={camp.campName}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600">{camp.campName}</h3>
                <p className="text-gray-500">{camp.description}</p>
              </div>

              {/* Other Details (Location, Healthcare Professional, Fees, Participants) */}
              <div className="flex justify-between text-gray-700">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-blue-600" />
                  <span>{camp.location}</span>
                </div>
                <div className="flex items-center">
                  <FaUserMd className="mr-2 text-green-600" />
                  <span>{camp.healthcareProfessionalName}</span>
                </div>
              </div>
              <div className="flex justify-between mt-4 text-gray-700">
                <div className="flex items-center">
                  <FaMoneyBillAlt className="mr-2 text-yellow-600" />
                  <span>{camp.campFees}</span>
                </div>
              </div>
              
              <Link to={`/popularDetails/${camp._id}`}>
                <button className="text-lime-200 p-2 rounded-lg bg-gray-700">
                  Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No camps available at the moment.</p>
      )}
    </div>
  );
};

export default PopularCamp;
