import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaUserMd,
  FaRegMoneyBillAlt,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";
import JoinCamp from "../../pages/joinCamp/JoinCamp";


const PopularDetails = () => {
  const register = useLoaderData(); // Get the data loaded by the loader

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold text-center mb-6">
        Camp Details: {register.campName}
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={register.image}
            alt={register.campName}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Information Section */}
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <FaMapMarkerAlt />
            <p>
              <strong>Location:</strong> {register.location}
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2">
            <FaUserMd />
            <p>
              <strong>Healthcare Professional:</strong>{" "}
              {register.healthcareProfessionalName}
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2">
            <FaInfoCircle />
            <p>
              <strong>Description:</strong> {register.description}
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2">
            <FaRegMoneyBillAlt />
            <p>
              <strong>Fees:</strong> {register.campFees}
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2">
            <FaCalendarAlt />
            <p>
              <strong>Total Participants</strong>: {register.registerCount}
            </p>
          </div>
          <div className="w-full">
            <button>
              <JoinCamp>
              campName={register.campName}
                location={register.location}
                healthcareProfessionalName={register.healthcareProfessionalName}
                campFees={register.campFees}
                description={register.description}
                image={register.image}
              </JoinCamp>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDetails;


