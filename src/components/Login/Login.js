import React from "react";

import logo from "../../Assets/Ellipse.png";
import github from "../../Assets/github.png";
import twitter from "../../Assets/twitter.png";
import linkedin from "../../Assets/linkedin.png";
import discord from "../../Assets/discord.png";
import Vector from "../../Assets/Vector 7.png";
import LoginForm from "./LoginForm/LoginForm";
import img1 from "../../Assets/smallgithub.png"
import img2 from "../../Assets/smallTwitter.png"
import img3 from "../../Assets/smalllinked.png"
import img4 from "../../Assets/smalldiscord.png"


export default function Login({setisLoggedin}) {
  return (
    <div className="flex ">
      {/* Left Area */}
      <div className="hidden  h-screen w-1/2 bg-[#605BFF] md:flex flex-col justify-between items-center p-5 relative">
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
        <div className=" flex m-4">
          <div className="mr-3">
            <img src={github} alt="Github Icon" className="w-5 h-5 mr-2"></img>
          </div>
          <div className="mr-3">
            <img src={twitter} alt="twitter Icon" className="w-5 h-5 mr-2"></img>
          </div>
          <div className="mr-3">
            <img
              src={linkedin}
              alt="linked Icon"
              className="w-5 h-5 mr-2"
            ></img>
          </div>
          <div className="mr-3">
            <img src={discord} alt="discord Icon" className="w-5 h-5 mr-2"></img>
          </div>
        </div>
      </div>
      {/* Right Area Signin form */}
      <div className=" w-full h-screen md:w-1/2  bg-[#F8FAFF] md:flex md:justify-center items-center">
        <div className=" p-5 md:hidden bg-[#605BFF] w-full h-20 flex items-center">
        <div className="md:w-full  relative">
          <img src={logo} alt="Logo" className="w-10  mr-2" />
          <img
            src={Vector}
            alt="Vector"
            className="w-10 absolute top-0 left-0"
            style={{ top: "35%" }}
          />
        </div>
        <h1 className=" text-white text-xl text-semibold">Base</h1>
        </div>


        <LoginForm setisLoggedin={setisLoggedin} />
      
      {/* Small Screen Content */}
        <div className="md:hidden flex m-4  justify-center mb-10">
          <div className="mr-3 ">
            <img src={img1} alt="Github Icon" className="w-5 h-5 mr-2"></img>
          </div>
          <div className="mr-3 ">
            <img src={img2} alt="twitter Icon" className="w-5 h-5 mr-2"></img>
          </div>
          <div className="mr-3 ">
            <img
              src={img3}
              alt="linked Icon"
              className="w-5 h-5 mr-2"
            ></img>
          </div>
          <div className="mr-3  ">
            <img src={img4} alt="discord Icon" className="w-5 h-5 mr-2"></img>
          </div>
        </div>
      </div>
    
    </div>
  );
}
