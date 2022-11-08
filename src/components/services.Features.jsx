import React from 'react'
import { servicesDataCard } from '../constant'
import { FEATURES, line } from '../images'
import ServiceCard from './serviceCard'

const ServicesFeatures = () => {
  return (
      <div className='bg-[#DA4B271F] w-full h-[1350px] relative'>
          <div className='flex flex-col items-center justify-center p-5'>
              <h3 className='text-4xl font-bold'>Features</h3>
              <img src={line} className='w-3/4 -ml-20' alt="" />
          </div>
          <div className='absolute  left-0 top-[10rem]'>
              <img src={FEATURES} alt="" />
          </div>
          <section>
              <div className='grid grid-cols-2 gap-4 bg-[#E9E9E9] w-[80%] h-max mx-auto p-10 '>
                  {servicesDataCard.map((item) =>
                  <ServiceCard key={item.id} data={item} />
                  )}
              </div>
        </section>
    </div>
  )
}

export default ServicesFeatures
