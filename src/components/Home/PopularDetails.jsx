import React from "react";
import { FaMapMarkerAlt, FaUserMd, FaRegMoneyBillAlt, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import JoinCamp from "../../pages/joinCamp/JoinCamp";

const PopularDetails = () => {
  const camp = useLoaderData();
  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold text-center mb-6">
        Camp Details: {camp.campName}
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={camp.image}
            alt={camp.campName}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Information Section */}
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <FaMapMarkerAlt />
            <p>
              <strong>Location:</strong> {camp.location}
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2">
            <FaUserMd />
            <p>
              <strong>Healthcare Professional:</strong> {camp.healthcareProfessionalName}
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2">
            <FaInfoCircle />
            <p>
              <strong>Description:</strong> {camp.description}
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2">
            <FaRegMoneyBillAlt />
            <p>
              <strong>Fees:</strong> {camp.campFees}
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2">
            <FaCalendarAlt />
            <p>
              <strong>Participants:</strong> {camp.registerCount}
            </p>
          </div>

          {/* Button Section */}
          <div className="flex justify-between gap-4 mt-6">
            {/* Join Camp Button */}
            <button className=" text-white rounded-lg hover:bg-green-700 transition-colors">
              <JoinCamp
                campName={camp.campName}
                location={camp.location}
                healthcareProfessionalName={camp.healthcareProfessionalName}
                campFees={camp.campFees}
                description={camp.description}
                image={camp.image}
              />
            </button>

            {/* See All Camps Button */}
            <Link to="/availableCamps">
              <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors">
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
