import React from "react";
import {
  FaMapMarkerAlt,
  FaUserMd,
  FaRegMoneyBillAlt,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import JoinCamp from "../../pages/joinCamp/JoinCamp";

const PopularDetails = () => {
  const camp = useLoaderData();
  return (
    <div className="py-10 px-4 md:px-8">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#336699] mb-6">
    Camp Details: {camp.campName}
  </h2>

  <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
    {/* Image Section */}
    <div className="flex-1 flex justify-center">
      <img
        src={camp.image}
        alt={camp.campName}
        className="w-full max-w-lg h-80 md:h-96 object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* Information Section */}
    <div className="flex-1 space-y-4 text-center lg:text-left">
      {/* Location */}
      <div className="flex items-center justify-center gap-2 text-gray-700">
        <FaMapMarkerAlt className="text-blue-500" />
        <p className="font-medium">
          <strong>Location:</strong> {camp.location}
        </p>
      </div>

      {/* Healthcare Professional */}
      <div className="flex items-center justify-center gap-2 text-gray-700">
        <FaUserMd className="text-green-500" />
        <p className="font-medium">
          <strong>Healthcare Professional:</strong> {camp.healthcareProfessionalName}
        </p>
      </div>

      {/* Description */}
      <div className="flex items-center justify-center gap-2 text-gray-700">
        <FaInfoCircle className="text-yellow-500" />
        <p className="font-medium">
          <strong>Description:</strong> {camp.description}
        </p>
      </div>

      {/* Fees */}
      <div className="flex items-center justify-center gap-2 text-gray-700">
        <FaRegMoneyBillAlt className="text-purple-500" />
        <p className="font-medium">
          <strong>Fees:</strong> {camp.campFees}
        </p>
      </div>

      {/* Participants */}
      <div className="flex items-center justify-center gap-2 text-gray-700">
        <FaCalendarAlt className="text-red-500" />
        <p className="font-medium">
          <strong>Participants:</strong> {camp.registerCount}
        </p>
      </div>

      {/* Button Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">

        {/* See All Camps Button */}
        <Link to="/availableCamps">
          <button className="bg-[#4B8FD4] hover:bg-[#3671a6] transition-colors-duration-300 text-white py-3 px-6 rounded-lg transition-colors">
            See all Camps
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

  );
};

export default PopularDetails;
