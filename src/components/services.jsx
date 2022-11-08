import React from 'react'
import { servicesData } from '../constant'
import { board, board1, board2, board3, BUSINESS, line } from '../images'
import Card from './card'

const Services = ({title,img,subtitle,data}) => {
  return (
    <div className='mb-20 relative'>
      <div className='-mt-8 absolute -z-20 left-[35em] xl:left-[50em] 2xl:left-[80%]'>
        <img src={img??''} className='' alt="" />
      </div>
      <div className='flex flex-col items-center justify-center p-5'>
        <h4 className='font-semibold'>{title??''}</h4>
        <h3 className='text-4xl font-bold'>{subtitle??''}</h3>
        <img src={line} className='w-1/3 -ml-12 2xl:w-60' alt="" />
      </div>
      <div className='flex flex-col space-y-5 justify-center sm:flex-row items-center sm:space-x-3 px-4 '>
        <div className='hidden'>
          <Card
            img={board2}
            title={'Web Design'}
            body={''}

          />
        </div>
        {data.map((item) =>
          <Card
            img={item.img}
            title={item.title}
            body={item.body}
            key={item.id}
          />
        )}
      </div>
    </div>
  )
}

export default Services
