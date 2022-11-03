import React from 'react'
const Card = ({ title, img, color }) => {
  return (
    <div

      style={{
        background: color,
      }}
      className={`w-[300px] p-6 flex
 m-2 flex-col space-y-4 items-center h-[232px] hover:scale-110 duration-150 ease-out transistion-all justify-center cursor-pointer`} >
      <div className='bg-white h-[100px] rounded-full w-[100px] flex items-center justify-center'>
        <img src={img} alt="" />
      </div>
      <h2 className='text-white text-xl'>{title}</h2>

    </div>
  )
}

export default Card
