import React from 'react'
import { line } from '../images'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
const Featured = ({title,data,color,color2}) => {
   

  return (
      <div style={{
          background:color
      }}  className=' w-full h-[362px] p-5 flex items-center justify-center space-y-5 flex-col'>
          <div className='flex flex-col items-center justify-center p-5'>
              <h3 className='text-4xl font-bold'>{title}</h3>
              <img src={line} className='w-3/4 -ml-20' alt="" />
          </div>
          <Swiper
              style={{
                  background:color2
              }}
              className='w-full  rounded-full p-2 h-[50px] sm:h-[80px]'
              //   spaceBetween={15}
              slidesPerView={4}
              navigation
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              // modules={[Autoplay]}
              modules={[Navigation]}
              // autoplay={{
              //     delay: 3000,
              //     disableOnInteraction: false,
              // }}
              // loop={true}
              speed={2000}>
              {data.map((item) => (
                  <SwiperSlide className='flex items-center justify-center'>
                      <img src={item.img} className='w-16' />
                  </SwiperSlide>
              ))}
          </Swiper>
          {/* <div className='bg-white p-5 rounded-full flex items-center space-x-3'>
              <img src={arrow} alt="" />
              <div className='flex space-x-4 items-center overflow-x-scroll lg:overflow-hidden'>
                  <img src={Rails} alt="" />
                  <img src={asp} alt="" />
                  <img src={Codeigniter} alt="" />
                  <img src={JS} alt="" />
                  <img src={Laravel} alt="" />
                  <img src={Mysql} alt="" />
                  <img src={PHP} alt="" />
              </div>
              <img src={arrow2} alt="" />


          </div> */}
    </div>
  )
}

export default Featured
