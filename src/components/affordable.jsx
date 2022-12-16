import React, { useRef } from 'react'
import { priceData } from '../constant'
import { arrow, arrow2, check11, DEVELOPMENT, line } from '../images'
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay, Navigation } from 'swiper';
const Affordable = () => {
  const newRef = useRef()

  const handleMoveNext = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 300
  }
  const handleMovePrev = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 300
  }

  return (
    <section className='relative affordable-services py-16'>
      <div className='hidden sm:flex top-1 lg:top-1 z-20 absolute'>
        <img src={DEVELOPMENT} alt="" />
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='font-bold text-hd font-inter'>Affordable Services</h3>
          <img src={line} className='w-1/3 -ml-12 2xl:w-60' alt="" />
        </div>
        <div className='mt-10 lg:mt-25 mb-0 flex items-center justify-center sm:justify-start relative'>
          <div className='hidden md:flex items-center space-x-4 relative ml-32 z-30' >
            <div onClick={handleMovePrev} className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
              <img className='cursor-pointer' src={arrow} alt="" />
            </div>
            <div onClick={handleMoveNext} className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
              <img className='cursor-pointer' src={arrow2} alt="" />
            </div>
          </div>
          <div className='mt-0  w-[795px] mx-auto'>
            <Swiper
              className='w-full cs-slide-width'
              spaceBetween={13}
              slidesPerView={4}
              navigation={false}
              speed={2000}> 
              {priceData.map((item) =>
                <SwiperSlide className='mb-5'>
                  <div key={item.id} className=' z-20 relative'>
                    <img src={item.img} className='w-60' alt="" />
                    <div className='absolute  cs-slide-outer-layer'>
                      <h1 className='text-center text-white relative'> <span className='cs-dollar'>$</span>
                        {item.title}<small className='text-small'>/mo</small></h1>
                      <div style={{
                        color: item.color
                      }} className={` bg-white  py-1 px-5 w-max rounded-r-xl rounded-badge`}>
                        <h3 className='text-center'>{item.subTitle}</h3>
                      </div>
                      <h4 className='font-light text-sm mb-2 ml-6 capitalize text-white font-inter starting-text'>starting from</h4>
                      {item.content.map((res) =>
                        <div className='flex flex-col space-y-2 text-white cs-info-text'>

                          <p className='flex items-center space-x-2'>
                            <img src={check11} alt="" />{res}</p>
                        </div>
                      )}
                      <button style={{
                        color: item.color,
                        border: `1px solid ${item.color}`,
                      }} className={`-bottom-[5rem] font-semibold left-14 rounded-full shadow-sm capitalize py-2 px-6 bg-white w-max border-2 absolute cs-learn-more-btn`}>learn more</button>
                    </div>
                  </div>
                </SwiperSlide>
              )} 
            </Swiper>
          </div> 
        </div>
      </div> 
    </section>
  )
}

export default Affordable
