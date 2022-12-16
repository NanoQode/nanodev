import React, { useState } from 'react'
import { badge, down, icon } from '../images'
import { motion } from "framer-motion";


const WebBanner2 = ({ title, title3, title2, body, img, show, gif, vid }) => {
    const [step, setStep] = useState(0)
    // proceed to the next step
    const nextStep = () => {
        if (step > 3) {
            // alert('done')
        } else {
            setStep(step + 1);
        }
    }
    const nextForm = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (
        <section className=' flex flex-col sm:flex-row justify-between items-center cs-inner-banner  pt-25'>
            <div className='container mx-auto flex items-center'>
                <div className='w-full  w-1/2 '>

                    <div className='text-[#333333]'>
                        <div className='mt-10 w-[200px] h-1 bg-[#DA452C] mb-4' />
                        <h2 className='text-fs60 font-bold font-inter mb-10'>
                            {title3}
                            <span className='text-[#DA452C]'> {title}</span>
                            {title2}
                        </h2>
                        <h4 className='text-fs25 font-inter  mb-0 sub-title text-[#5AA6B1] block font-medium'>
                            {body}
                        </h4>

                        {!show ? <>

                            {step === 0 && <div className='flex flex-col h-max bg-transparent w-[304px] border-[#DA452C] border-[1px] mt-16 mb-7 p-5 rounded-full '> <div className=''>

                                <div className='flex items-center justify-between'>
                                    <input type="text" placeholder='website' className='mx-2 bg-transparent outline-none border-b-2 flex-1' />
                                    <img src={down} alt="" />
                                </div>
                            </div>
                            </div>}
                            {step === 1 && <div className='flex flex-col h-max bg-transparent w-[304px] border-[#DA452C] border-[1px] mt-20 mb-10 p-5 rounded-full '><div className=''>

                                <div className='flex items-center justify-between'>
                                    <input type="email" placeholder='email' className='mx-2 bg-transparent outline-none border-b-2 flex-1' />
                                    <img src={down} alt="" />
                                </div>
                            </div>
                            </div>}
                            {step === 2 && <div className='flex flex-col h-max bg-transparent w-[304px] border-[#DA452C] border-[1px] mt-20 mb-10 p-5 rounded-full '><div className=''>

                                <div className='flex items-center justify-between'>
                                    <input type='number' placeholder='phone number' className='mx-2 bg-transparent outline-none border-b-2 flex-1' />
                                    <img src={down} alt="" />
                                </div>
                            </div>
                            </div>}
                            {step === 3 && <div className='flex flex-col h-max bg-transparent w-[304px] border-[#DA452C] border-[1px] mt-20 mb-10 p-5 rounded-full '><div className=''>

                                <div className='flex items-center justify-between'>
                                    <input placeholder='full name' type="text" className='mx-2 bg-transparent outline-none border-b-2 flex-1' />
                                    <img src={down} alt="" />
                                </div>
                            </div>
                            </div>}
                            {step >= 3 ? <button className='btn2 green-btn py-2 px-16 text-white  hover:bg-nc-orange'>DONE</button> : <button onClick={(e) => nextForm(e)} className='btn2 green-btn py-2 px-16 text-white  hover:bg-nc-orange'>NEXT</button>}</> :
                            <div className='bg-[#EBF4F6] w-full md:-ml-6 mt-10 lg:ml-0 sm:w-[400px] h-max  p-8 rounded-lg flex flex-col space-y-8 telephony-form'>
                                <div className='bg-transparent w-full border-[#DA452C] border-[1px]  px-6 py-2 rounded-full flex flex-col '>

                                    <input type="text" placeholder='Email' className='bg-transparent outline-none border-b-2 ' />
                                </div>
                                <aside className='flex items-center space-x-4 w-full'>
                                    <div className='bg-transparent w-[160px] border-[#DA452C] border-[1px]  px-4 py-1 rounded-full flex flex-col'>

                                        <input placeholder='Firstname' type="text" className='bg-transparent outline-none border-b-2 ' />
                                    </div>      <div className='bg-transparent w-[160px]  border-[#DA452C] border-[1px]  px-4 py-1  rounded-full flex flex-col'>

                                        <input placeholder='Lastname' type="text" className='bg-transparent outline-none border-b-2 ' />
                                    </div>
                                </aside>
                                <aside className='flex items-center space-x-4 w-full'>
                                    <div className='bg-transparent w-[160px]  border-[#DA452C] border-[1px]  px-4 py-1 rounded-full flex flex-col'>

                                        <input placeholder='City' type="text" className='bg-transparent outline-none border-b-2 ' />
                                    </div>      <div className='bg-transparent w-[160px] border-[#DA452C] border-[1px]  px-4 py-1 rounded-full flex flex-col'>
                                        <input type="number" placeholder='Phone number' className='bg-transparent outline-none border-b-2 ' />
                                    </div>
                                </aside>
                                <button className=' border-2 text-white bg-[#5AA6B1] my-10 w-3/4 rounded-lg p-2 lg:p-4 text-sm mt-10 mb-8'>Start your 7-Days Free trial</button>
                            </div>}
                    </div>


                </div>
                <div className='w-1/2 '>
                    {vid ?
                        <video src={vid} className='mr-10' autoPlay loop muted />
                        :
                        <img src={img} className='w-[90%]' alt="" />
                    }
                    {gif || vid ? null :
                        <img src={badge} className='-ml-20 lg:-ml-[30rem]' alt="" />
                    }

                </div>
            </div>
        </section>
    )
}

export default WebBanner2
