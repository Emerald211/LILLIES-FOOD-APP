import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import "./orders.css";

const Orders = () => {
  const [user, setuser] = useState({});

  const [orders, setorders] = useState([]);

  const userid = JSON.parse(localStorage.getItem("userid"));

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9000/users/${userid}`)
      .then((res) => res.json())
      .then((data) => {
        setuser(data);
        setorders(data.order);
      });
  }, []);

  const deleteitem = (id) => {
    const filteredorders = orders.filter((eachorder) => {
      if (eachorder.id === id) {
        console.log("correct");
      }

      return eachorder.id !== id;
    });

    const updateuserinfo = {
      username: user.username,
      email: user.email,
      password: user.password,
      cart: user.cart,
      order: filteredorders,
    };

    fetch(`http://localhost:9000/users/${userid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateuserinfo),
    });

    setorders(filteredorders);

    console.log(filteredorders);
  };

  return (
    <div className=" flex flex-col justify-center items-center fixed top-0 right-0 z-10 order">
      <div className="fade z-20"></div>
      <div className="bg-white  px-8 pt-20 flex flex-col absolute  z-30  top-0 right-0 order-list ">
        <div
          onClick={() => {
            navigate("/dashboard");
          }}
          className=" flex gap-4 items-center absolute top-4 left-4 font-bold"
        >
          <FaAngleLeft
            style={{ color: "#00302E" }}
            className="text-3xl"
          />
          <h1 style={{ color: "#00302E" }} className=" text-xl">
            Go back
          </h1>
        </div>
        <div className="flex flex-col mt-8">
          <h1 className="text-3xl font-bold">Your Orders</h1>

          <div className="flex gap-5 mt-3 ">
            <h1 className="w-2/4">Items</h1>
            <h1>Qty</h1>
            <h1>Unit price</h1>
            <h1>Sub-total</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-10">
          {orders.map((eachitem) => {
            return (
              <div className="flex checkout-gap  items-center gap-4 md:gap-10">
                <div className="flex items-center w-2/4 gap-3">
                  <div
                    style={{
                      backgroundImage: `url(${eachitem.image})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className=" checkout-image md-w-16 w-14 h-14 md-h-16 w-16 h-16 rounded-full"
                  ></div>
                  <div className="flex flex-col w-3/4 ">
                    <h1 className="font-bold text-xs">{eachitem.name}</h1>
                    <h1
                      onClick={() => deleteitem(eachitem.id)}
                      className=" cursor-pointer text-xs font-bold text-red-600"
                    >
                      Remove
                    </h1>
                  </div>
                </div>

                <h1>{eachitem.quantity}</h1>
                <h1>{eachitem.price}</h1>
                <h1 className="ml-5 subtotal text-red-500 font-bold">
                  Pending
                </h1>
              </div>
            );
          })}
                  
             {orders.length === 0 && <div>No Item here</div> }     
        </div>
      </div>
    </div>
  );
};

export default Orders;
