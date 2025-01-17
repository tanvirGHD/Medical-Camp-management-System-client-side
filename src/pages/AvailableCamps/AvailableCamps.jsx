// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import useAxiosPublic from "../../hook/useAxiosPublic";
// import useRegister from "../../hook/useRegister";

// const AvailableCamps = () => {
//   const [camps, setCamps] = useState([]);
//   const [registers, setRegisters] = useState([]);
//   const axiosPublic = useAxiosPublic();
//   const register = useRegister()




//   useEffect(() => {
//     register("/registerCamps")
//       .then((response) => {
//         setCamps(response.data);
//       })
      
//   }, []);

//   useEffect(() => {
//     axiosPublic("/camps")
//       .then((response) => {
//         setCamps(response.data);
//       })
//       .catch((error) => console.error("Error fetching camps:", error));
//   }, []);

//   return (
//     <div className="min-h-screen py-10">
//       <h1 className="text-4xl font-bold text-center mb-6">Available Camps</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
//         {camps.map((camp) => (
//           <div key={camp._id} className="card bg-white shadow-lg rounded-lg">
//             <figure>
//               <img
//                 src={camp.image}
//                 alt={camp.campName}
//                 className="w-full h-48 object-cover rounded-t-lg"
//               />
//             </figure>
//             <div className="card-body p-4">
//               <h2 className="text-xl font-bold">{camp.campName}</h2>
//               <p className="text-sm">
//                 <strong>Location:</strong> {camp.location}
//               </p>
//               <p className="text-sm">
//                 <strong>Fees:</strong> {camp.campFees}
//               </p>
//               <p className="text-sm">
//                 <strong>Date & Time:</strong> {camp.dateTime}
//               </p>
//               <p className="text-sm">
//                 <strong>Healthcare Professional:</strong> {camp.healthcareProfessionalName}
//               </p>
//               <Link to={`/campDetails/${camp._id}`} >
//                 <button className="bg-[#107964] text-white p-1 rounded-lg hover:bg-[#094d3f]">
//                   Camp Details
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>




//         <div>
//         {registers.map((reg) => (
//           <div key={reg._id} className="card bg-white shadow-lg rounded-lg">
//             <div className="card-body p-4">
//               <h2 className="text-xl font-bold">{reg.registerCount}</h2>
//             </div>
//           </div>
//         ))}
//         </div>
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
  const axiosPublic = useAxiosPublic();
  const [register] = useRegister(); // Fetching register data

  // Fetch register data
  useEffect(() => {
    if (register && register.length > 0) {
      setRegisters(register); // Store register data
    }
  }, [register]);

  // Fetch camps data
  useEffect(() => {
    axiosPublic("/camps")
      .then((response) => {
        setCamps(response.data); // Store camps data
      })
      .catch((error) => console.error("Error fetching camps:", error));
  }, [axiosPublic]);

  return (
    <div className="min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Available Camps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {camps.map((camp) => {
          // Find matching register data for each camp
          const registerCount = registers
            .filter((reg) => reg.campName === camp.campName) // Match camp name
            .reduce((total, reg) => total + reg.registerCount, 0); // Sum the registerCount for matching camps

          return (
            <div key={camp._id} className="card bg-white shadow-lg rounded-lg">
              <figure>
                <img
                  src={camp.image}
                  alt={camp.campName}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body p-4 space-y-1">
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
                
                {/* Displaying the register count */}
                <div>
                  <h3 className="text-sm font-semibold"><strong>Register Count:</strong>  {registerCount || 0}</h3>
                </div>

                <Link to={`/campDetails/${camp._id}`} >
               <button className="bg-[#107964] text-white p-1 rounded-lg hover:bg-[#094d3f]">
                  Camp Details
                </button>
               </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableCamps;
