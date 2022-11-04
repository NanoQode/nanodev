import React from 'react'
import { arrow, arrow2, line, PACKAGES, price } from '../images'

const Packages = () => {
    return (

        <div className='relative bg-[#EBF4F6] h-[800px]'>
            <div className='flex flex-col items-center justify-center p-5'>
                <h3 className='text-4xl font-bold'>Packages We Offer</h3>
                <img src={line} className='w-3/4 -ml-20' alt="" />
            </div>
            <section className='mt-10 lg:mt-40 mb-20 flex items-center justify-center sm:justify-start relative'>
                <div className='hidden sm:flex -top-60 z-20 absolute'>
                    <img src={PACKAGES} alt="" />
                </div>
                <div className='hidden md:flex items-center space-x-4 relative ml-20'>
                    <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
                        <img src={arrow} alt="" />
                    </div>
                    <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
                        <img src={arrow2} alt="" />
                    </div>
                </div>
                <div className='-mt-40 ml-32'>
                    <img src={price} className='w-3/4' alt="" />
                </div>
                {/* <div className=' lg:-mt-32 flex items-center space-x-1 flex-col md:grid justify-center md:grid-cols-2 lg:grid-cols-4 ml-10 2xl:mx-auto '>
                    <img src={price} className='w-full p-1 hover:scale-105 duration-150 ease-out transition-all' alt="" />
                </div> */}
            </section>
        </div>
    )
}

export default Packages
