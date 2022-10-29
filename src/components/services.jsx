import React from 'react'
import { board, board1, board2, board3, BUSINESS, line } from '../images'
import Card from './card'

const Services = () => {
  return (
    <div className='mb-20'>
      <div className='-mt-8 absolute -z-20 left-[35em] xl:left-[50em] 2xl:left-[80%]'>
        <img src={BUSINESS} className='' alt="" />
      </div>
      <div className='flex flex-col items-center justify-center p-5'>
        <h4>Services</h4>
        <h3 className='text-4xl font-bold'>What we do Best!</h3>
        <img src={line} className='w-1/3 -ml-12 2xl:w-60' alt="" />
      </div>
      <div className='flex flex-col space-y-5 justify-center sm:flex-row items-center sm:space-x-3 px-4 '>
        <Card 
          img={board2}
          title={'Web Design'}
          color={'#5AA6B1'}
          height={'232px'}
         />
        <Card 
          img={board}
          title={'Marketing'}
          color={'#5AA6B1'}
          height={'232px'}


         />
        <Card 
          img={board3}
          title={'Telephony'}
          color={'#DA4B27'}
          height={'277px'}

         />
        <Card 
          img={board1}
          title={'Hosting'}
          color={'#5AA6B1'}
          height={'232px'}

         />
      </div>
    </div>
  )
}

export default Services
