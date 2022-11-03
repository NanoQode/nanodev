import React from 'react'
import { board, board1, board2, board3, BUSINESS, line } from '../images'
import Card from './card'

const Services = () => {
  return (
    <div className='mb-20 relative'>
      <div className='-mt-8 absolute -z-20 left-[35em] xl:left-[50em] 2xl:left-[80%]'>
        <img src={BUSINESS} className='' alt="" />
      </div>
      <div className='flex flex-col items-center justify-center p-5'>
        <h4 className='font-semibold'>Services</h4>
        <h3 className='text-4xl font-bold'>What we do Best!</h3>
        <img src={line} className='w-1/3 -ml-12 2xl:w-60' alt="" />
      </div>
      <div className='flex flex-col space-y-5 justify-center sm:flex-row items-center sm:space-x-3 px-4 '>
        <div className='hidden'>
          <Card
            img={board2}
            title={'Web Design'}
            

          />
     </div>
        <Card 
          img={board2}
          title={'Web Design'}
          
         />
        <Card 
          img={board}
          title={'Marketing'}
          
          


         />
        <Card 
          img={board3}
          title={'Telephony'}

         />
        <Card 
          img={board1}
          title={'Hosting'}
          
          

         />
      </div>
    </div>
  )
}

export default Services
