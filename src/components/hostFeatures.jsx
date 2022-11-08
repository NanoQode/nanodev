import React from 'react'
import { hostDataCard } from '../constant'
import { FEATURES, line } from '../images'
import HostCard from './hostCard'

const HostFeatures = () => {
  return (
      <div className='bg-[#E9E9E9] w-full h-[1100px] relative'>
          <div className='flex flex-col items-center justify-center p-5'>
              <h3 className='text-4xl font-bold'>Features</h3>
              <img src={line} className='w-3/4 -ml-20' alt="" />
          </div>
          <div className='absolute  left-0 top-[10rem]'>
              <img src={FEATURES} alt="" />
          </div>
          <section>
              <div className='grid grid-cols-2 gap-4 bg-[#E9E9E9] w-[80%] h-max mx-auto p-10 '>
                  {hostDataCard.map((item) =>
                      <HostCard key={item.id} data={item} />
                  )}
              </div>
          </section>
      </div>
  )
}

export default HostFeatures
