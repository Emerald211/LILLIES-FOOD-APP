import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./cart.css";

import { FaAngleLeft, FaCheck, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [user, setuser] = useState({});
  const [success, setsuccess] = useState(false)
  const [cart, setcart] = useState([]);
  const userid = JSON.parse(localStorage.getItem("userid"));

  let navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:9000/users/${userid}`)
      .then((res) => res.json())
      .then((data) => {
        setuser(data);
        setcart(data.cart);
        console.log(data.cart);
      })
  });


  const itemsAmount = cart.map((eachitem) => {
      return(eachitem.subtotal)
  })

  console.log(itemsAmount)

  const totalitemamount = itemsAmount.reduce((sum, value) => {
      return( sum + value)
  }, 0)

  console.log(totalitemamount)



  const deleteitem = (id) => {

 const filteredcart =  cart.filter((eachcart) => {

      if (eachcart.id === id) {
        console.log("correct")
      }

      return (
        eachcart.id !== id
      )
      
      
 })
    
 const updateuserinfo = {
  username: user.username,
  email: user.email,
  password: user.password,
   cart: filteredcart,
  order: []
    }
    
    fetch(`http://localhost:9000/users/${userid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateuserinfo),
    })
    
    setcart(filteredcart)

    console.log(filteredcart)
  }

  const checkout = () => {

    if (cart.length === 0) {
      alert("No Item here")
    } else {
      setsuccess(true)
      const updateuserinfo = {
        username: user.username,
        email: user.email,
        password: user.password,
        cart: [],
        order: user.cart
      
      
          }
          
          fetch(`http://localhost:9000/users/${userid}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateuserinfo),
          })
          
          setcart([])
    }

 
  }

  return (
    <div className=" flex flex-col justify-center items-center fixed top-0 right-0 z-10 cart">
      <div className=" fade z-20"></div>
      <div className="bg-white overflow-scroll mb-10  px-8 pt-20 flex flex-col absolute  z-30  top-0 right-0 cart-list ">
      <div onClick={() => {
          navigate("/dashboard")
          
        } } className=' flex gap-4 items-center absolute top-4 left-4 font-bold'>
          <FaAngleLeft  style={{    color: "#00302E"}} className='text-3xl' />
          <h1  style={{    color: "#00302E"}} className=' text-xl'>Go back</h1>
        </div>
        <div className="flex flex-col mt-8">
          <h1 className="text-3xl font-bold">Your Cart</h1>

          <div className="flex gap-5 mt-3 ">
            <h1 className="w-2/4">Items</h1>
            <h1>Qty</h1>
            <h1>Unit price</h1>
            <h1>Sub-total</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-10">
       
          {cart.map((eachcart) => {
            return (
              <div className="flex checkout-gap  items-center gap-4 md:gap-10">
                <div className="flex items-center w-2/4 gap-3">
                  <div
                    style={{
                      backgroundImage: `url(${eachcart.image})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className=" checkout-image md-w-16 w-14 h-14 md-h-16 w-16 h-16 rounded-full"
                  ></div>
                  <div className="flex flex-col w-3/4 ">
                    <h1 className="font-bold text-xs">{eachcart.name}</h1>
                    <h1 onClick={() => deleteitem(eachcart.id)} className=" cursor-pointer text-xs font-bold text-red-600">Remove</h1>
                  </div>
                </div>

                <h1>{eachcart.quantity}</h1>
                <h1>{eachcart.price}</h1>
                <h1 className="ml-5 subtotal text-green-900 font-bold">N{ eachcart.subtotal}</h1>
              </div>
            );
          })}

          {cart.length === 0 && <div>No Item here</div> }  
        </div>

        <div className=" flex justify-end mt-8 sm:px-10 md:px-14">
          <h1 className="font-bold">Total: N{ totalitemamount}</h1>
        </div>

        <button onClick={checkout} className=" bg-green-900 mt-7 h-10 font-bold text-white">Checkout</button>

        <div style={{display: success ? "flex" : "none"}} className=" checkout-success absolute  justify-center items-center left-0 top-0 w-full h-full bg-slate-300 ">
          <FaTimes onClick={() => setsuccess(false)} className=" absolute top-8 text-3xl cursor-pointer left-8" />
          <div className=" gap-3 flex flex-col justify-center items-center w-2/4 h-2/4 bg-white">
            <div className="md:w-2/5 md:h-2/5 h-2/5 w-4/5  flex justify-center items-center bg-green-900 rounded-full">
              <FaCheck className=" text-5xl text-white " />

            </div>
            <h1 className="  text-4xl font-bold text-green-900 text-center">Checkout Succesful</h1>
            <h5 className="text-center"> Go to Your Order Details </h5>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
