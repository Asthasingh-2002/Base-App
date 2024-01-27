import React from "react";
import logo from "../../../Assets/logo.png";

// import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="bg-white h-screen w-64 border-r border-gray-200 ">
        <div className="p-4 border-b border-gray-200 flex justify-center ">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />

          <h1 className="text-2xl font-semibold text-gray-800 mr-3">Base</h1>
        </div>
        <nav className="p-4">
          <ul>
            <li className="my-10">
              <a
                href="/dashboard"
                className="text-[#9A9AA9] hover:text-blue-800 flex  "
              >
                <span class="material-symbols-outlined mr-2">dashboard</span>
                <span > Dashboard</span>
              </a>
            </li>
            <li className="my-10">
              <a
                href="/upload"
                className="text-[#9A9AA9] hover:text-blue-800  flex"
              >
                <span className="material-symbols-outlined mr-2">bar_chart</span>

                <span> Upload</span>
              </a>
            </li>
            <li className="my-10">
              <></>
              <a
                href="/invoice"
                className="text-[#9A9AA9] hover:text-blue-800 flex"
              >
                <span class="material-symbols-outlined mr-2">
                  confirmation_number
                </span>
                <span> Invoice</span>
              </a>
            </li>
            <li className="mb-10">
              <a
                href="/schedule"
                className="text-[#9A9AA9] hover:text-blue-800 flex"
              >
                <span class="material-symbols-outlined mr-2">assignment</span>
                <span> Schedule</span>
              </a>
            </li>
            <li className="mb-10">
              <a
                href="/calender"
                className="text-[#9A9AA9] hover:text-blue-800 flex"
              >
                <span class="material-symbols-outlined mr-2">calendar_month</span>
                <span> Calender</span>
              </a>
            </li>
            <li className="mb-10">
              <a
                href="/notification"
                className="text-[#9A9AA9] hover:text-blue-800 flex"
              >
                <span class="material-symbols-outlined mr-2">notifications</span>
                <span> Notification</span>
              </a>
            </li>
            <li className="mb-10">
              <a
                href="/settings"
                className="text-[#9A9AA9] hover:text-blue-800 flex"
              >
                <span class="material-symbols-outlined mr-2">settings</span>
                <span> Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
