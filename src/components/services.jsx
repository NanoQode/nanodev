import React from 'react'
import { board, board1, board2, board3, BUSINESS, line } from '../images'
import Card from './card'

const Services = () => {
  const data = [
    {
      id: 1,
      title: 'Web Design',
      img: board2,
      color: '#5AA6B1'
    },
    {
      id: 2,
      title: 'Marketing',
      color: '#5AA6B1',
      img: board3,
    },
    {
      id: 3,
      title: 'Web Design',
      color: '#DA4B27',
      img: board
    },
    {
      id: 4,
      title: 'Web Design',
      color: '#5AA6B1',
      img: board1
    },
  ]
  return (
    <div>
      <div>
        <img src={BUSINESS} alt="" />
      </div>
      <div className='flex flex-col items-center justify-center p-5'>
        <h4>Services</h4>
        <h3 className='text-4xl font-bold'>Our Partners in Your Success</h3>
        <img src={line} className='w-3/4 -ml-20' alt="" />
      </div>
      <div className='flex items-center space-x-3 px-4'>
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
