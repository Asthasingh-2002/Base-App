import React from 'react'
import logo from "../../../Assets/logo.png"
// import logo from "../../../Assets/logo.png"
import img1 from "../../../Assets/dashboard.png"
import img3 from "../../../Assets/invoice.png"
import img4 from "../../../Assets/schedule.png"
import img5 from "../../../Assets/Calendar.png"
import img6 from "../../../Assets/Notification.png"
import img7 from "../../../Assets/Setting.png"


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
          <li className="mb-5 mt-2 " >
            <a href="#" className="text-[#9A9AA9] hover:text-blue-800   hover:bg-blue-800 flex  ">
            <img src={img1} alt="Logo" className="w-5 h-5 mr-2 mb-4 " />
               <span className=" hover:bg-white"> Dashboard</span></a>
          </li>
          <li className="mb-5">
          <a href="#" className="text-[#9A9AA9] hover:text-blue-800  flex">
            <img src={img1} alt="Logo" className="w-5 h-5 mr-2 mb-4" />
               <span> Upload</span></a>
          </li>
          <li className="mb-5">
          <a href="#" className="text-[#9A9AA9] hover:text-blue-800 flex">
            <img src={img3} alt="Logo" className="w-5 h-5 mr-2 mb-4" />
               <span> Invoice</span></a>
          </li>
          <li className="mb-5">
          <a href="#" className="text-[#9A9AA9] hover:text-blue-800 flex">
            <img src={img4} alt="Logo" className="w-5 h-5 mr-2 mb-4" />
               <span> Schedule</span></a>
          </li>
          <li className="mb-5">
          <a href="#" className="text-[#9A9AA9] hover:text-blue-800 flex">
            <img src={img5} alt="Logo" className="w-5 h-5 mr-2 mb-4" />
               <span> Calender</span></a>
          </li>
          <li className="mb-5">
          <a href="#" className="text-[#9A9AA9] hover:text-blue-800 flex">
            <img src={img6} alt="Logo" className="w-5 h-5 mr-2 mb-4 " />
               <span> Notification</span></a>
          </li>
          <li className="mb-5">
          <a href="#" className="text-[#9A9AA9] hover:text-blue-800 flex">
            <img src={img7} alt="Logo" className="w-5 h-5 mr-2 mb-4" />
               <span> Settings</span></a>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}
