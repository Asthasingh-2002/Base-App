import React from 'react'
import user from "../../../Assets/userImg.png";
import bell from "../../../Assets/bell.png";


export default function Header() {
  return (
    <div className="flex justify-between ml-5 mr-5">
    <div className="text-xl font-semibold">Upload CSV</div>
    <div className="flex justify-between items-center">
      <img src={bell} alt="bell" className="w-5 h-5 mr-5" />
      <div className="w-10 h-10 rounded-full overflow-hidden ">
        <img
          src={user}
          alt="userprofile"
          className="w-full h-full object-cover"
        />
        <img src={user} alt="userprofile" className="" />
      </div>
    </div>
  </div>
  )
}
