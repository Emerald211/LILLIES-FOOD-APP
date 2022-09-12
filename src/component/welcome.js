import React from "react";
import './welcome.css'
import { Outlet } from "react-router-dom";


function Welcome() {
  return (
    <div className="flex welcome ">
      <div className=" object-fill wel">
      </div>

    
      <Outlet />
    </div>
  );
}

export default Welcome;
