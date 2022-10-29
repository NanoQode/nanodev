import React from 'react'
import { arrow, arrow2, card, card2, card3, card4, DEVELOPMENT, line } from '../images'

const Affordable = () => {
  return (
    <div className='relative'>
      <div className='flex flex-col items-center justify-center p-5'>
        <h3 className='text-4xl font-bold'>Affordable Services</h3>
        <img src={line} className='w-3/4 -ml-20' alt="" />
      </div>
      <section className=' flex items-center'>
        <div>
          <img src={DEVELOPMENT} alt="" />
        </div>
        <div className='flex items-center'>
          <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
            <img src={arrow} alt="" />
          </div>
          <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
            <img src={arrow2} alt="" />
          </div>
        </div>
        <div className=' -mt-32 flex items-center space-x-2 '>
          <img src={card} className='p-1 ' alt="" />
          <img src={card2} className='p-1 ' alt="" />
          <img src={card3} className='p-1 ' alt="" />
          <img src={card4} className='p-1 ' alt="" />
        </div>
   </section>
    </div>
  )
}

export default Affordable
