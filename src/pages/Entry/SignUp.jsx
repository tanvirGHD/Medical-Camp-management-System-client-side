import Lottie from "lottie-react";
import loginLottieData from "../../assets/Animation - 1736921457534.json";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

  const {register,handleSubmit,reset, formState: { errors },} = useForm();
  const {createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
      updateUserProfile(data.name, data.photoURL)
      .then(() => {
        console.log('user profile info update')
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully",
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/')
      })
      .catch(error => console.log(error))
    })
  }

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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h2 className="text-center text-2xl font-bold text-blue-600">
            Sign Up
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800 font-medium">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
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
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              {errors.photoURL && (
                <span className="text-red-500 my-2">Photo URL is required</span>
              )}
            </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800 font-medium">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
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
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern:
                  /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]/,
              })}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
            {errors.password?.type === "required" && (
                <p className="text-red-500 my-2">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 my-2">
                  Password must be at least 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500 my-2">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 my-2">
                  Password must include uppercase, lowercase, number, and
                  special characters.
                </p>
              )}
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
