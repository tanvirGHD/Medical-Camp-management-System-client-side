import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser } from "react-icons/fa";
import useAxiosRegister from "../../../hook/useAxiosRegister";

const AllUsers = () => {
  const axiosSecure = useAxiosRegister();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Total Users {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="text-center hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={user.photoURL}
                    alt={user.name}
                    className="h-12 w-12 rounded-lg mx-auto"
                  />
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="text-red-500 hover:text-red-700 mx-2">
                    <FaUser className="h-6 w-6" />
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="text-red-500 hover:text-red-700 mx-2">
                    <FaTrash className="h-6 w-6" />
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
