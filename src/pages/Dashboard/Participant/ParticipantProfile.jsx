import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAuth from "../../../hook/useAuth";

const ParticipantProfile = () => {
  const axiosPublic = useAxiosPublic();
  const [users, setUsers] = useState([]); 
  const { user } = useAuth(); 

  useEffect(() => {
    axiosPublic
      .get("/registerCamps")
      .then((response) => {

        const loggedInUserProfile = response.data.filter(
          (participant) => participant.email === user?.email
        );
        setUsers(loggedInUserProfile);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [axiosPublic, user?.email]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Logged-in Participant Profile
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.length > 0 ? (
          users.map((user) => (
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
          ))
        ) : (
          <p>No profile found for the logged-in user.</p>
        )}
      </div>
    </div>
  );
};

export default ParticipantProfile;
