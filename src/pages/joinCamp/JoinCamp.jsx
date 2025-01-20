
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
  const axiosRegister = useAxiosRegister()

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
        icon: "success",
        title: "Your registration has been saved!",
        showConfirmButton: false,
        timer: 1500,
      });
      
      navigate("/dashboard/register");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <button
        onClick={handleOpen}
        className="p-3 bg-[#336699] text-white rounded-lg shadow-md hover:bg-[#225383] transition duration-300 ease-in-out"
      >
        Join Now Camps
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-[700px] max-h-[80vh] overflow-y-auto shadow-2xl">
            <h2 className="text-center text-3xl font-bold mb-6 text-blue-600 uppercase">Join this Camp</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex space-x-10">
                <div className="flex-1 space-y-4">
                  {/* Camp Details (readonly fields) */}
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Camp Name</label>
                    <input
                      type="text"
                      value={campName || "Camp Name"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Camp Description</label>
                    <input
                      type="text"
                      value={description || "Camp description"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Camp Fees</label>
                    <input
                      type="text"
                      value={campFees || "Camp Fees"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Location</label>
                    <input
                      type="text"
                      value={location || "Location"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Healthcare Professional Name</label>
                    <input
                      type="text"
                      value={healthcareProfessionalName || "Healthcare Professional Name"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300"
                      readOnly
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  {/* Participant Details */}
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Participant Name</label>
                    <input
                      type="text"
                      value={user.displayName || "Participant Name"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Participant Email</label>
                    <input
                      type="email"
                      value={user.email || "Participant Email"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Age</label>
                    <input
                      name="age"
                      type="number"
                      placeholder="Enter your age"
                      className="p-3 rounded-lg border border-gray-300"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="p-3 rounded-lg border border-gray-300"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Gender</label>
                    <select
                      name="gender"
                      className="p-3 rounded-lg border border-gray-300"
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
                      className="p-3 rounded-lg border border-gray-300"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between space-x-4">
                <button
                  type="button"
                  onClick={handleOpen}
                  className="w-full sm:w-auto bg-red-500 text-white p-3 rounded-lg shadow-md hover:bg-red-600 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full sm:w-auto ${loading ? "bg-gray-400" : "bg-green-500"} text-white p-3 rounded-lg shadow-md transition`}
                >
                  {loading ? "Submitting..." : "Submit"}
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
