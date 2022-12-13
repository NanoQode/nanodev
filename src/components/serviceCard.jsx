import React from 'react'

const ServiceCard = ({data,color}) => {
    return (
        <div className='service-card bg-white relative w-[440px] xl:w-[440px] shadow-sm xl:h-[202px] py-7 pl-14 pr-10 hover:bg-[#5AA6B1] hover:!text-white my-5  hover:scale-105 duration-150 ease-out transition-all cursor-pointer'>
            <div style={{ backgroundColor: color}} className='bg-{[#DA452C]} w-16 h-16 rounded-full flex items-center justify-center p-2 absolute -top-7 left-0'>
                <img src={data.img} className='w-3/4' alt="" />
            </div>
            <h2 className='mt-8 mb-1 font-inter text-fs18 text-[#494949] font-semibold' >
                {data.title}
            </h2>
            <p className='font-inter text-fs13 text-[#494949] font-regular'>
                {data.body}
            </p>
        </div>
    )
}

export default ServiceCard
