import React from 'react'
import { arrowc, BUILT, cert, desk, file, line, roller } from '../images'
import BuiltCard from './builtCard'

const Built = ({ data, title, img }) => {

    return (
        <section className='bg-[#EBF4F6] w-full h-max pt-10  pb-16 relative'>
            <div className='container mx-auto w-[1280px]'>
                <div className='flex flex-col items-center justify-center p-5 mt-20 -ml-10 sm:ml-0 mmd:ml-0'>
                    <h3 className='text-fs48 font-inter font-bold mlg:text-fs36 '>{title}</h3>
                    <img src={line} className='w-70' alt="" />
                </div>
                <section className=''>
                    <div className='flex flex-wrap space-x-4  mmd:space-x-0 mmd:justify-between'>
                        {data.map((res) =>
                            <BuiltCard key={res.id} data={res} />
                        )}
                    </div> 
                    <div className='hidden xl:flex items-center  justify-evenly mt-4 2xl:justify-between xl:mx-auto pl-8 max-w-[880px]'>
                        <img src={arrowc} className='w-[200px]' alt="" />
                        <img src={arrowc} className='w-[200px]' alt="" />
                        <img src={arrowc} className='w-[200px]' alt="" />
                    </div>
                </section> 
                <div className='hidden sm:flex absolute right-2 -top-5'>
                    <img src={img} className='' alt="" />
                </div>
            </div>
        </section>
    )
}

export default Built
