import React, { useState, useEffect } from 'react'
import Notification from './notification'
import Sidenav from './sidenav'
import './dashboard.css'
import Foods from './foods'
import { Outlet } from 'react-router-dom'






function Dashboard() {

  const [userdata, setuserdata] = useState([])
 
  const userid = JSON.parse(localStorage.getItem("userid"))

  useEffect(() => {
    fetch(`http://localhost:9000/users/${userid}`)
      .then((res) => res.json())
      .then((data) => {
        setuserdata(data)
      })
  }, [userdata, userid])



  return (
    <div className='flex dashboard'>
      <Sidenav State={userdata} />

      <div className='flex-col main'>
        <Notification State = {userdata} />
        <div className='px-8  text-2xl n-text'>
        <h1 className=' font-bold '>Good Morning Emmanuel</h1>
        <h5 className='text-sm'>What are you Craving for today ?</h5>

      </div>
        <Foods />

        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard