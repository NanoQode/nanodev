import React from 'react'
import { bghero } from '../images'

const CallHero = () => {
    return (
        <section className='py-16 schedule-a-call'>
            <div className='container mx-auto'>
                <div className='flex  flex-wrap pl-5 sm:items-center sm:flex-row sm:justify-between msm:py-8 sm:py-5 sm:px-10 lg:py-10 lg:px-20 p-5 min-h-[260px] mxs:min-h-[0px] rounded' style={{
                    backgroundImage: `url(${bghero})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', 
                }} >
                    <aside className='w-full msm:w-full w-1/2 '>
                        <div className='w-[200px] h-1 bg-[#DA452C] call-line ' />
                        <h3 className='text-white text-fs32 font-inter font-bold mt-5 sm:text-xl msm:text-fs20 msm:mb-10 mmd:mt-4 mmd:text-fs2535 '>
                            Convinced yet? Let's make something
                            great together.
                        </h3>
                    </aside>
                    <div className='w-1/4 flex msm:w-full justify-end  msm:justify-center'>
                        <a href="tel:+18003512961">
                            <button className='w-max btn btn-blue'>SCHEDULE A CALL</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallHero
