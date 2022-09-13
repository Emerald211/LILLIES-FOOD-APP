import React, { useState, useEffect } from 'react'
import Notification from './notification'
import Sidenav from './sidenav'
import './dashboard.css'
import Foods from './foods'
import { Outlet } from 'react-router-dom'






function Dashboard() {

  const [userdata, setuserdata] = useState([])
  const [date, setdate] = useState('')
 
  const userid = JSON.parse(localStorage.getItem("userid"))

  useEffect(() => {
    fetch(`https://lillies-food-app-backend.herokuapp.com/users/${userid}`)
      .then((res) => res.json())
      .then((data) => {
        setuserdata(data)

        const currentdate = new Date();

        if (currentdate.getHours() < 12) {
          setdate("Good Morning")
        } else if (currentdate.getHours() >= 12 && currentdate.getHours() < 18) {
        setdate("Good Afternoon")
      
        } else if (currentdate.getHours() >= 18) {
          setdate("Good Evening")
        }
      })
  }, [userdata, userid])





  return (
    <div className='flex dashboard'>
      <Sidenav State={userdata} />

      <div className='flex-col main'>
        <Notification State = {userdata} />
        <div className='px-8  text-2xl n-text'>
          <h1 className=' font-bold '>{date} { userdata.username}</h1>
        <h5 className='text-sm'>What are you Craving for today ?</h5>

      </div>
        <Foods />

        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard