import React from 'react'
import { arrow, arrow2, line, PACKAGES, pricepack, pricepack3, pricepack4, pricepack5 } from '../images'

const Packages2 = ({img,img2,img3,img4,big,color}) => {
  return (
    
      <div
          style={{
          background:color || 'white'
      }}
          className='relative h-[800px]'>
          <div className='flex flex-col items-center justify-center p-5'>
              <h3 className='text-4xl font-bold'>Pricing</h3>
              <img src={line} className='w-3/4 -ml-20' alt="" />
          </div>
          <section className='mt-10 lg:mt-40 mb-20 flex items-center justify-center sm:justify-start relative'>
              <div className={big ? 'hidden sm:flex -top-10 z-20 relative' : 'hidden sm:flex -top-60 z-20 absolute'}>
                  <img src={img} alt="" className='w-[90%]'/>
              </div>
              <div className='hidden md:flex items-center space-x-4 relative ml-20'>
                  <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
                      <img src={arrow} alt="" />
                  </div>
                  <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
                      <img src={arrow2} alt="" />
                  </div>
              </div>
              <div className='-mt-40 ml-32 flex items-center space-x-3'>
                  <img src={img2} className='w-3/4' alt="" />
                  <img src={img3} className='w-3/4' alt="" />
                  <img src={img4} className='w-3/4' alt="" />
              </div>
              {/* <div className=' lg:-mt-32 flex items-center space-x-1 flex-col md:grid justify-center md:grid-cols-2 lg:grid-cols-4 ml-10 2xl:mx-auto '>
                    <img src={price} className='w-full p-1 hover:scale-105 duration-150 ease-out transition-all' alt="" />
                </div> */}
          </section>
      </div>
  )
}

export default Packages2
