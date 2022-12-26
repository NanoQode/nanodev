import React from 'react'

const BlogCard = ({data}) => {
  return (
      <div className='w-full flex flex-wrap justify-center  items-center '>
          <div className='blog-img w-[490px] mmd:w-1/2 msm:w-full'>
              <img src={data.img} alt="" className='w-full' />
          </div>
          <div className='flex pl-8 msm:pl-0 msm:pt-6 flex-col blog-listing-des mmd:w-1/2 msm:w-full'>
              <h3 className='text-[#5AA6B1] font-semibold letter-3 uppercase mb-5 mmd:mb-2 text-fs16'>{data.title}</h3>
              <h2 className='font-bold text-fs36 text-[#232536] mb-4  mmd:mb-2 mlg:text-fs2535'>{data.subTitle}</h2>
              <p className='text-[#6D6E76] font-inter font-regular text-fs1628'>{data.body}</p>
          </div>
      </div>
  )
}

export default BlogCard
