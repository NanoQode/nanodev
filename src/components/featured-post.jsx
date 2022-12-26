import React from 'react';  

const FeaturedPost = ({heading,authorName,publishedDate,description,img}) => {
  return (
    <section className='featured-post bg-[#EBF4F6] w-full h-max  relative z-40 py-16'>
        <div className='container mx-auto'>
          <div className=' flex flex-col flex-wrap sm:flex-row justify-between items-center'>
            <div className='w-3/5 pr-2 msm:w-full'>
              <div className='max-w-[663px]'>
                <h3 className='text-fs16 font-inter uppercase text-[#232536] font-medium letter-3 mb-5'>Featured Post</h3>
                <h2 className='text-fs36 font-inter text-[#232536]  mmd:text-fs32 font-bold mb-0'>
                  {heading}
                </h2>
                <p className='my-4'>By {authorName} l {publishedDate} </p>
                <h4 className='mb-8 mmd:mb-4 text-fs1628 text-[#6D6E76] font-inter font-regular'>
                  {description}
                </h4>
                <button className='btn btn-blue font-normal mt-5 w-200'>Read More  </button>
              </div>
            </div>
            <div className='w-2/5 msm:w-full msm:mt-10 flex items-center justify-center flex-col'>
              <img src={img} className='w-full' alt="" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default FeaturedPost

