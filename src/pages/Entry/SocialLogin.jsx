import React from 'react';
import useAuth from '../../hook/useAuth';

const SocialLogin = () => {
    const {googleSignIn} = useAuth();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })

    }


    return (
        <div className="flex flex-col items-center space-y-4">
        {/* Google Sign-in */}
        <button onClick={handleGoogleSignIn} className="group relative mx-auto flex h-[35px] w-full max-w-[300px] items-center overflow-hidden rounded-full bg-white shadow-lg ring-2 ring-blue-500 transition-transform duration-300 hover:scale-105">
          <div className="relative z-20 flex h-full w-[70%] items-center justify-center bg-blue-500 px-4 md:text-lg text-xs font-semibold text-white duration-300 group-hover:bg-white group-hover:text-blue-500">
            Sign in with Google
          </div>
          <span className="flex h-full w-[30%] items-center justify-center bg-white text-blue-500 duration-300 group-hover:bg-blue-500 group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-6 w-6 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </span>
        </button>
        <div className='divider'>OR</div>
      </div>
    );
};

export default SocialLogin;