import React from 'react'
import { line, PORTFOLIO, read, webimg, webimg2, webimg3, webimg4, webimg5 } from '../images'

const Portfolio = () => {
    const data =[
        {
            id:1,
            title: 'Medical Website',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ',
            img:webimg3
        },
        {
            id:2,
            title: 'Cryptocurrency Website',
            body: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum,  ',
            img:webimg2
        },
        {
            id:3,
            title: 'Bitcoin investment Web ',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ',
            img:webimg
        },
        {
            id:4,
            title: 'Body builder Web',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ',
            img:webimg4
        },
        {
            id:5,
            title: 'Dental Website',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ',
            img:webimg5
        },
    ]
  return (
      <section className='bg-[#EBF4F6] w-full relative py-24'>
        <div className='container mx-auto'>
          <p className='font-semibold font-inter text-fs20 mb-4 text-center'> Portfolio</p>
          <div className='flex flex-col items-center justify-center '>
              <h3 className='text-fs48 font-bold font-inter'>Our Award-Winning Website Portfolio</h3>
              <img src={line} className='' alt="" />
          </div>
          <div className='flex flex-col items-center justify-center   sm:flex-row sm:justify-start sm:items-start flex-wrap mt-10 '>
              
          {data.map((res) =>
          <div className='shadow-xl porfolio-outer m-3 sm:w-[416px] bg-white h-max rounded-lg p-5' key={res.id}>
              <img src={res.img} className='w-100 ' alt="" />
              <h2 className='font-bold font-inter mt-5 text-fs31'>
                 {res.title}
              </h2>
              <p className='font-inter font-semiBold text-fs14'>
                 {res.body}
              </p>
           <img src={read} alt="" />
            </div>
              )}
          </div>
          <div className='absolute  left-0 bottom-[4rem]  '>
              <img src={PORTFOLIO} alt="" />
          </div>
          <div className='flex items-center justify-center'>
              <button className='btn green-btn py-2 px-8 text-white my-10'>See All Portfolio </button>
          </div>
          </div>
         
    </section>
  )
}

export default Portfolio
