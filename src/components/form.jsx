import React from 'react';
import { bball, blob, emailb, fbblack, insta, line, location, phone, pin } from '../images';

const Form = () => {
  return (
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='drop-message lg:w-[1065px] lg:mx-auto mb-4 h-max bg-white mx-3 shadow-lg p-5 flex space-y-3 md:items-center flex-col md:flex-row md:justify-between'>
          <aside className='flex flex-col space-y-5 p-3 md:w-1/2 md:mx-10'>
            <div>
              <div className='flex flex-col'>
                <h3 className='font-bold text-fs32 font-inter'>Drop Us a Line</h3>
                <img src={line} className='w-1/2  2xl:w-60' alt="" />
                <p className='mt-3 font-inter text-fs-15 font-normal mb-7 w-[405px]'>
                  Get talking with our team of experts and let's help you get your project up and running in no time.
                </p>
              </div>
            </div>
            <div className=''>
              <p className='flex items-center mt-5 font-inter text-fs-16 font-normal'>
                <img src={phone} className='mr-2' alt="" />
                +1 (800) 361-2961
              </p> 
              <p className='flex items-center mt-5 font-inter text-fs-16 font-normal'>
                <img src={emailb} className='mr-2' alt="" />
                info@nanoqode.com
              </p>
              <p className='flex items-center w-[320px] mt-5 mb-16 font-inter text-fs-16 font-normal'>
                <img src={location} className='mr-2' alt="" />
                888 Sargent Ave
                Winnipeg, Manitoba, R3E 0C7, Canada
              </p>
            </div>
            <div className='flex items-center  space-x-11'>
              <img src={fbblack} alt="" />
              <img src={pin} alt="" />
              <img src={bball} alt="" />
              <img src={insta} alt="" />
            </div>
          </aside>
          <aside className='w-full flex-1'>
            <form className='relative bottom-form'>
              <div className='flex flex-col w-3/4 mb-8'>
                <label htmlFor="name" className='font-semibold font-inter text-fs20'>Full Name</label>
                <input type="text" className='border-b-2 border-[#33333380] outline-none py-2' placeholder='John Doe' />
              </div>
              <div className='flex flex-col w-3/4 mb-8'>
                <label htmlFor="email" className='font-semibold font-inter text-fs20'>Email</label>
                <input type="email" className='border-b-2 border-[#33333380] outline-none py-2' placeholder='itagencyc@gmail.com' />
              </div>
              <div className='flex flex-col w-3/4 mb-8'>
                <label htmlFor="name" className='font-semibold font-inter text-fs20'>Message</label>
                <textarea type="text" className='resize-none border-b-2 border-[#33333380] outline-none py-2' placeholder='Write your message' />
              </div> 
              <button className='bg-[#5AA6B1] py-2 px-8 text-white mt-10 btn btn-blue'>Send message</button>
              <div className='absolute bottom-shape'>
                <img src={blob} alt="" />
              </div>
            </form>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Form
