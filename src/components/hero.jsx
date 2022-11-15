import React from 'react'
import { arrow, arrow2, aws, bing, cfib, godaddy, line, mailchimp, mailgun, meta, shopify, zoho } from '../images'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Title from './title';
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
    <section className='flex items-center justify-center flex-col bg-[#EBF4F6] w-full pt-12 pb-20'>
      <div className='container'>
      <Title title={'Our Partners in Your Success'}/>
      <div className='logo-slider  bg-white rounded-full  mt-12'>
      <Swiper
        className='w-full   h-[50px] sm:h-[80px]'
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
      </div>
      </div>
    </section>
  )
}

export default Hero
