import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'

function Addtocart() {

  const userid = JSON.parse(localStorage.getItem("userid"))
  let navigate = useNavigate()
  
  const [product, setproduct] = useState({})
  const [add, setadd] = useState(false)
  const [itemsnumber, setitemsnumber] = useState(0)

  const [user, setuser] = useState([])

  const {id} = useParams()

  useEffect(() => {
    fetch(`https://lillies-food-app-backend.herokuapp.com/menu/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      setproduct(data)
    })
  }, [id])

  useEffect(() => {
    fetch(`https://lillies-food-app-backend.herokuapp.com/users/${userid}`)
      .then((res) => res.json())
      .then((data) => {
        setuser(data)
        console.log(data) 
      } 
        
    );
  },[userid]);


  const increment = () => {
    setitemsnumber(itemsnumber + 1)
  }

  const decrement = () => {
    setitemsnumber(itemsnumber - 1)

    if (itemsnumber === 0) {
      setitemsnumber(0)
    }
  }

  const postcart = () => {


    
    const cartinfo = {
      name: product.name,
      image: product.image,
      quantity: itemsnumber,
      price: product.price,
      subtotal: itemsnumber * product.price,
      id: Math.floor(Math.random() * 3000)
    }

  



    const updateuserinfo = {
      username: user.username,
      email: user.email,
      password: user.password,
      cart: [...user.cart, cartinfo],
      order: []


    }

    console.log(user.username)

    if (itemsnumber === 0) {
      alert("Put a valid quantity of items")
    } else {
      
    fetch(`https://lillies-food-app-backend.herokuapp.com/users/${userid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateuserinfo),
    })
      
      
    setadd(true)
    }





    
  }
  
  return (
    <div className=' flex flex-col justify-center items-center fixed top-0 right-0 z-10 addcart'>
      <div className=' blur z-20'></div>
      <div className='bg-white pt-20 flex flex-col  absolute  items-center z-30  top-0 right-0 product-info text-center '>
        <div onClick={() => {
          navigate("/dashboard")
          
        } } className=' flex gap-4 items-center absolute top-4 left-4 font-bold'>
          <FaAngleLeft  style={{    color: "#00302E"}} className='text-3xl' />
          <h1  style={{    color: "#00302E"}} className=' text-xl'>Go back</h1>
        </div>
        <div style={{backgroundImage: `url(${product.image})`, backgroundSize: "cover"}} className='md:w-40 md:h-40 w-40 h-40 rounded-full'></div>
        <h1 style={{    color: "#00302E"}} className='mt-5 font-bold text-sm md:text-xl '>{product.name}</h1>
        <h5 className='  text-xs md:text-sm font-semibold w-4/5 mt-4'>{product.fulldescription}</h5>
        
        <div style={{    color: "#00302E"}} className='flex justify-between  w-2/4 md:text-xl text-sm font-bold mt-8 md:mt-8'>
          <h2>NGN {product.price}</h2>

          <h2>10 -20 mins </h2>

          <h2>12 pics left</h2>
          
        </div>

        <div className='flex items-center gap-4 mt-14 w-3/5'>
          <div  onClick={decrement} className="box md:text-2xl text-xl flex text-center items-center  justify-center font-bold cursor-pointer">-</div>
          <div className=' md:text-2xl text-xl flex items-center text-center  justify-center font-bold '>{ itemsnumber}</div>
          <div  onClick={increment} className="box items-center text-center text-xl md:text-2xl flex justify-center font-bold cursor-pointer">+</div>
          <div onClick={postcart} className='addtocart ml-auto flex justify-center items-center font-bold text-white  text-xs md:text-xl cursor-pointer'>{ add ? "Added" : "Add to cart"}</div>
        </div>
         </div>
    </div>
  )
}

export default Addtocart