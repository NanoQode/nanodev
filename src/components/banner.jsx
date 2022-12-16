import React, {useState} from 'react'
import { banner, boy, bulb, chart, divider, eng, loading, peeps, scrolll } from '../images'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { PopupModal } from "react-calendly";
import { Link, useNavigate } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
const Banner = () => {
  const [openModal, setOpenModal] = useState(false)
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
   
    <section className='banner-sec pt-25 pb-15'>
       <div className='container mx-auto  flex flex-col justify-between sm:flex-row'>
      <div className='w-full lg:w-1/2'>
       
        <div className='text-[#333333] banner-text'>
          <div className='w-[200px] h-1 bg-[#DA452C] mb-10' />
          <h2 className='text-70 font-inter font-bold'>
            Grow your business,
            without Limits!
          </h2>
          <h4 className='mt-5 mb-5 font-inter'>
            Connect with our experts to start
            the evalution today.
          </h4>
        </div>

        <div className='flex items-center space-x-6'>
          <button onClick={() => setOpenModal(true)} className='btn btn-blue font-normal mt-5 w-253'>BOOK A FREE CONSULT</button>
          <button className='btn btn-outline font-normal mt-5'><Link to='/search-engine-optimization'> FREE TRAFFIC REPORT </Link></button>
        </div>
        <div className='ml-1 -mt-20 nc-scroll-down'>
          <img src={scrolll} className='' alt="" />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full md:w-1/2 lg:w-1/2'>
        <Swiper
          className='w-full'
          //   spaceBetween={15}
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
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
        </div>
      </div>
      <PopupModal
          url="https://calendly.com/nanoqode/schedule-a-call"
          // pageSettings={this.props.pageSettings}
          // utm={this.props.utm}
          // prefill={this.props.prefill}
          onModalClose={() => setOpenModal(false)}
          open={openModal}
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
        />
    </section> 
  )
}

export default Banner
