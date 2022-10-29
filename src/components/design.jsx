import React from 'react'
import { DESIGN, designicon, designicon2, designicon3, designimg, line } from '../images'

const Design = () => {
  const data = [
    {
      id: 1,
      title: 'Defining Your Customers',
      body: 'Understanding your customers source is key, we research the cost of acquisition and the best way to convert, all while prioritizing your vision and business needs.',
      img: designicon,
      color: 'white'
    },
    {
      id: 2,
      title: 'Multi-Level Engagement',
      body: 'We analyze your digital infrastructure and create multiple entry points to help your business grow organically, with almost immediate results and a long term growth strategy in place.',
      img: designicon2,
      color: '#BAE3E9'

    },
    {
      id: 3,
      title: 'Driving Results Home',
      body: 'Coupled with a well presented online platform our intent based customer targeting on search, display and social media gets you leads and conversions.',
      img: designicon3,
      color: 'white'

    },
  ]
  return (
    <div className='bg-[#DA4B271F] p-4'>
      <div className='flex flex-col items-center justify-center p-5'>
        <h3 className='text-4xl font-bold'>The BIG Picture, in 3 Steps</h3>
        <img src={line} className='w-1/3 -ml-12 2xl:w-60' alt="" />
      </div>
      <section className='flex my-20 items-center justify-center flex-col lg:flex-row mx-auto '>
        <div className=' sm:ml-20'>

          <img src={designimg} alt="" />
        </div>
        

        <div className='flex relative w-full sm:w-1/2'>

        <div className='mt-4 sm:mt-0 sm:-ml-32 bg-[#E9E9E9] w-[424px] h-max flex items-center flex-col space-y-4 p-6'>
            {data.map((item) =>
              <div key={item.id}
                style={{
                  background: item.color
                }} className='m-4 p-4 flex items-center space-x-5'>
                <img src={item.img} alt="" />
                <div className='flex flex-col space-y-2'>
                  <h2 className='font-bold '>{item.title}</h2>
                  <p className='text-sm'>
                    {item.body}
                  </p>
                </div>
              </div>
            )}
         
          </div>
          <img src={DESIGN} className='absolute left-28 sm:left-52 -z-10' alt="" />
        </div>
      
      </section>

    </div>
  )
}

export default Design
