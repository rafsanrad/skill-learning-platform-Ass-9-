import React from "react";
import MyContainer from "../components/MyContainer";
import { Link } from "react-router";

const SignIn = () => {
  return (
    <div
      className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-linear-to-br from-orange-600 via-orange-400 to-yellow-300

     relative overflow-hidden"
    >
      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Sign in to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </div>

          {/* Login card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <form className="space-y-5">
              <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                Sign In
              </h2>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  //ref={emailRef}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  //type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span
                  //onClick={() => setShow(!show)}
                  className="absolute right-2 top-9 cursor-pointer"
                >
                  {/* {show ? <FaEye></FaEye> : <IoEyeOff></IoEyeOff>} */}
                </span>
              </div>

              {/* forget password button */}
              <button
                className="hover:underline cursor-pointer"
                // onClick={handleForgetPassword}
                type="button" //eta na dile form submit hoye handlesignIn k call kore dibe.
              >
                Forget password?
              </button>

              <button
                type="submit"
                className="btn w-full bg-orange-500 hover:bg-orange-600 text-white border-none"
              >
                Login 
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 ">
                <div className="h-px w-16 bg-white"></div>
                <span className="text-sm text-white">or</span>
                <div className="h-px w-16 bg-white"></div>
              </div>

              {/* Google Signin */}
              <button
                type="button"
                // onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="text-center text-sm text-white/80 mt-3">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-red-500 hover:text-white underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default SignIn;
