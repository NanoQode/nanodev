import React from 'react'
import { call, msg } from '../images'

const CallCard = () => {
    return (
        <div
            style={{
                boxShadow: 'rgb(90 165 177 / 47%) 0px 0px 20px 0px',
                borderRadius : '18px'
        }}
            className='bg-white px-4 mx-4 md:px-10 w-[848px] h-max md:h-[129px]  flex  space-x-4 md:space-x-8  items-center  text-[#494949]'>
            <div className='flex space-x-4 md:space-x-6 items-center  w-[50%] text-sm sm:text-lg'>
                <img src={call} className='w-[35px]' alt="" />
                <aside className='flex flex-col'>
                    <small className='text-fs1944 font-normal font-inter'>
                        Toll Free Number
                    </small>
                    <h2 className='text-fs3044 font-semibold font-inter '>
                        800-361-2961
                    </h2>
                </aside>
            </div>

            <div className='bg-[#5AA6B1] w-1 h-[89px]' />
            <div className='flex space-x-4 text-sm sm:text-lg  w-[50%] md:space-x-6 items-center'>
                <aside className='flex flex-col'>
                    <small className='text-fs1944 font-normal font-inter'>
                        Get a Quote
                    </small>
                    <h2 className='text-fs3044 font-semibold font-inter mt-0'>
                        Live Chat With Us
                    </h2>
                </aside>
                <img src={msg} className='w-[35px]' alt="" />
            </div>
        </div>
    )
}

export default CallCard
