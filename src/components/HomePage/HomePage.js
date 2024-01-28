import React from "react";
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Upload from "./ContentArea/Upload/Upload";

export default function HomePage() {
  return (
    <div className="flex">
      <Router>
        <SideBar />

        {/* Content Area with White Background */}
        <div className="w-full h-full md:bg-[#F8FAFF] p-4 min-h-screen">
          <Header />
          {/* <ContentArea className=""/> */}

          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate to="/upload"></Navigate>}
            />
            <Route exact path="/upload" element={<Upload />} />
            <Route path="*" element={<div className="flex  justify-center items-center ">
              <h1 className="text-4xl font-bold">Page not Available</h1>
            </div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
