import React from "react";
import user from "../../../Assets/userImg.png";
import bell from "../../../Assets/bell.png";
import logo from "../../../Assets/logo.png";


export default function Header() {
  return (
    <div className="flex justify-between items-center  ">
      <div className="md:hidden flex items-center  ">
        <span className="material-symbols-outlined text-3xl mr-2">menu</span>
        <img src={logo} alt="Logo" className="w-7 h-7 mx-2 " />
        <h1 className="text-xl font-semibold text-gray-800 ml-1">Base</h1>
      </div>


      <div className="text-xl font-semibold hidden md:flex ">Upload CSV</div>
      <div className="flex justify-between items-center">
        <img src={bell} alt="bell" className="md:w-5 md:h-5 w-4 h-4 mr-5" />
        <div className="md:w-10 md:h-10 w-8 h-8 rounded-full overflow-hidden ">
          <img
            src={user}
            alt="userprofile"
            className="w-full h-full object-cover"
          />
          <img src={user} alt="userprofile" className="" />
        </div>
      </div>
    </div>
  );
}
