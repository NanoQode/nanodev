import React from 'react'
import { CallHero, Design } from '../components'
import { designData2, designData3 } from '../constant'
import { ABOUT, aboutimg, aboutweb, CHOOSE, code, code3, DESIGN, line } from '../images'

const About = () => {
  return (
    <main>
      {/* Banner start */}
      <section className='w-full relative bg-[#EBF4F6] h-max py-16 overflow-hidden'>
        <div className='container mx-auto'>
          {/* Banner text */}
          <div className='flex flex-col items-center justify-center'>
            <h3 className='font-bold text-fs60 mmd:text-fs48'>About</h3>
            <img src={line} className='w-40' alt="" />
            <h4 className='font-regular text-center text-fs18  sm:w-[582px] mt-12 mb-20 mmd:my-8'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </h4>
          </div>
          {/* Banner Image */}
          <div className='lg:mx-20 relative'>
            <img src={aboutweb} className='w-full max-w-[1200px]' alt="" />
          </div>
        </div>
        <div className='hidden lg:flex absolute bottom-4 right-0 '>
          <img src={ABOUT} alt="" />
        </div>
      </section>
      {/* Banner End */}
      {/* ACHIEVEMENT Start */}
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='flex flex-col w-[300px] sm:w-[600px] lg:w-[800px] mb-10 msm:w-full'>
            <h4 className='font-medium font-inter text-fs16 sm:w-[450px] mb-7'>
              ACHIEVEMENT
            </h4>
            <h3 className='text-fs36 font-inter font-bold'>interior customization with Danaanz, best quality with professional workers</h3>
            <img src={line} className='w-80' alt="" />
          </div>
          <div className='flex flex-wrap items-center space-x-15 mlg:space-x-8 mt-20 mmd:mt-10 lg:mx-auto  lg:flex-row justify-center msm:space-x-0'>
            <img src={aboutimg} alt="" className='w-[883px] mxl:w-[828px] mlg:w-[750px] mmd:w-[500px] msm:w-full' />
            <article className='bg-[#5AA6B1] w-[252px]  mlg:w-[174px] h-[525px] mxl:h-[493px] mlg:h-[446px] mmd:h-[294px] flex items-center space-y-10 mmd:space-y-4 mlg:space-y-6 justify-center flex-col lg:mt-0 msm:w-full'>
              <div className='flex flex-col text-white items-center'>
                <h2 className='text-fs52 mlg:text-fs36 font-regular font-inter text-white'>350+</h2>
                <p className='text-fs16 font-regular font-inter text-white'>Project Completed</p>
              </div>
              <div className='flex flex-col text-white items-center'>
                <h2 className='text-fs52 mlg:text-fs36 font-regular font-inter text-white'>23+</h2>
                <p className='text-fs16 font-regular font-inter text-white'>Professional Teams</p>
              </div>
              <div className='flex flex-col text-white items-center'>
                <h2 className='text-fs52 mlg:text-fs36 font-regular font-inter text-white'>15+</h2>
                <p className='text-fs16 font-regular font-inter text-white'>Years Experience</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* ACHIEVEMENT End */}
      <Design data={designData2}
        subtitle={'WHY CHOOSE US?'}
        btn={true}
        img2={code}
        img={DESIGN}
        title={'Here are a few reasons why our customers choose NanoQode.'} />
      <Design data={designData3}
        subtitle={''}
        btn={true}
        img2={code3}
        reverse
        img={CHOOSE}
        title={''} />
      <CallHero />
    </main>

  )
}

export default About
