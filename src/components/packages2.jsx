import React from 'react'
import { arrow, arrow2, line } from '../images'
import { seoPackage } from '../constant'
import { Swiper, SwiperSlide } from 'swiper/react';
const Packages2 = ({ img, img2, img3, img4, big, color }) => {
    return (

        <section
            style={{
                background: color || 'white'
            }}
            className='pricing-sec relative h-max  py-16'>
            <div className='flex flex-col items-center justify-center p-5 mb-10'>
                <h3 className='font-bold font-inter text-hd'>Pricing</h3>
                <img src={line} className='w-60' alt="" />
            </div>
            <div className='mt-10 lg:mt-16 mb-20 flex items-center justify-center sm:justify-start relative'>
                <div className={big ? 'hidden sm:flex top-10 z-20 relative' : 'hidden sm:flex -top-20 z-20 absolute'}>
                    <img src={img} alt="" className='w-[90%]' />
                </div>
                <div className='container mx-auto flex items-center'>
                    <div className='hidden md:flex items-center space-x-2 relative ml-16'>
                        <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
                            <img src={arrow} alt="" />
                        </div>
                        <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
                            <img src={arrow2} alt="" />
                        </div>
                    </div>
                    <div className='sm:mt-20 w-[1000px] justify-center ml-auto flex items-center space-x-3 flex-col md:flex-row lg:mt-0'>
                        <Swiper
                            className='packages-slider seo-packages'
                            spaceBetween={40}
                            slidesPerView={3}
                            speed={0}>

                            {seoPackage.map((item) =>
                                <SwiperSlide className=''>
                                    <div key={item.id} className=' z-20 relative cs-packages '>
                                        <img src={item.img} className="bg-img" />
                                        <div className='upperlayer'  >
                                            <h3 className='package-name text-fs32 font-medium font-inter' >
                                                {item.title}
                                            </h3>
                                            <p className='font-inter font-light'>$<span style={{
                                                color: item.color
                                            }} >{item.price}</span>/mo</p>
                                        </div>
                                        <div className='package-list'>
                                            <ul>
                                                {item.content.map((res) =>
                                                    <li className='font-inter font-regular'>{res}</li>
                                                )}
                                            </ul>
                                        </div>
                                        <button className='font-inter font-bold' style={{
                                            backgroundColor: item.color
                                        }} >Subscribe</button>
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

export default Packages2
