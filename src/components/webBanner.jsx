import React, { useState } from 'react'
import { icon, star, star2, webdev } from '../images'
import { motion } from 'framer-motion'
import { PopupModal } from 'react-calendly'

const WebBanner = ({ title, title2, body, title3, img, data, btn ,vid}) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <section className="flex flex-col justify-between sm:flex-row pt-20 pb-20">
      <div className='container mx-auto'>
        <div className='row flex'>
      <div className="w-full md:w-1/2 ">
        <div className="text-[#333333]">
          <div className="mt-10 w-[200px] h-1 bg-[#DA452C] mb-4" />
          <h2 className="text-fs60 font-bold font-inter">
            <span className="text-[#DA452C]">{title}</span>
            {title2}
          </h2>
          <h4 className="text-fs30 font-inter font-normal mt-3 mb-4">{body} 
          <span className='sub-title text-[#5AA6B1] block font-medium'>{title3}</span></h4>
        </div>

        <div className="flex flex-col items-start justify-start w-full space-y-3">
          {data?.map((item) => (
            <div
              key={item.id}
              className="  rounded-full items-center bg-[#EBF4F6] px-4 sm:px-7 py-1 flex w-[411px]  h-[44px] 
              text-fs18 font-inter font-normal"
            >
              <img src={icon} className="mr-3" alt="" />
              {item.title}
            </div>
          ))}
        </div>

        {btn ? (
          <>
            <div className="flex items-start mt-15 space-x-4 ">
              <button className="btn btn-blue font-normal mt-5 w-253">
                GET STARTED
              </button>
              <button className="btn btn-outline font-normal mt-5">
                SPEAK WITH AN EXPERT
              </button>
            </div>
            <div className="bg-[#DA452C] flex items-center space-x-1 text-white w-max px-4 mx-6  text-xl sm:ml-14 rounded my-10">
              <h2>Excellent</h2>

              <aside className="items-center hidden sm:flex mt-3">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </aside>
              <p>5 star reviews on</p>
              <img src={star2} alt="" />
              <p>Trustpilot</p>
            </div>
          </>
        ) : (
          <div className="flex items-center mt-20 space-x-2">
            <button
              onClick={() => setOpenModal(true)}
              className="text-white bg-[#DA452C] rounded-lg btn btn-orange"
            >
              BOOK A FREE CONSULT
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 ">
        {vid ?
          <motion.video initial={{
            x: 200,
            opacity: 0,
          }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ ease: 'easeOut', duration: 1.2 }} src={vid} className='mr-10' autoPlay loop muted />
          :
          <motion.img initial={{
            x: 200,
            opacity: 0,
          }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ ease: 'easeOut', duration: 1.2 }} src={img} className='w-[90%]' alt="" />
        }
      </div>
      <PopupModal
        url="https://calendly.com/nanoqode/schedule-a-call"
        onModalClose={() => setOpenModal(false)}
        open={openModal}
        rootElement={document.getElementById('root')}
      /></div></div>
    </section>
  )
}

export default WebBanner
