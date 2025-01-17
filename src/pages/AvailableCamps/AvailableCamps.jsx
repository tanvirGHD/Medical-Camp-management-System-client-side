// import React, { useEffect, useState } from "react";
// import useAxiosPublic from "../../hook/useAxiosPublic";
// import useRegister from "../../hook/useRegister";
// import { Link } from "react-router-dom";

// const AvailableCamps = () => {
//   const [camps, setCamps] = useState([]);
//   const [registers, setRegisters] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOption, setSortOption] = useState("");
//   const [layout, setLayout] = useState(3); // Default: 3-column layout
//   const axiosPublic = useAxiosPublic();
//   const [register] = useRegister();

//   // Fetch register data
//   useEffect(() => {
//     if (register && register.length > 0) {
//       setRegisters(register);
//     }
//   }, [register]);

//   // Fetch camps data
//   useEffect(() => {
//     axiosPublic("/camps")
//       .then((response) => {
//         setCamps(response.data);
//       })
//       .catch((error) => console.error("Error fetching camps:", error));
//   }, [axiosPublic]);

//   // Handle search
//   const filteredCamps = camps.filter((camp) =>
//     camp.campName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handle sorting
//   const sortedCamps = [...filteredCamps].sort((a, b) => {
//     if (sortOption === "mostRegistered") {
//       return (
//         registers
//           .filter((reg) => reg.campName === b.campName)
//           .reduce((total, reg) => total + reg.registerCount, 0) -
//         registers
//           .filter((reg) => reg.campName === a.campName)
//           .reduce((total, reg) => total + reg.registerCount, 0)
//       );
//     } else if (sortOption === "fees") {
//       return a.campFees - b.campFees;
//     } else if (sortOption === "alphabetical") {
//       return a.campName.localeCompare(b.campName);
//     }
//     return 0;
//   });

//   return (
//     <div className="min-h-screen py-10 px-4">
//       <h1 className="text-4xl font-bold text-center mb-6">Available Camps</h1>

//       {/* Additional Features Section */}
//       <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6">
//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search Camps..."
//           className="w-full lg:w-1/3 p-2 border border-gray-300 rounded-lg"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         {/* Sorting Options */}
//         <select
//           className="w-full lg:w-1/4 p-2 border border-gray-300 rounded-lg"
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//         >
//           <option value="">Sort By</option>
//           <option value="mostRegistered">Most Registered</option>
//           <option value="fees">Camp Fees</option>
//           <option value="alphabetical">Alphabetical Order</option>
//         </select>

//         {/* Layout Toggle Button */}
//         <button
//           className="w-full lg:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg"
//           onClick={() => setLayout(layout === 3 ? 2 : 3)}
//         >
//           {layout === 3 ? "Switch to 2-Column Layout" : "Switch to 3-Column Layout"}
//         </button>
//       </div>

//       {/* Camps Display Section */}
//       <div
//         className={`grid grid-cols-1 md:grid-cols-${layout} gap-6`}
//       >
//         {sortedCamps.map((camp) => {
//           const registerCount = registers
//             .filter((reg) => reg.campName === camp.campName)
//             .reduce((total, reg) => total + reg.registerCount, 0);

//           return (
//             <div
//               key={camp._id}
//               className="card bg-white shadow-lg rounded-lg overflow-hidden"
//             >
//               <figure>
//                 <img
//                   src={camp.image}
//                   alt={camp.campName}
//                   className="w-full h-48 object-cover"
//                 />
//               </figure>
//               <div className="card-body p-4 space-y-2">
//                 <h2 className="text-xl font-bold">{camp.campName}</h2>
//                 <p className="text-sm">
//                   <strong>Location:</strong> {camp.location}
//                 </p>
//                 <p className="text-sm">
//                   <strong>Fees:</strong> {camp.campFees}
//                 </p>
//                 <p className="text-sm">
//                   <strong>Date & Time:</strong> {camp.dateTime}
//                 </p>
//                 <p className="text-sm">
//                   <strong>Healthcare Professional:</strong>{" "}
//                   {camp.healthcareProfessionalName}
//                 </p>
//                 <p className="text-sm">
//                   <strong>Register Count:</strong> {registerCount || 0}
//                 </p>
//                 <Link to={`/campDetails/${camp._id}`}>
//                   <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700">
//                     Camp Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AvailableCamps;

























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
  const paginatedCamps = sortedCamps.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(sortedCamps.length / itemsPerPage);

  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Available Camps</h1>

      {/* Additional Features Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Camps..."
          className="w-full lg:w-1/3 p-2 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Sorting Options */}
        <select
          className="w-full lg:w-1/4 p-2 border border-gray-300 rounded-lg"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="mostRegistered">Most Registered</option>
          <option value="fees">Camp Fees</option>
          <option value="alphabetical">Alphabetical Order</option>
        </select>

        {/* Layout Toggle Button */}
        <button
          className="w-full lg:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setLayout(layout === 3 ? 2 : 3)}
        >
          {layout === 3 ? "Switch to 2-Column Layout" : "Switch to 3-Column Layout"}
        </button>
      </div>

      {/* Camps Display Section */}
      <div
        className={`grid grid-cols-1 md:grid-cols-${layout} gap-6`}
      >
        {paginatedCamps.map((camp) => {
          const registerCount = registers
            .filter((reg) => reg.campName === camp.campName)
            .reduce((total, reg) => total + reg.registerCount, 0);

          return (
            <div
              key={camp._id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <figure>
                <img
                  src={camp.image}
                  alt={camp.campName}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body p-4 space-y-2">
                <h2 className="text-xl font-bold">{camp.campName}</h2>
                <p className="text-sm">
                  <strong>Location:</strong> {camp.location}
                </p>
                <p className="text-sm">
                  <strong>Fees:</strong> {camp.campFees}
                </p>
                <p className="text-sm">
                  <strong>Date & Time:</strong> {camp.dateTime}
                </p>
                <p className="text-sm">
                  <strong>Healthcare Professional:</strong>{" "}
                  {camp.healthcareProfessionalName}
                </p>
                <p className="text-sm">
                  <strong>Register Count:</strong> {registerCount || 0}
                </p>
                <Link to={`/campDetails/${camp._id}`}>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Camp Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
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
