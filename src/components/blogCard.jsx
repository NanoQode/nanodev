import React from 'react'

const BlogCard = ({data}) => {
  return (
      <div className='w-full flex flex-col  justify-center  items-center lg:flex-row'>
          <div className='blog-img'>
              <img src={data.img} alt="" className='w-full' />
          </div>
          <div className='flex pl-8 flex-col blog-listing-des'>
              <h3 className='text-[#5AA6B1] font-semibold letter-3 uppercase mb-5 text-fs16'>{data.title}</h3>
              <h2 className='font-bold text-fs36 text-[#232536] mb-4'>{data.subTitle}</h2>
              <p className='text-[#6D6E76] font-inter font-regular text-fs1628'>{data.body}</p>
          </div>
      </div>
  )
}

export default BlogCard
