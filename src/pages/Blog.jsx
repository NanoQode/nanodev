import React from 'react'
import BlogPost from '../components/blog'
import { blogH } from '../images'

const Blog = () => {
  return (
    <div>
      <section className='bg-[#EBF4F6] w-full h-max  relative z-40 py-16'>
        <div className='container mx-auto'>
          <div className=' flex flex-col sm:flex-row justify-between items-center'>
            <div className='w-3/5'>
              <div className='max-w-[663px]'>
                <h3 className='text-fs16 font-inter uppercase text-[#232536] font-medium letter-3 mb-5'>Featured Post</h3>
                <h2 className='text-fs36 font-inter text-[#232536] font-bold mb-0'>
                  Step-by-step guide to choosing great font pairs
                </h2>
                <p className='my-4'>By John Doe   l   May 23, 2022 </p>
                <h4 className='mb-8  text-fs1628 text-[#6D6E76] font-inter font-regular'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </h4>
                <button className='btn btn-blue font-normal mt-5 w-253'>Read More  </button>
              </div>
            </div>
            <div className='w-2/5 flex items-center justify-center flex-col'>
              <img src={blogH} className='w-full' alt="" />
            </div>
          </div>
        </div>
      </section>
      <BlogPost />
    </div>
  )
}

export default Blog
