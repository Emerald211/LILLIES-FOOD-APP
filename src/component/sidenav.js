import React from 'react'
import logo from './images/logo.png'
import './sidenav.css'
import { FaHome, FaUser, FaShoppingCart, FaShoppingBag } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Sidenav({ State }) { 
  
  let navigate = useNavigate()

  return (
    <div className='dashboard-menu'>
       <div className='flex flex-col  justify-center  fixed top-5 left-8  list-none gap'>
          <div className='logo-head flex items-center gap-3'>
              <img className='' src={logo} alt="" />
              <h1 className='text-3xl'>Lillies</h1>
          </div>

          <div className='flex flex-col gap-7 mt-28'>
          <li> <FaHome className='mr-4' /> Home</li>
          <li onClick={() => navigate("/dashboard/yourprofile")} > <FaUser className='mr-4' />  My Profile</li>
          <li onClick={() => navigate("/dashboard/yourorders")}> <FaShoppingBag className='mr-4' /> Orders <div style={{ backgroundColor: "#06E775" }} className="w-6 h-6 ml-3 text-black p-1 text-xs   text-center rounded-sm font-bold flex items-center justify-center">{ State.order?.length}</div></li>
          <li onClick={() => navigate("/dashboard/cart")} > <FaShoppingCart className='mr-4' /> Your Carts <div style={{ backgroundColor: "#F3C294" }} className="w-6 h-6 ml-3 text-black p-1 text-xs text-center rounded-sm font-bold flex items-center justify-center">{ State.cart?.length}</div></li>
          </div>
          
    </div>
     </div>
  )
}

export default Sidenav