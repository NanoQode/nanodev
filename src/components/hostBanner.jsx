import React from 'react'

const HostBanner = ({title,title3,body,img}) => {
  return (
    <section className='host-banner relative'>
        <div className='container mx-auto'>
            <div className='flex flex-col sm:flex-row justify-between '>
                <div className='w-full lg:w-3/4 xl:w-1/2 2xl:w-1/2'> 
                    <div className='text-[#333333] py-8'>
                        <div className='mt-10 w-[200px] h-1 bg-[#DA452C] mb-4' />
                        <h2 className='text-fs60 font-bold font-inter mb-10'>
                            {title3}
                            <span className='text-[#DA452C]'> {title}</span> 
                        </h2>
                        <h4 className='text-fs25 font-inter  mb-0 sub-title text-[#5AA6B1] block font-medium'>
                            {body}
                        </h4> 
                        <button className=' border-2 text-white bg-[#5AA6B1] my-10 w-3/4 rounded-lg p-2 lg:p-4 text-sm mt-10 mb-8 w-auto'>SEE PRICING</button>
                    </div> 
                </div> 
            </div>
        </div>
                <img src={img} className='w-[90%] hosting-banner' alt=""  /> 
    </section>
  )
}

export default HostBanner
