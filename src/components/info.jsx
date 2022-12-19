import React from 'react'
import { icon, info, line } from '../images'
import Title from './title'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Info = () => {
  const data = [
    {
      id: 1,
      title: 'Web Development'
    },
    {
      id: 2,
      title: 'Mobile App Development'
    },
    {
      id: 3,
      title: 'Software Development'
    },
    {
      id: 4,
      title: 'ERP & Business Solution Deployment'
    },
    {
      id: 5,
      title: 'API & Open Source Integration'
    },
    {
      id: 6,
      title: 'Ecommerce & Shopify Solutions'

    },





  ]
  return (
    <section className='nc-web-creation bg-[#EBF4F6] py-16 w-full'>
      <div className='container mx-auto flex flex-wrap  justify-center items-center lg:flex-row lg:justify-between  '>
        <div className='w-full  w-[460px] pr-[10px] mlg:w-1/2 mxl:w-[440px] msm:w-full'>
          <div className='mb-10'>
            <h3 className='nc-heading font-inter font-bold  mlg:text-fs36'>Website Creation</h3>
            <img src={line} className='w-60 ' alt="" />
          </div>
          <p className='nc-info-text font-inter font-normal mb-12 mxl:mb-8'>
            Your technology partner for innovative and impactful digital solutions. We are a digital commerce agency that fits perfectly with your business. We work with you and take your stakeholders into consideration when developing custom solutions that guarantee significant value from your digital investment.
          </p>
          <Link to='/web-development' >
            <button className='mt-5 btn btn-blue'>
              More Details
            </button>
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center space-y-3.5  mlg:w-1/2 msm:w-full msm:mt-10 w-[440px] mxl:w-[420px] pr-[10px]'>
          {data.map((item) =>
            <div key={item.id} className='nc-info-list rounded-full items-center bg-white px-4 sm:px-7 py-1 flex w-[430px] max-w-full   min-h-[44px] '>
              <img src={icon} className='mr-3' alt="" />
              {item.title}
            </div>
          )}
        </div>
        <motion.img
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className='mb-10  mlg:w-1/2 mlg:mb-0 mlg:mt-10 mlg:mx-auto'
          transition={{ ease: "easeOut", duration: 1.2 }}
          src={info}
        />
      </div>
    </section>
  )
}

export default Info
