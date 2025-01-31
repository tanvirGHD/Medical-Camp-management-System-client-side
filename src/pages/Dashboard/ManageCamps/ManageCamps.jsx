import React from "react";
import { Link } from "react-router-dom";
import useCamps from "../../../hook/useCamps";
import Swal from "sweetalert2";
import useAxiosRegister from "../../../hook/useAxiosRegister";

const ManageCamps = () => {
  const [camps, loading, refetch] = useCamps();
  const axiosSecure = useAxiosRegister();

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
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/camps/${camp._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${camp.campName} has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Manage Camps: {camps.length}
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          {/* Table Header */}
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-purple-500  text-white">
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                #
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Camp Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Location
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Healthcare Professional
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {camps.map((camp, index) => (
              <tr
                key={camp._id}
                className="hover:bg-gray-50 transition-colors duration-300"
              >
                {/* Index */}
                <td className="px-4 py-3 text-sm text-gray-700 text-center">
                  {index + 1}
                </td>

                {/* Camp Name */}
                <td className="px-4 py-3 text-sm text-gray-700">
                  {camp.campName}
                </td>

                {/* Date & Time */}
                <td className="px-4 py-3 text-sm text-gray-700">
                  {camp.dateTime}
                </td>

                {/* Location */}
                <td className="px-4 py-3 text-sm text-gray-700">
                  {camp.location}
                </td>

                {/* Healthcare Professional */}
                <td className="px-4 py-3 text-sm text-gray-700">
                  {camp.healthcareProfessionalName}
                </td>

                {/* Actions */}
                <td className="px-4 py-3 text-sm text-gray-700 flex justify-center gap-2">
                  {/* Update Button */}
                  <Link
                    to={`/dashboard/updateCamp/${camp._id}`}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    aria-label={`Update ${camp.campName}`}
                  >
                    Update
                  </Link>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(camp)}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 rounded-lg shadow-md hover:from-red-600 hover:to-pink-600 transition-all duration-300"
                    aria-label={`Delete ${camp.campName}`}
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