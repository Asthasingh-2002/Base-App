import React, { useState } from "react";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";


function App() {
  const [isLoggedIn, setisLoggedin]= useState(1);

  return (
    <div>
    {isLoggedIn? <HomePage/>: <Login/> }
   
    
    </div>
  );
}

export default App;
