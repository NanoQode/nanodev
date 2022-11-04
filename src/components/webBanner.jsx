import React from 'react'
import { icon, star, star2, webdev } from '../images'
import { motion } from "framer-motion";

const WebBanner = ({ title, title2, body, img, data, btn }) => {

    return (
        <div className=' flex flex-col sm:flex-row justify-between '>
            <section className='w-full lg:w-3/4 xl:w-1/2 2xl:w-1/3 2xl:mx-auto'>

                <div className='text-[#333333] p-10'>
                    <div className='mt-10 w-[200px] h-1 bg-[#DA452C] mb-4' />
                    <h2 className=' text-4xl lg:text-6xl  font-bold '>
                        <span className='text-[#DA452C]'>{title}</span>
                        {title2}
                    </h2>
                    <h4 className='text-lg lg:text-2xl'>
                        {body}
                    </h4>
                </div>

                <div className='w-1/3 flex flex-col items-center justify-center sm:ml-32 '>
                    {data?.map((item) =>
                        <div key={item.id} className='m-3 rounded-full items-center bg-[#EBF4F6] px-4 sm:px-7 py-1 flex w-[270px] sm:w-[370px] h-[44px]'>
                            <img src={icon} className='mr-3' alt="" />
                            {item.title}
                        </div>
                    )}
                </div>

                {btn ?
                    <>
                        <div className='flex items-center space-x-4 ml-16 my-10'>
                            <button className=' text-white w-[200px] bg-[#5AA6B1] rounded-lg p-2 lg:p-4 text-sm'>GET STARTED</button>
                            <button className=' border-2 text-[#DA452C]  w-[300px] border-[#DA452C] rounded-lg p-2 lg:p-4 text-sm'>SPEAK WITH AN EXPERT</button>
                        </div>
                        <div className='bg-[#DA452C] flex items-center space-x-1 text-white w-max px-4 text-xl ml-14 rounded my-10'>
                            <h2>Excellent</h2>

                            <aside className='flex items-center'>

                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </aside>
                            <p>5 star reviews on</p>
                            <img src={star2} alt="" />
                            <p>Trustpilot</p>
                        </div>
                    </> :
                    <div className='flex items-center space-x-2 ml-16 my-10'>
                        <button className='text-white bg-[#DA452C] rounded-lg p-2 lg:p-4 text-sm'>BOOK A FREE CONSULT</button>
                    </div>}
            </section>
            <section className='w-full lg:w-3/4 xl:w-1/2 flex items-center mb-7 justify-center flex-col lg:-mt-20 xl:-mt-3 2xl:w-1/3 2xl:mx-auto'>
                <motion.img
                    initial={{
                        x: 200,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}

                    transition={{ ease: "easeOut", duration: 1.2 }} src={img} className='w-[90%]' alt="" />

            </section>
        </div>
    )
}

export default WebBanner
