import React from 'react'
import { badge, down, icon } from '../images'
import { motion } from "framer-motion";


const WebBanner2 = ({ title,title3, title2, body, img }) => {
  return (
      <div className=' flex flex-col sm:flex-row justify-between '>
          <section className='w-full lg:w-3/4 xl:w-1/2 2xl:w-1/3 2xl:mx-auto'>

              <div className='text-[#333333] p-8'>
                  <div className='mt-10 w-[200px] h-1 bg-[#DA452C] mb-4' />
                  <h2 className=' text-4xl lg:text-6xl  font-bold '>
                      {title3}
                      <span className='mx-2 text-[#DA452C]'>{title}</span>
                      {title2}
                  </h2>
                  <h4 className='text-[#5AA6B1] my-5 text-lg lg:text-2xl'>
                      {body}
                  </h4>

                  <div className='flex flex-col h-maxbg-transparent w-[304px] border-[#DA452C] border-[1px] mt-20 mb-10 p-5 rounded-full '>
                      <div className='flex items-center justify-between'>
                          <h4 className='text-sm font-bold'>website</h4>
                          <img src={down} alt="" />
                      </div>
                      <div className='w-full mt-2 h-0.5 bg-[#333333]/40'/>
                  </div>
                  <button className=' border-2 text-white bg-[#5AA6B1] my-5 w-[100px]  rounded-lg p-2 lg:p-4 text-sm'>NEXT</button>
              </div>


          </section>
          <section className='w-full lg:w-3/4 xl:w-1/2 flex items-center mb-7 justify-center flex-col lg:-mt-20 xl:-mt-3 2xl:w-1/3 2xl:mx-auto'>
              <img
                  src={img} className='w-[90%]' alt="" />
              <img src={badge} className='-ml-[30rem]' alt="" />

          </section>
      </div>
  )
}

export default WebBanner2
