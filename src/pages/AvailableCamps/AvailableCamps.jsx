import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useRegister from "../../hook/useRegister";
import { Link } from "react-router-dom";

const AvailableCamps = () => {
  const [camps, setCamps] = useState([]);
  const [registers, setRegisters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [layout, setLayout] = useState(3); // Default: 3-column layout
  const [currentPage, setCurrentPage] = useState(1); // Pagination
  const itemsPerPage = 10; // Show 10 rows per page
  const axiosPublic = useAxiosPublic();
  const [register] = useRegister();

  // Fetch register data
  useEffect(() => {
    if (register && register.length > 0) {
      setRegisters(register);
    }
  }, [register]);

  // Fetch camps data
  useEffect(() => {
    axiosPublic("/camps")
      .then((response) => {
        setCamps(response.data);
      })
      .catch((error) => console.error("Error fetching camps:", error));
  }, [axiosPublic]);

  // Handle search
  const filteredCamps = camps.filter((camp) =>
    camp.campName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle sorting
  const sortedCamps = [...filteredCamps].sort((a, b) => {
    if (sortOption === "mostRegistered") {
      return (
        registers
          .filter((reg) => reg.campName === b.campName)
          .reduce((total, reg) => total + reg.registerCount, 0) -
        registers
          .filter((reg) => reg.campName === a.campName)
          .reduce((total, reg) => total + reg.registerCount, 0)
      );
    } else if (sortOption === "fees") {
      return a.campFees - b.campFees;
    } else if (sortOption === "alphabetical") {
      return a.campName.localeCompare(b.campName);
    }
    return 0;
  });

  // Calculate pagination data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCamps = sortedCamps.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(sortedCamps.length / itemsPerPage);

  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#336699] to-[#4B8FD4]">
        Available Camps
      </h1>

      {/* Additional Features Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
        {/* Search Bar */}
        <div className="relative w-full lg:w-1/3">
          <input
            type="text"
            placeholder="Search Camps..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Sorting Options */}
        <div className="relative w-full lg:w-1/4">
          <select
            className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-blue-500 bg-white shadow-sm"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="mostRegistered">Most Registered</option>
            <option value="fees">Camp Fees</option>
            <option value="alphabetical">Alphabetical Order</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Layout Toggle Switch */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Layout:</span>
          <button
            onClick={() => setLayout(3)}
            className={`w-8 h-8 rounded-full transition-colors duration-200 ${
              layout === 3 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
          <button
            onClick={() => setLayout(2)}
            className={`w-8 h-8 rounded-full transition-colors duration-200 ${
              layout === 2 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        </div>
      </div>

      {/* Camps Display Section */}
      <div
        className={`grid gap-6 ${
          layout === 3 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {paginatedCamps.map((camp) => {
          const registerCount = registers
            .filter((reg) => reg.campName === camp.campName)
            .reduce((total, reg) => total + reg.registerCount, 0);
          return (
            <div
              key={camp._id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <figure>
                <img
                  src={camp.image}
                  alt={camp.campName}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body p-4 space-y-2">
                <h2 className="text-xl font-bold text-blue-600">{camp.campName}</h2>
                <p className="text-sm text-gray-700">
                  <strong>Location:</strong> {camp.location}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Fees:</strong> {camp.campFees}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Date & Time:</strong> {camp.dateTime}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Healthcare Professional:</strong>{" "}
                  {camp.healthcareProfessionalName}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Register Count:</strong> {registerCount || 0}
                </p>
                <Link to={`/campDetails/${camp._id}`}>
                  <button className="w-full text-white py-2 rounded-lg bg-[#4B8FD4] hover:bg-[#3671a6] transition-colors duration-300">
                    Camp Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md transition duration-200 ease-in-out ${
              currentPage === index + 1
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvailableCamps;