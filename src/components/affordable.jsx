import React, { useRef } from 'react'
import { priceData } from '../constant'
import { check11, DEVELOPMENT, line } from '../images'
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
    },
    1200: {
      items: 4,

    }
  },
};

const Affordable = () => {
  const newRef = useRef()
  return (
    <section className='relative affordable-services py-16'>
      <div className='hidden sm:flex top-1 lg:top-1 z-20 absolute mlg:hidden'>
        <img src={DEVELOPMENT} alt="" />
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='font-bold text-hd font-inter mlg:text-fs36'>Affordable Services</h3>
          <img src={line} className='w-1/3 -ml-12 2xl:w-60' alt="" />
        </div>
        <div className='mt-10 lg:mt-25 mb-0 flex items-center justify-center sm:justify-start relative'>
          <div className='mt-0  w-[1136px] mlg:w-[900px] mmd:w-[700px] msm:w-full pl-[220px] mmd:pl-0 mxs:max-w-[300px]  mx-auto cs-slide-width custom-nav-btn'>
            <OwlCarousel  {...options} >
              {priceData.map((item) =>
                <div className='mb-5 carousel-inner'>
                  <div key={item.id} className=' z-20 relative'>
                    <img src={item.img} className='w-60' alt="" />
                    <div className='absolute  cs-slide-outer-layer'>
                      <h1 className='text-center text-white relative'> <span className='cs-dollar'>$</span>
                        {item.title}<small className='text-small'>/mo</small></h1>
                      <div style={{
                        color: item.color
                      }} className={` bg-white  py-1 px-5 w-max rounded-r-xl rounded-badge`}>
                        <h3 className='text-center'>{item.subTitle}</h3>
                      </div>
                      <h4 className='font-light text-sm mb-2 ml-6 capitalize text-white font-inter starting-text'>starting from</h4>
                      {item.content.map((res) =>
                        <div className='flex flex-col space-y-2 text-white cs-info-text'>

                          <p className='flex items-center space-x-2'>
                            <img src={check11} alt="" />{res}</p>
                        </div>
                      )}
                      <button style={{
                        color: item.color,
                        border: `1px solid ${item.color}`,
                      }} className={`-bottom-[5rem] font-semibold left-14 rounded-full shadow-sm capitalize py-2 px-6 bg-white w-max border-2 absolute cs-learn-more-btn`}>learn more</button>
                    </div>
                  </div>
                </div>
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Affordable
