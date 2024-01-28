import React, { useEffect, useState } from "react";
import logo from "../../../Assets/logo.png";

import { NavLink, useLocation } from "react-router-dom";

export default function SideBar() {

  const location = useLocation();
  const [pathLocation, setPathLocation] = useState(location.pathname);

  useEffect(() => {
    setPathLocation(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className="bg-white h-screen w-64 border-r border-gray-200 hidden md:block p-3">
        <div className="p-4 border-b border-gray-200 flex justify-center ">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />

          <h1 className="text-2xl font-semibold text-gray-800 mr-3">Base</h1>
        </div>
        <nav className="p-4 font-medium">
          <ul>
            <li className="my-10">
              <NavLink
                to="/dashboard"
                className={`text-[#9A9AA9] hover:text-blue-800  flex ${
                  pathLocation == "/dashboard" ? "text-blue-800" : ""
                }`}
              >
                <span className="material-symbols-outlined mr-2 ">dashboard</span>
                <span> Dashboard</span>
              </NavLink>
            </li>
            <li className="my-10">
              <NavLink
                to="/upload"
                className={`text-[#9A9AA9] hover:text-blue-800  flex ${
                  pathLocation == "/upload" ? "text-blue-800" : ""
                }`}
              >
                <span className="material-symbols-outlined mr-2">
                  bar_chart
                </span>

                <span> Upload</span>
              </NavLink>
            </li>
            <li className="my-10">
              <></>
              <NavLink
                to="/invoice"
                className={`text-[#9A9AA9] hover:text-blue-800  flex ${
                  pathLocation == "/invoice" ? "text-blue-800" : ""
                }`}
              >
                <span className="material-symbols-outlined mr-2">
                  confirmation_number
                </span>
                <span> Invoice</span>
              </NavLink>
            </li>
            <li className="mb-10">
              <NavLink
                to="/schedule"
                className={`text-[#9A9AA9] hover:text-blue-800  flex ${
                  pathLocation == "/schedule" ? "text-blue-800" : ""
                }`}
              >
                <span className="material-symbols-outlined mr-2">assignment</span>
                <span> Schedule</span>
              </NavLink>
            </li>
            <li className="mb-10">
              <NavLink
                to="/calender"
                className={`text-[#9A9AA9] hover:text-blue-800  flex ${
                  pathLocation == "/calender" ? "text-blue-800" : ""
                }`}
              >
                <span className="material-symbols-outlined mr-2">
                  calendar_month
                </span>
                <span> Calender</span>
              </NavLink>
            </li>
            <li className="mb-10">
              <NavLink
                to="/notification"
                className={`text-[#9A9AA9] hover:text-blue-800  flex ${
                  pathLocation == "/notification" ? "text-blue-800" : ""
                }`}
              >
                <span className="material-symbols-outlined mr-2">
                  notifications
                </span>
                <span> Notification</span>
              </NavLink>
            </li>
            <li className="mb-10">
              <NavLink
                to="/settings"
                className={`text-[#9A9AA9] hover:text-blue-800  flex ${
                  pathLocation == "/settings" ? "text-blue-800" : ""
                }`}
              >
                <span className="material-symbols-outlined mr-2">settings</span>
                <span> Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
