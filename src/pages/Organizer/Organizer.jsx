import React from 'react';
import useAuth from '../../hook/useAuth';
import useAxiosRegister from '../../hook/useAxiosRegister';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

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
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {user ? (
                <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
                    <img 
                        src={user.photoURL || "https://via.placeholder.com/150"} 
                        alt={user.displayName || "User"} 
                        className="h-24 w-24 rounded-full mx-auto mb-4 border-2 border-gray-300"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">{user.displayName || "Unknown User"}</h2>
                    <p className="text-gray-600">{user.email || "Email not available"}</p>
                    <p className="mt-2 text-sm text-gray-500">{user.role === "organizer" ? "Role: Organizer" : "Role: Organizer"}</p>
                    {/* update organizer */}
                    <Link to={`/dashboard/updateOrganizer/${user._id}`}>
                    <button className='bg-green-400 p-1  rounded-lg text-white'> Update Profile </button>
                    </Link>

                    {/* Only display data if role is organizer */}
                    {user.role === "organizer" && (
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">All Users</h3>
                            <ul className="text-left">
                                {users.map((u) => (
                                    <li key={u._id} className="mb-2">
                                        <span className="font-medium">{u.name || "No Name"}</span> - {u.email || "No Email"}
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
