import React from 'react'
import { servicesData } from '../constant'
import { board, board1, board2, board3, BUSINESS, line } from '../images'
import Card from './card'
import Title from './title'
import Title2 from './title2'

const Services = ({title,img,subtitle,data}) => {
  return (
    <section className='py-16 relative nc-services'>
      <div className='container mx-auto'>
      <div className='nc-section-text   absolute  '>
          <h4>Buisness</h4>
      </div>
     <Title2 title={title} subtitle={subtitle} /> 
      <div className='nc-cards-outer mx-auto flex flex-col  mt-10 justify-center sm:flex-row items-center sm:space-x-1'>
       
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
    </section>
  )
}

export default Services
