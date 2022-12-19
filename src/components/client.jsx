import React from 'react'
import { line, love } from '../images'
import Google from './google'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const Client = () => {
  return (
    <section className='bg-[#EBF4F6] w-full h-max py-16'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-center  flex-col'>
          <h3 className='font-bold font-inter text-hd mlg:text-fs36'>Why Our Clients <span className='inline-block'><img src={love} alt="" /></span> us</h3> 
          <img src={line} alt="" className='msm:w-[50%]'/>
        </div> 
        <div className='mt-20 mmd:mt-16 msm:mt-12 flex items-center flex-col justify-center lg:flex-row lg:space-x-5'>
          <Swiper 
              className='w-full   '
              spaceBetween={15} 
              breakpoints={{
                0: { 
                    slidesPerView: 1,
                },
                768: { 
                    slidesPerView: 2,
                },
                992: { 
                    slidesPerView: 3,
                }, 
                }}
              centeredSlides={false}
              navigation
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
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
                </SwiperSlide>  
                <SwiperSlide className='flex items-center justify-center'>
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
