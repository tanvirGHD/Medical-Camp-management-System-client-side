import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaUserMd,
  FaRegMoneyBillAlt,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";
import JoinCamp from "../joinCamp/JoinCamp";

const CampDetails = () => {
  const camp = useLoaderData(); // Get the data loaded by the loader

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold text-center text-[#123b64] mb-6">
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
              <strong>Healthcare Professional:</strong>{" "}
              {camp.healthcareProfessionalName}
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
              <strong>Date & Time:</strong> {camp.dateTime}
            </p>
          </div>
          <div className="w-full">
            <button>
              <JoinCamp
                campName={camp.campName}
                location={camp.location}
                healthcareProfessionalName={camp.healthcareProfessionalName}
                campFees={camp.campFees}
                description={camp.description}
                image={camp.image}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;


