import React from 'react'
import { arrow, arrow2, asp, Codeigniter, JS, Laravel, line, Mysql, PHP, Rails } from '../images'

const Featured = () => {
  return (
      <div className='bg-[#FBE9E5] w-full h-[362px] p-5 flex items-center justify-center space-y-5 flex-col'>
          <div className='flex flex-col items-center justify-center p-5'>
              <h3 className='text-4xl font-bold'>Our Partners in Your Success</h3>
              <img src={line} className='w-3/4 -ml-20' alt="" />
          </div>
          <div className='bg-white p-5 rounded-full flex items-center space-x-3'>
              <img src={arrow} alt="" />
              <div className='flex space-x-4 items-center overflow-x-scroll lg:overflow-hidden'>
                  <img src={Rails} alt="" />
                  <img src={asp} alt="" />
                  <img src={Codeigniter} alt="" />
                  <img src={JS} alt="" />
                  <img src={Laravel} alt="" />
                  <img src={Mysql} alt="" />
                  <img src={PHP} alt="" />
              </div>
              <img src={arrow2} alt="" />


          </div>
    </div>
  )
}

export default Featured
