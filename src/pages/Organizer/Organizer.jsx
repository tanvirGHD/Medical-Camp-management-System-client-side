import React from "react";
import useAuth from "../../hook/useAuth";
import useAxiosRegister from "../../hook/useAxiosRegister";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Organizer = () => {
  // Get user data from useAuth hook
  const { user } = useAuth();
  // Fetch all users using react-query and axios
  const axiosSecure = useAxiosRegister();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {user ? (
        <div className="bg-white shadow-2xl rounded-2xl p-5 w-96 text-center space-y-3">
          {/* Profile Image */}
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt={user.displayName || "User"}
            className="h-24 w-24 rounded-full mx-auto mb-4 border-4 border-transparent hover:border-blue-500 transition-all duration-300"
          />

          {/* User Details */}
          <h2 className="text-2xl font-bold text-gray-800">
            {user.displayName || "Unknown User"}
          </h2>
          <p className="text-gray-600">{user.email || "Email not available"}</p>
          <p className="mt-2 text-sm text-gray-500">{user.role === "organizer" ? "Role: Organizer" : "Role: Organizer"}</p>

          {/* Update Profile Button */}
          <Link to={`/dashboard/updateOrganizer/${user._id}`}>
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md p-2 rounded-lg"
              aria-label="Update Profile"
            >
              Update Profile
            </button>
          </Link>

          {/* All Users List */}
          {user.role === "organizer" && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">All Users</h3>
              <ul className="space-y-2">
                {users.map((u) => (
                  <li
                    key={u._id}
                    className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                  >
                    <span className="font-medium text-gray-800">
                      {u.name || "No Name"}
                    </span>{" "}
                    -{" "}
                    <span className="text-gray-600">{u.email || "No Email"}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <span className="text-lg text-red-500">No user data available</span>
        </div>
      )}
    </div>
  );
};

export default Organizer;