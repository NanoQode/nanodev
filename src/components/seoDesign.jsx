import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
import { line, shadow, slide2, slide3, slide4 } from '../images';

const SeoDesign = ({ data, title, img, reverse }) => {
    const slidedata = [
        {
            id: 1,
            img: slide2,
        },
        {
            id: 2,
            img: slide3,
        },
        {
            id: 3,
            img: slide4,
        },
        {
            id: 4,
            img: shadow,
        },
    ]
    return (
        <section className='bg-[#DA4B271F] pt-16'>
            <div className='container mx-auto'>
            <main className='mx-auto'>
                <div className='flex flex-col space-y-3 justify-center items-center'>
                    <h3 className='font-bold font-inter text-hd mlg:text-fs36'>{title ?? ''}</h3>
                    <img src={title ? line : ''} className='w-1/3 2xl:w-60' alt="" />
                </div>
                <div className='flex ml-0 mt-14 items-start w-full flex-wrap relative'>
                    <div className='flex w-full  lg:w-1/2 mlg:w-1/2 mmd:w-full'>
                        <div className='seo-text  absolute mlg:hidden'>
                            <h3 className='text-white font-bold font-inter uppercase '>SEO</h3>
                        </div>
                        <div className='mt-4 pb-10 pt-10 mb-7 sm:mt-0 ml-auto  bg-[#E9E9E9] w-[524px] h-max mmd:w-full mmd:mb-0 flex   flex-col space-y-4 p-6 relative z-30 mxss:py-3  mxss:px-0 ' >
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
                        </div>
                    </div>
                    <div className='hidden sm:flex sm:ml-0 w-[625px] mxl:w-[500px] max-w-[50%] mmd:max-w-[100%] mmd:w-full  mt-16 mmd:w-100 mmd:mt-0'>
                        <Swiper
                            className='hidden sm:flex w-full bg-white p-2 h-[400px] mt-28 seo-design-swiper mmd:w-100 mmd:mt-0'
                            //   spaceBetween={15}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            speed={2000}>
                            {slidedata.map((item) => (
                                <SwiperSlide className='flex items-center justify-center'>
                                    <img src={item.img} className='' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </main>
        </div>
    </section>
    )
}



export default SeoDesign
