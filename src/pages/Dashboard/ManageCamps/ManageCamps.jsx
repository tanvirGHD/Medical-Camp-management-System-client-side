import React from "react";
import { Link } from "react-router-dom";
import useCamps from "../../../hook/useCamps";
import Swal from "sweetalert2";
import useAxiosRegister from "../../../hook/useAxiosRegister";

const ManageCamps = () => {
  const [camps,loading, refetch] = useCamps();
  const axiosSecure = useAxiosRegister();

  // Update Camp Function
  const handleUpdate = (campId) => {
    
  };

  // Delete Camp Function
  const handleDelete = (camp) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) =>{
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/camps/${camp._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `deleted this camp`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    })
  };

  return (
    <div className="min-h-screen p-2">
      <h2 className="text-3xl font-bold mb-6">Manage Camps: {camps.length}</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Camp Name</th>
              <th className="border border-gray-300 px-4 py-2">Date & Time</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
              <th className="border border-gray-300 px-4 py-2">Healthcare Professional</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {camps.map((camp, index) => (
              <tr key={camp._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{camp.campName}</td>
                <td className="border border-gray-300 px-4 py-2">{camp.dateTime}</td>
                <td className="border border-gray-300 px-4 py-2">{camp.location}</td>
                <td className="border border-gray-300 px-4 py-2">{camp.healthcareProfessionalName}</td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
                <Link to={`/dashboard/updateCamp/${camp._id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(camp)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCamps;
