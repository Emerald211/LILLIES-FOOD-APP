import React, { useState, useEffect } from "react";
import { BsBoxArrowInLeft } from "react-icons/bs";
import "./profile.css";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Profile() {
  const [userdata, setuserdata] = useState([]);
  const userid = JSON.parse(localStorage.getItem("userid"));

  useEffect(() => {
    fetch(`http://localhost:9000/users/${userid}`)
      .then((res) => res.json())
      .then((data) => {
        setuserdata(data);
      });
  }, [userdata, userid]);

  const name = `${userdata.username}`;

  const profilename = name.slice(0, 2);

  let navigate = useNavigate();

  const logout = () => {
    navigate("/welcome/login");
    window.localStorage.clear();
  };
  return (
    <div className=" flex flex-col justify-center items-center fixed top-0 right-0 z-10 profile">
      <div className=" fade z-20"></div>
      <div className="bg-white flex items-center  px-8 pt-20 flex flex-col absolute  z-30  top-0 right-0 profile-list ">
        <div
          onClick={() => navigate("/dashboard")}
          className=" absolute text-green-900 top-8 left-4 text-3xl"
        >
          <FaAngleLeft />
        </div>
        <div className="md:w-52 uppercase md:h-52 mt-10 w-32 h-32 rounded-full text-5xl text-white flex justify-center items-center bg-green-500">
          {profilename}
        </div>
        <div className="justify-center mt-8">
          <div className="flex  items-center font-bold text-sm md:text-xl mt-4">
            <h1 className=" text-green-500">Name:</h1>
            <h1 className=" ml-6 md:ml-12">{userdata.username}</h1>
          </div>
          <div className="flex w-1/4  items-center font-bold text-sm md:text-xl mt-4">
            <h1 className=" text-green-500">Email:</h1>
            <h1 className=" w-2/4 ml-6 md:ml-12">{userdata.email}</h1>
          </div>
        </div>

        <div
          onClick={logout}
          className=" flex mt-16 gap-3 cursor-pointer text-red-500 items-center font-bold text-xl"
        >
          <BsBoxArrowInLeft />
          <h1>LogOut</h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;
