import React from 'react'
const Card = ({ title, img,body }) => {
  return (
    <div className={`w-[300px] mt-16 p-6 flex flex-col bg-[#5AA6B1] items-center h-[232px] justify-center cursor-pointer hover:bg-[#DA4B27]`} >
      <div className='nc-img-outer bg-white h-[50px] rounded-full p-3 w-[50px] flex items-center justify-center'>
        <img src={img} className='w-12' alt="" />
      </div>
      <h2 className='nc-card-text'>{title}</h2>
      <p  className='text-white'>{body}</p>
    </div>
  )
}

export default Card
