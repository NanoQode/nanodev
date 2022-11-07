import React from 'react'
import { designimg, line } from '../images'

const Focus = () => {
    return (
        <div className=' p-4'>
            <h2 className='text-center font-semibold mt-20'>OUR DESIGN LANGUAGE</h2>
            <div className='flex flex-col items-center justify-center p-5'>
                <h3 className='text-4xl font-bold'>A Focus on Design + Fuction</h3>
                <img src={line} className='w-1/3 -ml-12 2xl:w-60' alt="" />
            </div>
            <section className='flex my-20 items-center justify-center flex-col lg:flex-row mx-auto '>
                <div className=' sm:ml-20'>
                    <img src={designimg} alt="" />
                </div>
                <div className='flex relative w-full sm:w-1/2 p-10'>
                    <div className='absolute -top-60 sm:mt-0 sm:-ml-32  bg-[#E9E9E9] w-[504px] h-[400px] flex flex-col space-y-4 p-16 text-[#494949]'>
                        <p >Create and maintain inclusive and high-quality content, protecting your brand reputation and reducing the risk of compliance lawsuits and fines.
                        </p>
                        <p className='my-10'>Identify, prioritize, and implement the most impactful content optimizations so you can craft truly impactful, and engaging, customer experiences.</p>
                        <button className='bg-[#5AA6B1] py-2 px-4 text-white mt-32 w-[200px]'>BOOK A FREE CONSULT</button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Focus