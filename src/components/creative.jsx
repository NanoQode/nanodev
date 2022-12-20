import React, { useState } from 'react'
import {
    // accl, bulb2, CREATIVE, 
    line,
    // menu, recycle, rise 
} from '../images'
import { PopupModal } from 'react-calendly'

const Creative = ({ data, img, title, body, subtext, img2, call }) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <section className='overflow-hidden'>
            <div className='bg-[#DA4B271F] relative w-full   py-16'>
                <div className='container mx-auto'>
                    <div className='absolute -right-4 -top-6 sm:-top-5'>
                        <img src={img} className='w-3/4' alt="" />
                    </div>
                    <div className='flex flex-col items-start sm:pl-10'>
                        <p className='font-semibold font-inter text-fs20 mb-4'>{title ?? ''}</p>
                        <div className='flex flex-col items-center justify-center sm:w-[806px] max-w-full'>
                            <h3 className='text-fs48 font-inter font-bold mlg:text-fs36 '>
                                {body}
                            </h3>
                            <img src={line} className='-ml-32 w-60 md:w-3/4 lg:-ml-20' alt="" />
                        </div>
                        <p className='mt-6 font-medium font-inter text-fs31 text-[#333333]'>{subtext ?? ''}</p>
                    </div>
                </div>
            </div>
            <div className='relative flex  items-center justify-center py-12 pb-16  md:justify-start md:flex-row md:space-x-4 mmd:py-16 '>
                <div className='container mx-auto flex flex-wrap'>
                    <div className='flex flex-col w-full  space-y-7 lg:w-1/2 mmd:w-full'>
                        {data.map((res) =>
                            <div className='flex items-center space-x-11 mxs:space-x-5' key={res.id}>
                                <div className='w-[92px] h-[92px] min-w-[92px] mxs:w-[70px] mxs:min-w-[70px] mxs:h-[70px] rounded-full flex items-center justify-center bg-[#5AA6B1] '>
                                    <img src={res.img} className='' alt="" />
                                </div>
                                <div className='flex flex-col'>
                                    <h2 className='font-semibold text-fs2031 font-inter mb-2'>{res.title}</h2>
                                    <p className='text-fs16 font-inter font-normal'>{res.body}</p>
                                </div>
                            </div>
                        )}
                        {call &&
                            <button onClick={() => setOpenModal(true)} className=' text-white bg-[#DA452C] rounded-lg btn btn-orange'>
                                SCHEDULE A FREE CALL
                            </button>}
                    </div>

                    <div className='w-full  lg:w-1/2 mmd:w-full mx-auto mlg:pl-6 msm:pl-0'>
                        <img src={img2 ?? ''} className='w-[556px] ml-auto -mt-48 mlg:-mt-24 mmd:mt-20 cs-outer-border mmd:mx-auto' alt="" />
                    </div>
                </div>
                <PopupModal
                    url="https://calendly.com/nanoqode/schedule-a-call"
                    onModalClose={() => setOpenModal(false)}
                    open={openModal}
                    rootElement={document.getElementById('root')}
                />
            </div>
        </section>
    )
}

export default Creative
