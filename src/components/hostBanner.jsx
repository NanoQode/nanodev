import React from 'react'

const HostBanner = ({ title, title3, body, img }) => {
    return (
        <section className='host-banner relative cs-inner-banner pt-25'>
            <div className='container mx-auto'>
                <div className='flex flex-col flex-wrap sm:flex-row justify-between items-end'>
                    <div className='w-1/2 mmd:w-full'>
                        <div className='text-[#333333] pb-25'>
                            <div className='w-[200px] h-1 bg-[#DA452C] mb-4 call-line' />
                            <h2 className='text-fs60 font-bold font-inter mb-10 w-[811px] mmd:w-full mlg:text-fs5265 msm:text-fs36'>
                                {title3}
                                <span className='text-[#DA452C]'> {title}</span>
                            </h2>
                            <h4 className='text-fs25 font-inter  mb-0 sub-title text-[#5AA6B1] block font-medium'>
                                {body}
                            </h4>
                            <button className=' border-2 text-white bg-[#5AA6B1] rounded-lg  p-4 text-sm mt-10  w-[200px]'>SEE PRICING</button>
                        </div>
                    </div>
                    <div class="w-1/2  mmd:w-full mmd:mb-20">
                        <img src={img} class="w-[90%] ml-auto" alt=""/> 
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default HostBanner
