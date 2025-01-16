


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useAuth from "../../hook/useAuth";

const JoinCamp = ({ campName, campFees, location,image,description, healthcareProfessionalName, campId, setCampUserCount }) => {  
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();  // Initialize useNavigate

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
      const response = await fetch("http://localhost:5000/registerCamps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Registration Successful:", result);
  
        // Optionally update registerCount in frontend
        // Example: setCampUserCount(prevCount => prevCount + 1);
        
        alert("Registration successful!");
        setOpen(false); // Close the modal
      } else {
        console.error("Registration failed");
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <button
        onClick={handleOpen}
        className="p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
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
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Camp Name</label>
                    <input
                      type="URL"
                      value={image || "Camp Photo"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-semibold text-gray-700">Camp Name</label>
                    <input
                      type="text"
                      value={description|| "Camp description"}
                      className="bg-gray-100 p-3 rounded-lg border border-gray-300"
                      readOnly
                    />
                  </div>
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
                  className={`w-full sm:w-auto ${
                    loading ? "bg-gray-400" : "bg-green-500"
                  } text-white p-3 rounded-lg shadow-md transition`}
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

