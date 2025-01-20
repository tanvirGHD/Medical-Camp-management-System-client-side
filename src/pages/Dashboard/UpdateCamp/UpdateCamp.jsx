
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosRegister from "../../../hook/useAxiosRegister";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hook/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateCamp = () => {
  const {
    campName,
    image,
    campFees,
    dateTime,
    location,
    healthcareProfessionalName,
    description,
    _id,
  } = useLoaderData();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosRegister();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState("");

  // To set the image file input when the component is loaded
  useEffect(() => {
    if (image) {
      setValue("image", [image]); // setting the image value programmatically
    }
  }, [image, setValue]);

  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);
    
    // Check for image file
    if (!data.image || !data.image[0]) {
      setImageError("Image is required");
      return;
    }

    setLoading(true); // Start loading state

    try {
      // Image upload to imgbb and then get an url
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

        // Update the camp info
        const campRes = await axiosSecure.patch(`/camps/${_id}`, campsItem);
        console.log(campRes.data);

        if (campRes.data.modifiedCount > 0) {
          // show success popup
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.campName} is updated to the camp.`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/dashboard/manageRegister')
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Camp update failed!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong. Please try again!",
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Update Camp</h1>
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
            defaultValue={campName}
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("campName", { required: "Camp Name is required" })}
          />
          {errors.campName && (
            <p className="text-red-500 text-sm mt-1">{errors.campName.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="imageUpload"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="imageUpload"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("image", { required: "Image is required" })}
            accept="image/*"
          />
          {imageError && (
            <p className="text-red-500 text-sm mt-1">{imageError}</p>
          )}
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
            defaultValue={campFees}
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
            defaultValue={dateTime}
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("dateTime", { required: "Date & Time is required" })}
          />
          {errors.dateTime && (
            <p className="text-red-500 text-sm mt-1">{errors.dateTime.message}</p>
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
            defaultValue={location}
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("location", { required: "Location is required" })}
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
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
            defaultValue={healthcareProfessionalName}
            id="healthcareProfessionalName"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("healthcareProfessionalName", {
              required: "Healthcare Professional Name is required",
            })}
          />
          {errors.healthcareProfessionalName && (
            <p className="text-red-500 text-sm mt-1">{errors.healthcareProfessionalName.message}</p>
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
            defaultValue={description}
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("description", {
              required: "Description is required",
            })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            {loading ? "Updating..." : "Update Now!"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCamp;
