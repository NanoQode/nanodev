import React from 'react'
import { arrow, arrow2, line, love } from '../images'
import Google from './google'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const Client = () => {
  return (
    <section className='bg-[#EBF4F6] w-full h-max   py-20'>
      <div className='container mx-auto'>
      <div className='flex items-center justify-center  flex-col'>
        <h3 className='font-bold font-inter text-hd'>Why Our Clients <span className='inline-block'><img src={love} alt="" /></span> us</h3>
        {/* <img src={love} alt="" /> */}
        <img src={line} alt="" />
      </div>
      {/* <div className='flex items-center space-x-2 absolute right-20 mt-3'>
        <aside className='bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center'>
          <img src={arrow} alt="" />
        </aside>
        <aside className='bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center'>
          <img src={arrow2} alt="" />
        </aside>
      </div> */}
      <div className='mt-20 flex items-center flex-col justify-center lg:flex-row lg:space-x-5'>
      <Swiper
              
              className='w-full   '
                spaceBetween={15}
              slidesPerView={3}
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
            
                       
                  <SwiperSlide className='flex items-center justify-center client-slides'>
                       <Google
          title={'Jerome Bell'}
          desc={'Marketing Coordinator'}
        />
                  </SwiperSlide>  
              <SwiperSlide className='flex items-center justify-center client-slides'>
            <Google 
              title={'Cody Fisher'}
              desc={'President of Sales'}
            />
            </SwiperSlide> 
            <SwiperSlide className='flex items-center justify-center client-slides'>
            <Google 
              title={'Robert Fox'}
              desc={'Web Designer'}
            />
            </SwiperSlide>  <SwiperSlide className='flex items-center justify-center'>
                       <Google
          title={'Jerome Bell'}
          desc={'Marketing Coordinator'}
        />
                  </SwiperSlide>  
              <SwiperSlide className='flex items-center justify-center client-slides'>
            <Google 
              title={'Cody Fisher'}
              desc={'President of Sales'}
            />
            </SwiperSlide> 
            <SwiperSlide className='flex items-center justify-center client-slides'>
            <Google 
              title={'Robert Fox'}
              desc={'Web Designer'}
            />
            </SwiperSlide> 
          </Swiper>
      </div>
      <div className='flex items-center justify-center mt-20'>
        <button className='bg-[#5AA6B1] py-2 btn btn-blue'>More Details</button>
      </div>
      </div>
    </section>
  )
}

export default Client
