import React from 'react'
import { line } from '../images'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Title from './title';
const Featured = ({title,data,color,color2,center}) => {
   

  return (
      <section style={{
          background:color
      }} className={center ? ' w-full min-h-[200px]  sm:min-h-[362px] flex items-center justify-center flex-col py-16' :' w-full h-[200px] sm:h-[362px]   flex items-center justify-center flex-col'}>
           <div className='container mx-auto'>
          <Title title={title} center={false} />
      <div className='logo-slider  bg-white rounded-full  mt-12' style={{
                  background:color2
              }}>
          <Swiper
              
              className='w-full  rounded-full p-2 h-[50px] sm:h-[80px]'
              //   spaceBetween={15}
              slidesPerView={5}
              navigation
            //   onSlideChange={() => console.log('slide change')}
            //   onSwiper={(swiper) => console.log(swiper)}
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
                      <img src={item.img}   />
                  </SwiperSlide>
              ))}
          </Swiper>
          </div>
    </div>
    </section>
  )
}

export default Featured
