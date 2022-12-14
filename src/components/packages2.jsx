import React from 'react'
import { arrow, arrow2, line } from '../images'
import { seoPackage } from '../constant'
import { Swiper, SwiperSlide } from 'swiper/react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
    margin: 0,
    responsiveClass: true,
    nav: true,
    loop: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    touchDrag: false,
    mouseDrag: false,
    freeDrag: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        touchDrag: true,
      },
      575: {
        items: 2,
        nav: false,
        touchDrag: true,
      },
      768: {
        items: 3,
        nav: false,
        touchDrag: true,
      },
      992: {
        items: 3,
      } 
    },
  };
const Packages2 = ({ img, img2, img3, img4, big, color }) => {
    return (

        <section
            style={{
                background: color || 'white'
            }}
            className='pricing-sec relative h-max  py-16'>
            <div className='flex flex-col items-center justify-center   mb-10'>
                <h3 className='font-bold font-inter text-hd mlg:text-fs36'>Pricing</h3>
                <img src={line} className='w-60' alt="" />
            </div>
            <div className='mt-10 lg:mt-16 mb-0 flex items-center justify-center sm:justify-start relative'>
                <div className={big ? 'hidden sm:flex top-10 z-20 relative' : 'hidden sm:flex -top-20 z-20 absolute'}>
                    <img src={img} alt="" className='w-[90%]' />
                </div>
                <div className='mt-10 lg:mt-25 mb-0 w-full flex items-center justify-center  relative'>
          <div className='mt-0  w-[1136px] mlg:w-[900px] mmd:w-[700px] msm:w-[520px] pl-[220px] mlg:pl-[120px] mmd:pl-0 mxs:max-w-[300px]  mx-auto cs-slide-width packages-slider seo-packages custom-nav-btn'> 
            <OwlCarousel  {...options} >
            {seoPackage.map((item) =>
                                <div className=''>
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
                                </div>
                            )}
                            </OwlCarousel>
          </div>
        </div>
                {/* <div className='container mx-auto flex items-center'>
                    <div className='hidden md:flex items-center space-x-2 relative ml-16'>
                        <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
                            <img src={arrow} alt="" />
                        </div>
                        <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
                            <img src={arrow2} alt="" />
                        </div>
                    </div>
                    <div className='sm:mt-20 w-[1000px] max-w-full justify-center ml-auto flex items-center space-x-3 flex-col md:flex-row lg:mt-0'>
                        <Swiper
                            className='packages-slider seo-packages'
                            spaceBetween={40} 
                            breakpoints={{
                                0: { 
                                    slidesPerView: 1,
                                },
                                768: { 
                                    slidesPerView: 1,
                                },
                                992: { 
                                    slidesPerView: 3,
                                }, 
                                }} 
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
                </div> */}
            </div>
        </section>

    )
}

export default Packages2
