import React from "react";

import logo from "../../Assets/Ellipse.png";
import github from "../../Assets/github.png";
import twitter from "../../Assets/twitter.png";
import linkedin from "../../Assets/linkedin.png";
import discord from "../../Assets/discord.png";
import Vector from "../../Assets/Vector 7.png";
import LoginForm from "./LoginForm/LoginForm";

export default function Login({setisLoggedin}) {
  return (
    <div className="flex ">
      {/* Left Area */}
      <div className="h-screen w-1/2 bg-[#605BFF] flex flex-col justify-between items-center p-5 relative">
        <div className="w-full  relative">
          <img src={logo} alt="Logo" className="w-10  mr-2" />
          <img
            src={Vector}
            alt="Vector"
            className="w-10 absolute top-0 left-0"
            style={{ top: "35%" }}
          />
        </div>
        <div className="text-white text-5xl font-bold">BASE</div>
        <div className=" flex m-4 ">
          <div className="mr-3">
            <img src={github} alt="Github Icon" className="w-5 h-5 mr-2"></img>
          </div>
          <div className="mr-3">
            <img src={twitter} alt="Github Icon" className="w-5 h-5 mr-2"></img>
          </div>
          <div className="mr-3">
            <img
              src={linkedin}
              alt="Github Icon"
              className="w-5 h-5 mr-2"
            ></img>
          </div>
          <div className="mr-3">
            <img src={discord} alt="Github Icon" className="w-5 h-5 mr-2"></img>
          </div>
        </div>
      </div>
      {/* Right Area Signin form */}
      <div className="h-screen w-1/2  bg-[#F8FAFF] flex justify-center items-center">
        <LoginForm setisLoggedin={setisLoggedin} />
      </div>
    </div>
  );
}
