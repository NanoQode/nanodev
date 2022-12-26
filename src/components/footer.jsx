import React from 'react'
import { facebook, instaw, logo2, twitter, vimeo, youtube } from '../images'

const Footer = () => {
  return (
    <footer className='bg-[#5AA6B1] w-full text-white
    '>
      <div className='container mx-auto'>
        <div className='flex  flex-wrap  lg:justify-between pt-16 pb-12'>
          <div className='flex flex-col w-1/4 mmd:w-full mmd:mb-12'>
            <img src={logo2} className='w-[181px]' alt="" />
            <p className='mt-8 mb-12 text-fs18 font-inter font-normal lg:max-w-[329px] mmd:my-4 msm:text-fs15'>
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
          <div className='grid grid-cols-1 lg:mb-4 md:mb-12 sm:grid-cols-2 msm:grid-cols-2  mxs:grid-cols-1 lg:pb-3  gap-x-8 flex-col w-2/4  mmd:w-full'>
            <div className='flex flex-col mt-10 md:mt-0 msm:mt-0'>
              <h2 className='text-fs20 font-bold font-inter mb-10 mmd:mb-6'>Get in Touch</h2>
              <ul className='space-y-5'>
                <li>
                  <p className='text-fs-18 font-normal font-inter  msm:text-fs15'>6 Indell Lane, Brampton ON L6T 3Y3 Canada</p>
                </li>
                <li>
                  <a href='mailto:info@nanoqode.com' className='text-fs-18 font-normal font-inter hover:text-nc-orange  msm:text-fs15'>info@nanoqode.com</a>
                </li>
                <li>
                  <a href='tel:+1 (647)812-9492' className='text-fs-18 font-normal font-inter hover:text-nc-orange  msm:text-fs15'>+1 (647)812-9492</a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col  mt-10 md:mt-0 msm:mt-0 mxs:mt-10'>
              <h2 className='text-fs20 font-bold font-inter mb-10 mmd:mb-6'>Learn More</h2>
              <ul className='space-y-5 mt-0'>
                <li>
                  <a href='javascript:void(0);' className='text-fs-18 font-normal font-inter hover:text-nc-orange  msm:text-fs15'>About Us </a>
                </li>
                <li>
                  <a href='javascript:void(0);' className='text-fs-18 font-normal font-inter hover:text-nc-orange  msm:text-fs15'> Projects</a>
                </li>
                <li>
                  <a href='javascript:void(0);' className='text-fs-18 font-normal font-inter hover:text-nc-orange  msm:text-fs15'>Terms of Use </a>
                </li>
                <li>
                  <a href='javascript:void(0);' className='text-fs-18 font-normal font-inter hover:text-nc-orange  msm:text-fs15'>Privacy Policy </a>
                </li>
                <li>
                  <a href='javascript:void(0);' className='text-fs-18 font-normal font-inter hover:text-nc-orange  msm:text-fs15'>Contact Us </a>
                </li>
              </ul>
            </div>
          </div>
          <section className='flex flex-col  mt-10 md:mt-0   w-1/4 mmd:w-full content-start'>
            <h2 className='text-fs20 font-bold font-inter mb-10 mmd:mb-6'>
              Our Newsletter
            </h2>
            <p className='text-fs-18 font-normal font-inter mb-8  msm:text-fs15'>
              Subscribe to our newsletter to get our news delivered to your inbox!
            </p>
            <input type="email" placeholder='Enter your email' className='text-[#333333] subscribe-field outline-none border-none' />
            <button className='bg-[#DA4B27] btn btn-orange mt-6'>Subscribe</button>
          </section>
        </div>
      </div>
      <div className='w-full h-0.5 bg-white call-line' />
      <div className='container mx-auto py-6'>
        <p className='text-center sm:text-right font-inter font-normal text-fs15 sm:text-fs18 text-white'>&copy; 2022 Nanoqode.
          All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer
