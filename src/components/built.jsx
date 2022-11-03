import React from 'react'
import { arrowc, BUILT, cert, desk, file, line, roller } from '../images'
import BuiltCard from './builtCard'

const Built = ({data,title,img}) => {
 
    return (
        <div className='bg-[#EBF4F6] w-full h-[795px] p-10 relative'>
            <div className='flex flex-col items-center justify-center p-5 mt-20'>
                <h3 className='text-4xl font-bold'>{title}</h3>
                <img src={line} className='w-3/4 -ml-20' alt="" />
            </div>
            <section>
                <div className='flex space-x-3 items-center mt-32  '>
                    {data.map((res) =>
                        <BuiltCard key={res.id} data={res} />
                    )}
                </div>
              
                <div className='flex items-center  justify-evenly mt-4'>
                    <img src={arrowc} className='ml-32' alt="" />
                    <img src={arrowc} className='-ml-20' alt="" />
                    <img src={arrowc} className='-ml-20' alt="" /> 
                </div>
            </section>
           
            <div className='absolute right-2 -top-5'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Built
