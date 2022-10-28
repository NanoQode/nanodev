import React from 'react'
const Card = ({title, img}) => {
  return (
      <div className='w-[232px] h-[232px] bg-[#5AA6B1] p-6 flex
 m-2 flex-col   space-y-4   items-center justify-center' >
          <div className='bg-white h-[100px] rounded-full w-[100px] flex items-center justify-center'>
              <img src={ img} alt="" />
          </div>
          <h2 className='text-white text-xl'>{title}</h2>
          
    </div>
  )
}

export default Card
