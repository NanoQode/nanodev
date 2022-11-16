import React, { useState } from 'react'
import { line } from '../images'
import { motion } from "framer-motion";
import { PopupModal } from 'react-calendly'


const Design = ({ data, title, subtitle, btn, img, img2, reverse }) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <section className='bg-[#DA4B271F] pt-20'>
      <div className='container mx-auto'>
      <main className='w-full'> 
        <div className={btn ? 'flex flex-col space-y-3' : 'flex flex-col  '}>
          <h4>{subtitle ?? ''}</h4>
          <h3  className='nc-heading font-inter font-bold'>{title ?? ''}</h3>
          <img src={title ? line : ''} className='w-1/3 2xl:w-60' alt="" />
        </div>
        <section className='flex ml-0 mt-14 items-end  flex-col lg:flex-row w-full relative'>
          <div className={reverse ? 'absolute  -left-10 lg:left-2 xl:left-20 ' : 'hidden sm:flex sm:ml-0 w-[625px]'}>
            <motion.img

              initial={{
                x: !reverse ? -200 : 0,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{ ease: "easeOut", duration: 1.2 }} src={reverse ? img : img2} alt="" />
          </div>
          <div className='flex relative w-full  sm:w-1/2'>
          <div className='design-text w-full absolute rotate-90 -right-25 top-72'>
                <h3 className='text-white font-bold font-inter uppercase '>Design</h3>
              </div>
            <div className='mt-4 pb-10 mb-7 sm:mt-0 sm:-ml-24  bg-[#E9E9E9] w-[524px] h-max flex items-center flex-col space-y-4 p-6 relative z-30'>
            
              {data.map((item) =>
                <div key={item.id}
                  className='m-4 bg-white p-4 flex  steps-outer items-center space-x-5 hover:bg-[#BAE3E9] duration-150 transition-all hover:shadow-xl hover:scale-105 ease-out'>
                  <img src={item.img} alt="" />
                  <div className='flex flex-col space-y-2'>
                    <h2 className='font-bold font-inter text-nc-black'>{item.title}</h2>
                    <p className='text-sm font-inter font-normal text-nc-black'>
                      {item.body}
                    </p>
                  </div>

                </div>
              )}
              {btn &&
                <button onClick={() => setOpenModal(true)} className='my-5 bg-[#5AA6B1] text-white py-2 px-3 sm:text-lg sm:px-7 -ml-32 text-sm'>
                  BOOK A FREE CONSULT
                </button>}
            </div>
            <motion.img

              initial={{
                x: reverse ? 200 : 0,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{ ease: "easeOut", duration: 1.2 }}
              src={reverse ? img2 : img} className=
              {btn ? 'absolute hidden sm:flex left-28 sm:left-52 z-10' : 'absolute  left-28 sm:left-52 -z-10'} alt="" />
          </div>

        </section>
      </main>
      <PopupModal
        url="https://calendly.com/nanoqode/schedule-a-call"
        onModalClose={() => setOpenModal(false)}
        open={openModal}
        rootElement={document.getElementById('root')}
      />
      </div>
    </section>
  )
}

export default Design
