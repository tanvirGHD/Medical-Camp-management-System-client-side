import Lottie from "lottie-react";
import loginLottieData from "../../assets/Animation - 1736921457534.json";
import { Link, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Logged In Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid email or password!",
        });
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
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
          <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Login
            </h2>

            {/* Social Login */}
            <SocialLogin />

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800 font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full rounded-lg border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* Captcha */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800 font-medium">
                  Captcha
                </span>
              </label>
              <div className="flex items-center gap-4">
                <LoadCanvasTemplate />
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the captcha above"
                  className="input input-bordered w-full rounded-lg border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button
                type="submit"
                disabled={disabled}
                className={`btn w-full rounded-lg py-3 text-white font-bold transition-all duration-300 ${
                  disabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                }`}
              >
                {disabled ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Validating...
                  </span>
                ) : (
                  "Login"
                )}
              </button>
            </div>

            {/* Signup Link */}
            <p className="text-center text-sm text-blue-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="link link-hover text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;