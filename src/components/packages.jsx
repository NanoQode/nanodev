import React from 'react'
import { arrow, arrow2, line,  price ,backgroundLayer} from '../images'
import { packageOffer } from '../constant' 
import { Swiper, SwiperSlide } from 'swiper/react';
const Packages = ({img}) => {
    return (

        <div className='relative bg-[#EBF4F6] h-max p-8'>
            <div className='flex flex-col items-center justify-center p-5'>
                <h3 className='nc-heading font-bold font-inter'>Packages We Offer</h3>
                <img src={line} className='w-40 lg:w-80' alt="" />
            </div>
            <section className='mt-10 lg:mt-40 mb-20 flex items-center justify-center sm:justify-start relative'>
                <div className='hidden sm:flex  -top-10 lg:-top-60 z-20 absolute 2xl:-top-20'>
                    <img src={img} className='-ml-7 lg:mt-32 2xl:mt-0' alt="" />
                </div>
                <div className='container mx-auto flex items-center justify-center relative'>
                <div className='hidden md:flex items-center space-x-4 relative ml-20'>
                    <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
                        <img src={arrow} alt="" />
                    </div>
                    <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
                        <img src={arrow2} alt="" />
                    </div>
                </div>  <Swiper
              
              className='packages-slider'
                spaceBetween={0}
              slidesPerView={3}  
              speed={0}>
            
            {packageOffer.map((item) =>
            <SwiperSlide className=''>

               
            <div key={item.id} style={{
                  background: item.color
                }}  className=' z-20 relative cs-packages'> 
                        <div className='upperlayer'  >
                            <img src={backgroundLayer} class="package-name-bg"/>
                                <h3 className='package-name text-fs32 font-medium font-inter'>
                                    {item.title} 
                                </h3>
                                <p className='font-inter font-light'>$<span>{item.price}</span>/mo</p>
                        </div>
                  
              
               
                        <div className='package-list'>
                            <ul>
                {item.content.map((res) =>

                    <li  className='font-inter font-regular'>
                    {res}</li>
                    )}
                    </ul>
                </div>
                <button  className='font-inter font-regular'>Order Now</button>
              </div> 
                  </SwiperSlide> 
          )}
                   
             
          
          </Swiper> 
                {/* <div className=' lg:-mt-32 flex items-center space-x-1 flex-col md:grid justify-center md:grid-cols-2 lg:grid-cols-4 ml-10 2xl:mx-auto '>
                    <img src={price} className='w-full p-1 hover:scale-105 duration-150 ease-out transition-all' alt="" />
                </div> */}
                </div>
            </section>
        </div>
    )
}

export default Packages
