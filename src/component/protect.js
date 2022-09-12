import React from "react";
import {  Outlet, Navigate } from "react-router-dom";
const Auth = () => {
   
    const userid = JSON.parse(localStorage.getItem("userid"))

  return userid;
};

function Protectroute() {
  const userAuth = Auth();

  console.log(userAuth);
  return <div>{userAuth ? <Outlet /> : <Navigate to="/welcome/login" />}</div>;
}

export default Protectroute;
