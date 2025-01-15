import React from 'react';
import { FaMapMarkerAlt, FaUserMd, FaMoneyBillAlt, FaUsers } from 'react-icons/fa'; // Corrected icon import
import useRegister from '../../hook/useRegister';

const PopularCamp = () => {
    const [register] = useRegister();

    // Sort camps by registerCount in descending order and select top 3
    const sortedCamps = register.sort((a, b) => b.registerCount - a.registerCount).slice(0, 3);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold text-center mb-6">Top 3 Camps with Most Participants</h2>
            {sortedCamps.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {sortedCamps.map((camp) => (
                        <div key={camp._id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {/* Image and Description */}
                            <div className="mb-4">
                                <img src={camp.image} alt={camp.campName} className="w-full h-40 object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold text-blue-600">{camp.campName}</h3>
                                <p className="text-gray-500">{camp.description}</p>
                            </div>

                            {/* Other Details (Location, Healthcare Professional, Fees, Participants) */}
                            <div className="flex justify-between text-gray-700">
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="mr-2 text-blue-600" />
                                    <span>{camp.location}</span>
                                </div>
                                <div className="flex items-center">
                                    <FaUserMd className="mr-2 text-green-600" />
                                    <span>{camp.healthcareProfessionalName}</span>
                                </div>
                            </div>
                            <div className="flex justify-between mt-4 text-gray-700">
                                <div className="flex items-center">
                                    <FaMoneyBillAlt className="mr-2 text-yellow-600" />
                                    <span>{camp.campFees}</span>
                                </div>
                                <div className="flex items-center">
                                    <FaUsers className="mr-2 text-purple-600" />
                                    <span>{camp.registerCount} Participants</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No camps available at the moment.</p>
            )}
        </div>
    );
};

export default PopularCamp;
