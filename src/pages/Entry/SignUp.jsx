import Lottie from "lottie-react";
import loginLottieData from "../../assets/Animation - 1736921457534.json";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="card bg-blue-50 w-full max-w-4xl mx-auto my-20 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Animation Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-48 md:w-64">
          <Lottie animationData={loginLottieData} />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1">
        <form className="space-y-4">
          <h2 className="text-center text-2xl font-bold text-blue-600">
            Sign Up
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800 font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800 font-medium">
                Photo URL
              </span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Enter your photo URL"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800 font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800 font-medium">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary bg-blue-600 border-none hover:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center text-sm text-blue-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="link link-hover text-blue-800 font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
