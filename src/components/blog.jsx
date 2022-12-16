import React from 'react';
import { blogPost } from '../constant';
import { BLOGS } from '../images';
import BlogCard from './blogCard';

const BlogPost = () => {
  return (
        <div className='bg-[#F5F5F5] w-full h-max pt-4 pb-24'>
            <section className='relative w-full '>
                <div className='hidden sm:flex absolute right-10 -top-40 '>
                    <img src={BLOGS} alt="" />
                </div>
                <div className='container mx-auto'>
                    <div className='my-20 relative'>
                        <h3 className='font-bold text-fs48 mt-10 font-inter'>All posts</h3>
                        <div className='w-full h-0.5 bg-[#DA452C] px-20 mt-6' />
                    </div>
                    <div className='flex flex-col  items-center justify-center  space-y-16'>
                        {blogPost.map((item) =>  
                            <BlogCard key={item.id} data={item}/>
                        )}
                    </div>
                </div>
            </section> 
        </div>
    )
}

export default BlogPost
