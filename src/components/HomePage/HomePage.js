import React from 'react'
import SideBar from './SideBar/SideBar'
import ContentArea from './ContentArea/ContentArea'

export default function HomePage() {
  return (
    <div className="flex">
    {/* Sidebar */}
    <SideBar/>

    {/* Content Area with White Background */}
    <div className="flex-1 bg-[#F8FAFF] p-4">
    <ContentArea/>
    </div>
  </div>
  )
}
