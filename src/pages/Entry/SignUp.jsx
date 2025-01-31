import Lottie from "lottie-react";
import loginLottieData from "../../assets/Animation - 1736921457534.json";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hook/useAxiosPublic";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // Create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email,
              photoURL: data.photoURL,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("User added to the database");
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="card w-full max-w-4xl p-8 bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Animation Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-48 md:w-64 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <Lottie animationData={loginLottieData} />
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1 w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Sign Up
            </h2>

            {/* Social Login */}
            <SocialLogin />

            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800 font-medium">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your name"
                className="input input-bordered w-full rounded-lg border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* Photo URL Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800 font-medium">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered w-full rounded-lg border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              {errors.photoURL && (
                <p className="text-red-500 mt-2">Photo URL is required</p>
              )}
            </div>

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800 font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="input input-bordered w-full rounded-lg border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800 font-medium">
                  Password
                </span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]/,
                })}
                placeholder="Enter your password"
                className="input input-bordered w-full rounded-lg border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 mt-2">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 mt-2">
                  Password must be at least 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500 mt-2">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 mt-2">
                  Password must include uppercase, lowercase, number, and
                  special characters.
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button
                type="submit"
                className="btn w-full rounded-lg py-3 text-white font-bold transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Sign Up
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-blue-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="link link-hover text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;