import React from 'react'
import { designimg, Gif2, line } from '../images'

const Focus = () => {
    return (
        <div className=' py-24'>
            <div className='container mx-auto'>
            <h2 className='font-semibold font-inter text-fs20 mb-4 text-center'>OUR DESIGN LANGUAGE</h2>
            <div className='flex flex-col items-center justify-center '>
                <h3 className='text-fs48 font-bold font-inter'>A Focus on Design + Fuction</h3>
                <img src={line} className='w-80' alt="" />
            </div>
            <section className='focus-design relative flex my-2 items-start justify-center  flex-col lg:flex-row mx-auto '>
                <div className=' mt-24   w-[594px]'>
                    <img src={Gif2} className='w-full'  alt="" />
                </div>
                <div className='flex mt-10 relative mb-10 sm:mb-0 items-center justify-center w-[524px] '>
                    <div className='w-full sm:mt-0 sm:-ml-32  bg-[#E9E9E9] p-8 h-max  items-start flex flex-col space-y-5 sm:p-16 text-[#494949]'>
                        <p >Create and maintain inclusive and high-quality content, protecting your brand reputation and reducing the risk of compliance lawsuits and fines.
                        </p>
                        <p>Identify, prioritize, and implement the most impactful content optimizations so you can craft truly impactful, and engaging, customer experiences.</p>
                        <button className='bg-[#5AA6B1] py-2 btn btn-blue w-[253px]'>BOOK A FREE CONSULT</button>
                    </div>
                </div>

            </section>
            </div>
        </div>
    )
}

export default Focus
