import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import useAxiosRegister from "../../hook/useAxiosRegister";

const JoinCamp = ({
  campName,
  campFees,
  location,
  image,
  description,
  healthcareProfessionalName,
  dateTime,
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosRegister = useAxiosRegister();

  const handleOpen = () => {
    if (!user) {
      // If the user is not logged in, redirect to login page
      navigate("/login");
    } else {
      setOpen(!open);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    // Collecting form data
    const age = form.age.value;
    const phone = form.phone.value;
    const gender = form.gender.value;
    const emergencyContact = form.emergencyContact.value;

    const registrationData = {
      campName,
      campFees,
      description,
      image,
      location,
      healthcareProfessionalName,
      email: user.email,
      participantName: user.displayName,
      age,
      phone,
      gender,
      emergencyContact,
    };

    try {
      // Replace fetch with axios
      const response = await axiosRegister.post("/registerCamps", registrationData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the response is successful
      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your registration has been saved!",
          showConfirmButton: false,
          timer: 1500,
        });

        // Redirect after a successful registration
        navigate("/dashboard/register");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Registration failed. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Join Now Button */}
      <button
        onClick={handleOpen}
        className="px-4 text-white py-2 rounded-lg bg-[#4B8FD4] hover:bg-[#295f8f] transition-colors duration-300"
      >
        Join Now Camps
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl w-[700px] max-h-[80vh] overflow-y-auto shadow-2xl transform transition-transform duration-300 ease-in-out scale-100">
            <h2 className="text-center text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase">
              Join this Camp
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex space-x-10">
                {/* Left Column: Camp Details */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Camp Name</label>
                    <input
                      type="text"
                      value={campName || "Camp Name"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300 text-gray-500 cursor-not-allowed"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Camp Description</label>
                    <input
                      type="text"
                      value={description || "Camp description"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300 text-gray-500 cursor-not-allowed"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Camp Fees</label>
                    <input
                      type="text"
                      value={campFees || "Camp Fees"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300 text-gray-500 cursor-not-allowed"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Location</label>
                    <input
                      type="text"
                      value={location || "Location"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300 text-gray-500 cursor-not-allowed"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Healthcare Professional Name</label>
                    <input
                      type="text"
                      value={healthcareProfessionalName || "Healthcare Professional Name"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300 text-gray-500 cursor-not-allowed"
                      readOnly
                    />
                  </div>
                </div>

                {/* Right Column: Participant Details */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Participant Name</label>
                    <input
                      type="text"
                      value={user.displayName || "Participant Name"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300 text-gray-500 cursor-not-allowed"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Participant Email</label>
                    <input
                      type="email"
                      value={user.email || "Participant Email"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300 text-gray-500 cursor-not-allowed"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Age</label>
                    <input
                      name="age"
                      type="number"
                      placeholder="Enter your age"
                      className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Gender</label>
                    <select
                      name="gender"
                      className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Emergency Contact</label>
                    <input
                      name="emergencyContact"
                      type="tel"
                      placeholder="Enter emergency contact"
                      className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-between space-x-4">
                <button
                  type="button"
                  onClick={handleOpen}
                  className="w-full sm:w-auto bg-red-500 text-white p-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full sm:w-auto ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
                  } text-white p-3 rounded-lg shadow-md transition duration-300 ease-in-out`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinCamp;