import React from 'react'
import SideBar from './SideBar/SideBar'
import ContentArea from './ContentArea/ContentArea'
import Header from './Header/Header'

export default function HomePage() {
  return (
    <div className="flex">
    {/* Sidebar */}
    
    <SideBar/>

    {/* Content Area with White Background */}
    <div className="w-full h-full bg-[#F8FAFF] p-4 min-h-screen">
    <Header/>
    <ContentArea/>
    </div>
    
  </div>
  )
}
