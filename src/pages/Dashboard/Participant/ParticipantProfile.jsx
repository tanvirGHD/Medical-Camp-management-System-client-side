
import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../hook/useAxiosPublic";

const ParticipantProfile = () => {
  const axiosPublic = useAxiosPublic(); 
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    axiosPublic
      .get("/registerCamps") 
      .then((response) => {
        setUsers(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error); 
      });
  }, [axiosPublic]); 

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Participant Profiles ({users.length})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user._id}
            className="border p-4 rounded shadow-md flex flex-col items-center"
          >
            <img
              src={user.image}
              alt={user.participantName}
              className="w-24 h-24 rounded-full object-cover mb-3"
            />
            <h2 className="text-lg font-semibold">{user.participantName}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Gender: {user.gender}</p>
            <p>Age: {user.age}</p>
            <p>Camp Name: {user.campName}</p>
            <button className="p-1 px-2 bg-blue-400 rounded-lg">Update</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipantProfile;
