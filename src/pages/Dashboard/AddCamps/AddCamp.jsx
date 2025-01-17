import React from "react";
import { useForm } from "react-hook-form";

  const AddCamp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Add New Camp</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
        {/* Camp Name */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="campName"
          >
            Camp Name
          </label>
          <input
            type="text"
            id="campName"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("campName", { required: "Camp Name is required" })}
          />
          {errors.campName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.campName.message}
            </p>
          )}
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("image", { required: "Image URL is required" })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Camp Fees */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="campFees"
          >
            Camp Fees
          </label>
          <input
            type="number"
            id="campFees"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("campFees", { required: "Camp Fees is required" })}
          />
          {errors.campFees && (
            <p className="text-red-500 text-sm mt-1">{errors.campFees.message}</p>
          )}
        </div>

        {/* Date & Time */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="dateTime"
          >
            Date & Time
          </label>
          <input
            type="datetime-local"
            id="dateTime"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("dateTime", { required: "Date & Time is required" })}
          />
          {errors.dateTime && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dateTime.message}
            </p>
          )}
        </div>

        {/* Location */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("location", { required: "Location is required" })}
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>

        {/* Healthcare Professional Name */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="healthcareProfessionalName"
          >
            Healthcare Professional Name
          </label>
          <input
            type="text"
            id="healthcareProfessionalName"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("healthcareProfessionalName", {
              required: "Healthcare Professional Name is required",
            })}
          />
          {errors.healthcareProfessionalName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.healthcareProfessionalName.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("description", { required: "Description is required" })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Add Camp
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCamp;
