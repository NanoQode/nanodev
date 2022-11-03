import React from 'react'
import { accl, bulb2, CREATIVE, line, menu, recycle, rise } from '../images'

const Creative = ({data,img,title,body,subtext,img2,call}) => {

  return (
      <div className=''>
          <section className='bg-[#DA4B271F] relative w-full h-[350px]'>
              <div className='absolute right-10 -top-12'>
                  <img src={img} alt="" />
              </div>
              <div className='flex flex-col pl-10 items-start'>
                  <p className='font-bold mt-20 ml-6'>{title??''}</p>
                  <div className='flex flex-col items-center justify-center p-5 w-[650px]'>
                      <h3 className='text-4xl font-bold'>
                      {body}
                      </h3>
                      <img src={line} className='w-3/4 -ml-20' alt="" />
                  </div>
                  <p className='ml-6 font-semibold text-[#333333]'>{subtext??''}</p>
           </div>
          </section>
          <section className='flex items-center  relative mx-10 my-10'>
              <div className='w-full lg:w-1/2 mt-10 flex flex-col space-y-6'>
                  {data.map((res) =>
                      <div className='flex items-center space-x-5 ' key={res.id}>
                          <div className='flex items-center justify-center rounded-full h-[92px] w-[92px] p-3 bg-[#5AA6B1]'>
                              <img src={res.img} className='w-3/4' alt="" />
                          </div>
                          <div className='flex flex-col'>
                              <h2 className='font-semibold '>{res.title}</h2>
                              <p className='my-1'>{res.body}</p>
                          </div>
                      </div>
                  )}
                  {call &&
                      <button className='my-5 bg-[#DA452C] w-max text-white py-2 px-7'>
                          SCHEDULE A FREE CALL
                      </button>}
        </div>
             
              <div className='w-full lg:w-1/2 absolute -top-32 -right-32'>
                  <img src={img2??''} className='w-3/4' alt="" />
              </div>
          </section>
    </div>
  )
}

export default Creative
