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
        const campMap = {};

        data.forEach((camp) => {
          if (campMap[camp.campName]) {
            campMap[camp.campName].registerCount += camp.registerCount;
          } else {
            campMap[camp.campName] = { ...camp };
          }
        });

        // Convert the campMap object back to an array
        const combinedCamps = Object.values(campMap);

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
      <h2 className="md:text-4xl text-3xl font-bold text-center text-[#336699] mb-8 md:mb-20">
        Popular Medical Camp
      </h2>
      {camps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {camps.map((camp) => (
            <div
              key={camp._id}
              className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-blue-600 hover:shadow-xl transition-all duration-300"
            >
              {/* Image and Description */}
              <div>
                <img
                  src={camp.image}
                  alt={camp.campName}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600">
                  {camp.campName}
                </h3>
                <p className="text-gray-500">{camp.description}</p>
              </div>

              {/* Other Details */}
              <div className="mt-4">
                <div className="flex justify-between text-gray-700 mb-2">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-blue-600" />
                    <span>{camp.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUserMd className="mr-2 text-green-600" />
                    <span>{camp.healthcareProfessionalName}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaMoneyBillAlt className="mr-2 text-yellow-600" />
                  <span>{camp.campFees}</span>
                </div>
              </div>

              {/* Button */}
              <div className="mt-6">
                <Link to={`/popularDetails/${camp._id}`}>
                  <button className="w-full text-white py-2 rounded-lg bg-[#4B8FD4] hover:bg-[#3671a6] transition-colors duration-300">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No camps available at the moment.
        </p>
      )}
    </div>
  );
};

export default PopularCamp;
