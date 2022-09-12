import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Foods() {

  const [menu, setmenu] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:9000/menu`)
    .then((res) => res.json())
    .then((data) => {
    setmenu(data)
  })
  }, [])

  let navigate = useNavigate()






  
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8  mt-10'>
 
      {menu.map((eachItem) => {
        return (
          <div onClick={() => navigate(`/dashboard/product/${eachItem.id}`) } className=' flex p-5 rounded-md  flex-col items-center text-center hover:bg-slate-100'>
          <div style={{backgroundImage: `url(${eachItem.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}} className=' md-w-52 md-h-52 w-32 h-32 rounded-full'></div>
          <h1 className=' mt-3 text-lg font-bold'>{eachItem.name}</h1>
          <p className='w-44 text-xs font-semibold'>{eachItem.description}</p>
            <div className=' flex gap-10 mt-5'>
              <h5 className=' font-bold'>N{eachItem.price}</h5>
              
              <button style={{color: "#00EDDF"}} className=' ml-auto font-bold'>Add to cart</button>
         </div>
         </div>
       )
      })}
    </div>
  )
}

export default Foods