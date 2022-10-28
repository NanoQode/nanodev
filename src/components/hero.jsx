import React from 'react'
import { arrow, arrow2, aws, bing, cfib, godaddy, line, mailchimp, mailgun, meta, shopify, zoho } from '../images'

const Hero = () => {
  return (
    <div className='flex items-center justify-center flex-col bg-[#EBF4F6] w-full h-[362px] px-5 lg:px-10'>
      <div className='flex flex-col items-center justify-center p-5'>
        <h3 className='text-4xl font-bold'>Our Partners in Your Success</h3>
        <img src={line} className='w-3/4 -ml-20' alt="" />
      </div>
      <div className='bg-white p-5 rounded-full flex items-center space-x-3'>
        <img src={arrow} alt="" />
        <div className='flex space-x-4 items-center overflow-scroll'>
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


      </div>
    </div>
  )
}

export default Hero
