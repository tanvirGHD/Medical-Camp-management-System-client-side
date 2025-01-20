import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateOrganizer = () => {
    const organizers = useLoaderData();
    console.log(organizers)
  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Update Organizer Information</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photoURL" className="block text-sm font-semibold mb-2">Photo URL</label>
          <input 
            type="url" 
            id="photoURL" 
            name="photoURL" 
            placeholder="Enter photo URL"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-semibold mb-2">Role</label>
          <select 
            id="role" 
            name="role"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="organizer">Organizer</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-sm font-semibold mb-2">Contact Number</label>
          <input 
            type="tel" 
            id="contactNumber" 
            name="contactNumber" 
            placeholder="Enter contact number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center">
          <button 
            type="submit" 
            className="w-full py-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateOrganizer;
