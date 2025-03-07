import React from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAxiosRegister from "../../../hook/useAxiosRegister";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCamp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosRegister();

  const onSubmit = async (data) => {
    // Image upload to imgbb and then get a URL
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const campsItem = {
        campName: data.campName,
        campFees: parseFloat(data.campFees),
        dateTime: data.dateTime,
        description: data.description,
        healthcareProfessionalName: data.healthcareProfessionalName,
        location: data.location,
        image: res.data.data.display_url,
      };

      const campRes = await axiosSecure.post("/camps", campsItem);
      if (campRes.data.insertedId) {
        // Show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.campName} has been added to the camp.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Add New Camp
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Camp Name */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="campName"
            >
              Camp Name
            </label>
            <input
              type="text"
              id="campName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
              {...register("campName", { required: "Camp Name is required" })}
            />
            {errors.campName && (
              <p className="mt-1 text-sm text-red-500">{errors.campName.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="imageUpload"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="imageUpload"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
              {...register("image", { required: "Image is required" })}
              accept="image/*"
            />
            {errors.image && (
              <p className="mt-1 text-sm text-red-500">{errors.image.message}</p>
            )}
          </div>

          {/* Camp Fees */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="campFees"
            >
              Camp Fees
            </label>
            <input
              type="number"
              id="campFees"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
              {...register("campFees", { required: "Camp Fees is required" })}
            />
            {errors.campFees && (
              <p className="mt-1 text-sm text-red-500">{errors.campFees.message}</p>
            )}
          </div>

          {/* Date & Time */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="dateTime"
            >
              Date & Time
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
              {...register("dateTime", { required: "Date & Time is required" })}
            />
            {errors.dateTime && (
              <p className="mt-1 text-sm text-red-500">{errors.dateTime.message}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="location"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
              {...register("location", { required: "Location is required" })}
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
            )}
          </div>

          {/* Healthcare Professional Name */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="healthcareProfessionalName"
            >
              Healthcare Professional Name
            </label>
            <input
              type="text"
              id="healthcareProfessionalName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
              {...register("healthcareProfessionalName", {
                required: "Healthcare Professional Name is required",
              })}
            />
            {errors.healthcareProfessionalName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.healthcareProfessionalName.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
              {...register("description", {
                required: "Description is required",
              })}
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Add Camp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCamp;