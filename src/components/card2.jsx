import React from 'react'
const Card2 = ({ title, img, body }) => {
  return (
    <div className={`w-[300px] mt-16 p-6 flex cs-card2  flex-col   bg-[#5AA6B1] items-center h-[276px]  duration-150 ease-out transistion-all justify-center cursor-pointer hover:bg-[#DA4B27]`} >
      <div className='nc-img-outer bg-white h-[50px] rounded-full p-3 w-[50px] flex items-center justify-center'>
        <img src={img} className='w-12' alt="" />
      </div>
      <h2 className='font-inter font-bold text-fs1925 text-[#E5F5FF]'>{title}</h2>
      <p className='text-white text-fs13 font-inter font-medium text-center mt-2'>{body}</p>
    </div>
  )
}

export default Card2
