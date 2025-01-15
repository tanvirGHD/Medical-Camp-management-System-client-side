import Lottie from 'lottie-react';
import loginLottieData from '../../assets/Animation - 1736921457534.json'
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    useEffect( ()=>{
        loadCaptchaEnginge(6);
    },[])

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true);
        }
    }


    return (
        <div className="card bg-blue-50 w-full max-w-4xl mx-auto mt-20 md:mt-40 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Animation Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-48 md:w-64">
          {/* Replace with login Lottie animation */}
          <Lottie animationData={loginLottieData} />{" "}
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1">
        <form onSubmit={handleLogin} className="space-y-4">
          {" "}
          {/* Change handleRegister to handleSignIn */}
          <h2 className="text-center text-2xl font-bold text-blue-600">
            Login
          </h2>
          {/* email */}
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
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          {/* password */}
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
          {/* captcha */}
          <div className="form-control">
            <label className="label">
            <LoadCanvasTemplate />
            </label>
            <input
              ref={captchaRef}
              type="text"
              name="captcha"
              placeholder="type the captcha above"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
            <button onClick={handleValidateCaptcha} className='btn mt-2 btn-xs'>Validate</button>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              disabled={disabled}
              className="btn btn-primary bg-blue-600 border-none hover:bg-blue-700"
            >
              Login
            </button>
          </div>
          <p className="text-center text-sm text-blue-600">
          Don't have an account?{" "}
            <Link to='/signup' href="#" className="link link-hover text-blue-800 font-semibold">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
    );
};

export default Login;