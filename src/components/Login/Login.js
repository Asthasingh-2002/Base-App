import React from "react";
import Signin from "./Signin/Signin";
import logo from "../../Assets/Ellipse.png";

export default function Login() {
  return (
    <div className="flex">
      <div className="h-screen w-1/2 bg-[#605BFF]  ">
         <div>
          <img src={logo} alt="Google Icon" className="w-10 h-10 mr-2" />
        </div>
        <div className="text-white text-5xl font-bold">BASE</div>
      </div>
      <div className="h-screen w-1/2  bg-[#F8FAFF] flex justify-center items-center">
        <Signin />
      </div>
    </div>
  );
}
