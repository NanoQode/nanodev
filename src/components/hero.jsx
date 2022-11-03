import React from 'react'
import { arrow, arrow2, aws, bing, cfib, godaddy, line, mailchimp, mailgun, meta, shopify, zoho } from '../images'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
const Hero = () => {
  const data = [
    {
      id: 1,
      img: bing,
    },
    {
      id: 2,
      img: mailgun,
    },
    {
      id: 3,
      img: aws,
    },
    {
      id: 4,
      img: mailchimp,
    },
    {
      id: 5,
      img: zoho,
    },
    {
      id: 6,
      img: meta,
    },
    {
      id: 7,
      img: shopify,
    },
    {
      id: 8,
      img: cfib,
    },
    {
      id: 9,
      img: godaddy,
    },
  ]

  return (
    <div className='flex items-center justify-center flex-col bg-[#EBF4F6] w-full h-[362px] px-5 lg:px-10'>
      <div className='flex flex-col items-center justify-center p-5'>
        <h3 className='text-4xl font-bold'>Our Partners in Your Success</h3>
        <img src={line} className='w-3/4 -ml-20' alt="" />
      </div>
  
      <Swiper
        className='w-full bg-white rounded-full p-2 h-[50px] sm:h-[80px]'
        //   spaceBetween={15}
        slidesPerView={7}
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
                <img src={item.img} className='' />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className='bg-white p-5 rounded-full flex items-center space-x-3'>
        <img src={arrow} alt="" />
        <div className='flex space-x-4 items-center overflow-x-scroll'>
          <img src={bing} alt="" />
          <img src={mailgun} alt="" />
          <img src={aws} alt="" />
          <img src={mailchimp} alt="" />
          <img src={zoho} alt="" />
          <img src={meta} alt="" />
          <img src={shopify} alt="" />
          <img src={cfib} alt="" />
          <img src={godaddy} alt="" />
        </div>
        <img src={arrow2} alt="" />
      </div> */}
    </div>
  )
}

export default Hero
