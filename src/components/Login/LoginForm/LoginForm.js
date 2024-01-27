import React from "react";
import { FcGoogle } from "react-icons/fc";
import googleImg from "../../../Assets/google.png";
import appleImg from "../../../Assets/apple 1.png";


export default function LoginForm({setisLoggedin}) {

  const handleClick=()=>{
   console.log("hii");
   setisLoggedin(1);
  };
  return (
    <div className="flex flex-col justify-start m-10  w-96 ">
      <div className="text-2xl font-bold">Sign In</div>
      <div className="text-sm">Sign in to your account</div>
      <div className="text-sm mt-5 mb-5 flex justify-between">
        <button className="w-1/2 bg-white items-center rounded-lg p-1 mr-2 flex justify-center">
          <img src={googleImg} alt="Google Icon" className="w-4 h-4 mr-2" />
          Sign in with Google
        </button>
        <button className="w-1/2 bg-white items-center rounded-lg p-1 ml-2 flex justify-center">
          <img src={appleImg} alt="Google Icon" className="w-4 h-4 mr-2" />
          Sign in with Apple
        </button>
      </div>

      <div className="bg-white rounded-lg w-50 p-5">
        <form>
          <div className=" text-sm flex flex-col m-2  ">
            <label>Email Address</label>
            <input className="bg-gray-200  rounded-md p-1 mt-1" type="email" />
          </div>

          <div className=" text-sm flex flex-col m-2 ">
            <label>Password</label>
            <input
              className="bg-gray-200  rounded-md p-1 mt-1"
              type="password"
            />
          </div>
          <h1 className="text-blue-500 m-2 text-sm">Forgot password?</h1>
          <button
            className="bg-[#605BFF] w-full m-2 text-sm text-white  rounded-md p-1 font-semibold"
            type="submit "
            onClick={handleClick}
          >
            Sign In
          </button>
        </form>
      </div>
      <h1 className="text-center text-sm m-5 text-[#858585]">
        Don’t have an account?{" "}
        <span className="text-[#346BD4]">Register here</span>
      </h1>
    </div>
  );
}
