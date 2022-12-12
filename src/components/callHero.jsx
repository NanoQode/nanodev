import React from 'react'
import { bghero } from '../images'

const CallHero = () => {
  return (
      <section className='my-20'>
        <div className='container mx-auto'> 
          <div className='flex  flex-col pl-5 sm:items-center sm:flex-row sm:justify-between sm:py-5 sm:px-10 lg:py-10 lg:px-20 rounded' style={{
          backgroundImage: `url(${bghero})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '260px'
      }} >
              <aside className='w-full sm:w-3/4 lg:w-1/2  '>
                  <div className='w-[200px] h-1 bg-[#DA452C]' />
                  <h3 className='text-white text-fs32 font-inter font-bold mt-5 sm:text-xl'>
                      Convinced yet? Let's make something
                      great together.
                  </h3>
              </aside>
              <div className='w-1/4 flex justify-end'>
                  <a href="tel:+18003512961">
                      <button className='w-max btn btn-blue'>SCHEDULE A CALL</button>
                  </a>
              </div>
          </div>
          </div>
      </section>
  )
}

export default CallHero
