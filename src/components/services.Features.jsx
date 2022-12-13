import React from 'react'
import { FEATURES, line } from '../images'
import ServiceCard from './serviceCard'
import Title from './title'

const ServicesFeatures = ({color,data,bgColor}) => {
  return (
        <section style={{ backgroundColor: bgColor}} className='nc-features w-full h-max relative py-16'>
            <Title title={'Features'} center={false}/> 
            <div className='hidden sm:flex absolute  left-0 top-[10rem]'>
                <img src={FEATURES} alt="" />
            </div>
            <div className='pt-10'>
                <div className='flex items-center justify-center flex-col lg:grid lg:grid-cols-2 bg-[#E9E9E9] w-max gap-10 p-8 h-max mx-auto xl:p-10 '>
                    {data.map((item) =>
                    <ServiceCard key={item.id} data={item} color={color} />
                    )}
                </div>
            </div> 
        </section>
    )
}

export default ServicesFeatures
