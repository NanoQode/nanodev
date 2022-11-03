import React from 'react'
import { line } from '../images'

const Design = ({ data, title, subtitle, btn, img, img2 ,reverse}) => {

  return (
    <div className='bg-[#DA4B271F] p-4'>

      <div className={btn ? 'flex flex-col space-y-3 p-5' : 'flex flex-col items-center justify-center p-5'}>
        <h4>{subtitle ?? ''}</h4>
        <h3 className='text-4xl font-bold'>{title ?? ''}</h3>
        <img src={title ? line : ''} className='w-1/3 -ml-12 2xl:w-60' alt="" />
      </div>
      <section className= 'flex my-20 items-center justify-center flex-col lg:flex-row mx-auto relative '>
        <div className={reverse ? 'absolute left-28' :' sm:ml-20'}>
          <img src={reverse?img:img2} alt="" />
        </div>
        <div className='flex relative w-full  sm:w-1/2'>
          <div className='mt-4 sm:mt-0 sm:-ml-32 bg-[#E9E9E9] w-[424px] h-max flex items-center flex-col space-y-4 p-6 relative z-30'>
            {data.map((item) =>
              <div key={item.id}
                className='m-4 bg-white p-4 flex items-center space-x-5 hover:bg-[#BAE3E9] duration-150 transition-all hover:shadow-xl hover:scale-105 ease-out rounded-md'>
                <img src={item.img} alt="" />
                <div className='flex flex-col space-y-2'>
                  <h2 className='font-bold '>{item.title}</h2>
                  <p className='text-sm'>
                    {item.body}
                  </p>
                </div>

              </div>
            )}
            {btn &&
              <button className='my-5 bg-[#5AA6B1] text-white py-2 px-7 -ml-32'>
                BOOK A FREE CONSULT
              </button>}
          </div>
          <img src={reverse?img2:img} className=
            {btn ? 'absolute left-28 sm:left-52 z-10' : 'absolute left-28 sm:left-52 -z-10'} alt="" />
        </div>

      </section>

    </div>
  )
}

export default Design
