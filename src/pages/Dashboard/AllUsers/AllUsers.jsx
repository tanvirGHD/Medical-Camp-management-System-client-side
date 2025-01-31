import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser } from "react-icons/fa";
import useAxiosRegister from "../../../hook/useAxiosRegister";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosRegister();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch(); // Refetch to update the list
            Swal.fire({
              title: "Cancelled!",
              text: "The user has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeOrganizer = (user) => {
    axiosSecure.patch(`/users/organizer/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is now an Organizer!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Total Users: {users.length}
      </h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          {/* Table Header */}
          <thead>
            <tr className="bg-gradient-to-r from-[#336699] to-[#5294d6] text-white">
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                #
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Image
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Role
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-50 transition-colors duration-300"
              >
                {/* Index */}
                <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>

                {/* Image */}
                <td className="px-4 py-3">
                  <img
                    src={user.photoURL || "https://via.placeholder.com/48"}
                    alt={user.name}
                    className="h-12 w-12 rounded-full border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 mx-auto"
                  />
                </td>

                {/* Name */}
                <td className="px-4 py-3 text-sm text-gray-700">{user.name}</td>

                {/* Email */}
                <td className="px-4 py-3 text-sm text-gray-700">{user.email}</td>

                {/* Role */}
                <td className="px-4 py-3 text-sm text-gray-700">
                  {user.role === "organizer" ? (
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Organizer
                    </span>
                  ) : (
                    <button
                      onClick={() => handleMakeOrganizer(user)}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                      aria-label={`Make ${user.name} an organizer`}
                    >
                      Make Organizer
                    </button>
                  )}
                </td>

                {/* Action */}
                <td className="px-4 py-3 text-sm text-gray-700">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-300"
                    aria-label={`Delete ${user.name}`}
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

export default AllUsers;