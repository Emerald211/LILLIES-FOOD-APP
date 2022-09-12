import React from 'react'
import { useNavigate } from 'react-router-dom'
import smile from './images/happiness.png'

function Wrongpath() {

  let navigate = useNavigate()
  return (
      <div className='flex flex-col h-screen items-center justify-center'>
      <img src={smile} alt="" />  
      <h1 className='text-3xl mt-2'>This Path doesnt exist</h1>

      <div>
        Kindly Go back to our Site
      </div>

      <button onClick={() => navigate("/")} className='w-52 h-16 bg-green-900 text-white rounded-md mt-12'>Click here</button>
    </div>
  )
}

export default Wrongpath