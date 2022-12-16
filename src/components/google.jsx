import React from 'react'
import { google, Stars } from '../images'

const Google = ({ title, desc }) => {
    return (
        <div className='w-full p-8 pb-2  h-max shadow-sm rounded bg-white  '>
            <img src={Stars} alt="" />
            <p className='my-6 text-fs14 font-inter font-normal'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
            </p>
            <section className='flex items-start justify-between'>
                <div>
                    <h2 className='font-bold text-fs16 font-inter'>{title}</h2>
                    <p className='text-fs16 font-inter font-normal'>{desc}</p>
                </div>
                <img src={google} className='w-16 -mr-6' alt="" />
            </section>
        </div>
    )
}

export default Google
