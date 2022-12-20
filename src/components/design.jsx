import React, { useState } from 'react';
import { line } from '../images';
import { motion } from "framer-motion";
import { PopupModal } from 'react-calendly';
 
const Design = ({ data, title, subtitle, btn, img, img2, reverse }) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <section className={reverse ? 'bg-[#DA4B271F] pt-0 py-20' : 'bg-[#DA4B271F] pt-16'}>
      <div className='container mx-auto'>
        <div className='w-full'>
        {title ?
          <div className={btn ? 'flex flex-col space-y-3' : 'flex flex-col  '}>
            <h4 className='font-semibold font-inter text-fs20 mb-4'>{subtitle ?? ''}</h4>
            <h3 className='text-fs48 font-bold font-inter max-w-[746px]  mlg:text-fs36'>{title ?? ''}</h3>
            <img src={title ? line : ''} className='w-1/3 2xl:w-60' alt="" />
          </div>
: <div className='-mt-14'></div>}
          <div className={reverse ? 'inline-flex ml-0 mt-14 items-start w-full relative flex-row-reverse flex-wrap' : 'inline-flex ml-0 mt-14 items-start flex-wrap lg:flex-row w-full relative'}>
            <div className={reverse ? 'hidden sm:flex sm:ml-0 w-[625px] mxl:w-[570px] mt-16 mlg:w-1/2 mmd:w-full msm:hidden' : 'mmd:w-full hidden msm:hidden sm:flex sm:ml-0 w-[625px] mxl:w-[570px] mt-16 mlg:w-1/2'}>
              <motion.img

                initial={{
                  x: !reverse ? 0 : 0,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{ ease: "easeOut", duration: 1.2 }} src={reverse ? img2 : img2} alt="" />
            </div>
            <div className='flex relative w-full  sm:w-1/2  mlg:w-1/2 mmd:w-full'>
              <div className='design-text w-full absolute rotate-90 -right-25 top-72 step-bg-text msm:hidden'>
                <h3 className='text-white font-bold font-inter uppercase mlg:hidden'>Design</h3>
              </div>
              <div className={reverse ? 'mt-4 pb-10 mb-7 sm:mt-0 ml-auto  bg-[#E9E9E9] w-[524px] h-max flex items-start flex-col space-y-4 p-6 relative z-30 mxss:p-3' :  'mxss:py-3 mxss:px-0 mt-4 pb-10 mb-7 sm:mt-0   bg-[#E9E9E9] w-[524px] h-max flex items-start flex-col space-y-4 p-6 relative z-30'} >

                {data.map((item) =>
                  <div key={item.id}
                    className='ml-4 mr-4 bg-white p-4 flex  steps-outer items-center space-x-5 hover:bg-[#BAE3E9] duration-150 transition-all hover:shadow-xl hover:scale-105 ease-out'>
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
                  <button onClick={() => setOpenModal(true)} className='btn green-btn py-2 px-8 text-white mt-12 ml-4 mt-cs-44'>
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
                src={reverse ? img : img} className=
                {reverse ? 'absolute hidden sm:flex left-28 sm:left-12 z-10' : 'absolute right-14 '} alt="" />
            </div> 
          </div>
        </div>
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
