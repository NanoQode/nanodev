import React from 'react'

const BuiltCard = ({ data }) => {
    return (
        <div className='bg-white relative h-[392px] py-7 pr-4 w-[25%]  px-7 ml-20 hover:bg-[#DA452C] hover:!text-white  hover:scale-105 duration-150 ease-out transition-all cursor-pointer'>
            <div className='bg-[#5AA6B1] w-[92px] h-[92px] rounded-full flex items-center justify-center absolute -top-16 left-0'>
                <img src={data.img} alt="" />
            </div>
            <h2 className='mt-6 text-fs20 font-inter font-bold mb-2'>
                {data.title}
            </h2>
            <small className='text-fs1824 font-inter font-normal text-[#DA4B27] mb-2 block hover:text-white'>
                {data.body}
            </small>
            <div>
                {data?.content?.map((res) =>

                    <div className='flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-[#DA4B27] rounded-full hover:bg-white' />
                        <p className='text-fs1628 font-inter font-normal'>{res}</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default BuiltCard
