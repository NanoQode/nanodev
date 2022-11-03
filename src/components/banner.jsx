import React from 'react'
import { banner, boy, bulb, chart, divider, eng, loading, peeps, scrolll } from '../images'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
const Banner = () => {
const data = [
    {
      id: 1,
      img: banner,
    },
    {
      id: 2,
      img: boy,
    },
    {
      id: 3,
      img: bulb,
    },
    {
      id: 4,
      img: peeps,
    },
    {
      id: 5,
      img: divider,
    },
    {
      id: 6,
      img: chart,
    },
    {
      id: 7,
      img: eng,
    },
  ]

  return (
    <div className=' flex flex-col sm:flex-row justify-between '>
      <section className='w-full lg:w-3/4 xl:w-1/2 2xl:w-1/3 2xl:mx-auto'>
       
        <div className='text-[#333333] p-10'>
          <div className='mt-10 w-[200px] h-1 bg-[#DA452C] mb-4' />
          <h2 className=' text-4xl lg:text-6xl  font-bold '>
            Grow your business,
            without Limits!
          </h2>
          <h4 className='text-lg lg:text-2xl'>
            Connect with our experts to start
            the evalution today.
          </h4>
        </div>

        <div className='flex items-center space-x-2 ml-10'>
          <button className='text-white bg-[#5AA6B1] text-sm rounded-lg p-2 lg:p-4 '>BOOK A FREE CONSULT</button>
          <button className='text-[#DA452C] border-[#DA452C] border-2  rounded-lg bg-transparent p-2 lg:p-4 text-sm'>BOOK A FREE CONSULT</button>
        </div>
        <div className='ml-1 -mt-20'>
          <img src={scrolll} className='' alt="" />
        </div>
      </section>
      <section className='w-full lg:w-3/4 xl:w-1/2 flex items-center mb-7 justify-center flex-col lg:-mt-20 xl:-mt-3 2xl:w-1/3 2xl:mx-auto'>
        <Swiper
          className='w-full'
          //   spaceBetween={15}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay,Pagination]}
          pagination={{ clickable: true }}
          autoplay={{
              delay: 3000,
              disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}>
          {data.map((item) => (
            <SwiperSlide className='flex items-center justify-center'>
              <img src={item.img} className='' />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <img src={loading} alt="" /> */}

      </section>
    </div>
  )
}

export default Banner
