import React from 'react'
import { facebook, instaw, logo2, twitter, vimeo, youtube } from '../images'

const Footer = () => {
  return (
    <footer className='bg-[#5AA6B1] w-full text-white
    '>
      <div className='container mx-auto'>
      <div className='flex  flex-col lg:flex-row  lg:justify-between pt-12 pb-12'>
        <div className='flex flex-col   w-full lg:w-1/4'>
          <img src={logo2} className='w-[181px]' alt=""/>
          <p className='mt-8 mb-12 text-fs18 font-inter font-normal max-w-[329px]'>
            Nanoqode services are designed to meet modern digital business needs. From getting your company up-to-specs on security, deploying custom solutions, managing you marketing strategy and many more.
          </p>
          <div className='flex items-center space-x-4'>
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={instaw} alt="" />
            <img src={vimeo} alt="" />
            <img src={youtube} alt="" />
          </div> 
        </div>
        <div className='grid grid-cols-1 my-4 sm:grid-cols-2 p-3 sm:my-0 gap-x-8 w-full lg:w-1/3'>
          <div className='flex flex-col'>
            <h2 className='text-fs20 font-bold font-inter mb-10'>Get in Touch</h2>
            <ul className='space-y-5'>
              <li>
                  <p className='text-fs-18 font-normal font-inter'>6 Indell Lane, Brampton ON L6T 3Y3 Canada</p>
              </li>
              <li>
                <a href='mailto:info@nanoqode.com' className='text-fs-18 font-normal font-inter hover:text-nc-orange'>info@nanoqode.com</a>
              </li>
              <li>
                <a href='tel:+1 (647)812-9492' className='text-fs-18 font-normal font-inter hover:text-nc-orange'>+1 (647)812-9492</a>
              </li>
            </ul>  
          </div>
 
          <div className='flex flex-col'>
            <h2 className='text-fs20 font-bold font-inter mb-10'>Learn More</h2>  
            <ul className='space-y-5 mt-0'>
              <li>
                  <a href='javascript:void(0);' className='text-fs-18 font-normal font-inter hover:text-nc-orange'>About Us </a>
              </li>
              <li>
                  <a href='javascript:void(0);' className='text-fs-18 font-normal font-inter hover:text-nc-orange'> Projects</a>
              </li>
              <li>
                  <a href='javascript:void(0);' className='text-fs-18 font-normal font-inter hover:text-nc-orange'>Terms of Use </a>
              </li>
              <li>
                  <a href='javascript:void(0);' className='text-fs-18 font-normal font-inter hover:text-nc-orange'>Privacy Policy </a>
              </li>
              <li>
                  <a href='javascript:void(0);' className='text-fs-18 font-normal font-inter hover:text-nc-orange'>Contact Us </a>
              </li> 
            </ul>  
 
        
        <section className='grid grid-cols-1 my-4 sm:grid-cols-2 p-3 sm:my-0 gap-x-8 w-full lg:w-1/3'>
          <div className='flex flex-col space-y-7'>
            <h2 className='font-semibold text-lg'>Get in Touch</h2>
            <p className='text-xs font-light'>6 Indell Lane, Brampton ON L6T 3Y3 Canada</p>
            <p className='text-xs font-light'></p>info@nanoqode.com
            <p className='text-xs font-light'>+1 (647)812-9492</p>
 
          </div>
        
        </section>
        <section className='flex flex-col  w-full lg:w-1/4 content-start'>
          <h2 className='text-fs20 font-bold font-inter mb-10'>
            Our Newsletter
          </h2>
          <p className='text-fs-18 font-normal font-inter mb-8'>
            Subscribe to our newsletter to get our news delivered to your inbox!
          </p>
          <input type="email" placeholder='Enter your email' className='text-[#333333] subscribe-field outline-none border-none' /> 
          <button className='bg-[#DA4B27] btn btn-orange mt-6'>Subscribe</button>
        </section>
      </div>
      </div>
      <div className='w-full h-0.5 bg-white' />
      <div className='container mx-auto py-6'>
      <p className=' text-right font-inter font-normal text-fs18 text-white'>&copy; 2022 Nanoqode.
        All rights reserved.</p>
        </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer
