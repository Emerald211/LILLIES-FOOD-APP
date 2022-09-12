import React from "react";
import { useState } from "react";
import { BsTextRight } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Notification({ State }) {
  let navigate = useNavigate();
  const [nav, shownav] = useState(false);

  
  const name = `${State.username}`

  const profilename = name.slice(0,2)

  
  return (
    <div className=" px-5 py-6 flex items-center ">
      <div className="n-meal">
        <h1 className="md:text-xl text-xl font-bold md:mb-1 n-greeting">
          Good Morning {State.username}
        </h1>
        <p className=" text-sm font-bold">
          What delicious meal are you craving for today ?
        </p>
      </div>

      <BsTextRight
        onClick={() => shownav(!nav)}
        className=" mobile-menu text-3xl font-extrabold"
      />

      <div className="flex ml-auto " onClick={() => navigate("/dashboard/cart")}>
        <FaShoppingCart className=" text-2xl cart-no font-bold" />
        <div
          style={{ backgroundColor: "#00EDDF" }}
          className="w-6 h-6 ml-1 cart-no text-center rounded-lg text-white  font-bold flex items-center justify-center"
        >
          {State.cart?.length}
        </div>
      </div>
      <div
        onClick={() => navigate("/dashboard/yourprofile")}
        style={{ backgroundColor: "#00EDDF" }}
        className=" w-10 h-10 cursor-pointer uppercase md:w-14 md:h-14 ml-4 xl:ml-auto rounded-full text-white items-center justify-center flex font-bold"
      >
        {profilename}
      </div>

      <div style={{ width: nav ? "100vw" : "0" }} className="nav-blur"></div>

      <div
        style={{ width: nav ? "300px" : "0" }}
        id="mySidenav"
        className="mobile-nav"
      >
        <h1 onClick={() => shownav(false)} className="closebtn">
          &times;
        </h1>
        <h1 onClick={() => {
          navigate("/dashboard")
          shownav(false)
        }} href="#">Home</h1>
        <h1  onClick={() => {
          navigate("/dashboard/yourprofile")
          shownav(false)
        }} href="#">My Profile</h1>
        <h1  onClick={() => {
          navigate("/dashboard/yourorders")
          shownav(false)
        }} href="#">Your Orders</h1>
        <h1  onClick={() => {
          navigate("/dashboard/cart")
          shownav(false)
        }} href="#">Your Cart</h1>
      </div>
    </div>
  );
}

export default Notification;
