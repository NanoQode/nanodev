import React, { useRef } from 'react' 
import { priceData } from '../constant'
import { arrow, arrow2,  check11, DEVELOPMENT, line } from '../images'

const Affordable = () => {
  const newRef = useRef()

  const handleMoveNext = () => {
   const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 300
  }
  const handleMovePrev = () => {
   const slider = document.getElementById('slider')
   slider.scrollLeft = slider.scrollLeft - 300
  }

  return (
    <section className='relative affordable-services py-20'>
      <div className='container mx-auto'>
      <div className='flex flex-col items-center justify-center'>
        <h3 className='font-bold text-hd font-inter'>Affordable Services</h3>
        <img src={line} className='w-1/3 -ml-12 2xl:w-60' alt="" />
      </div>
      <div className='mt-10 lg:mt-40 mb-20 flex items-center justify-center sm:justify-start relative'>
        <div className='hidden sm:flex -top-10 lg:-top-32 z-20 absolute'>
          <img src={DEVELOPMENT} alt="" />
        </div>
        <div className='hidden md:flex items-center space-x-4 relative ml-32 z-30' >
          <div onClick={handleMovePrev} className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
            <img  className='cursor-pointer' src={arrow} alt="" />
          </div>
          <div onClick={handleMoveNext} className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
            <img className='cursor-pointer' src={arrow2} alt="" />
          </div>
        </div>
        <div id='slider' className='overflow-x-scroll w-full scrollbar-hide  overflow-y-hidden scroll whitespace-nowrap scroll-smooth flex items-center flex-col justify-center md:grid grid-cols-2 lg:flex-row  lg:space-x-4 mb-20 ml-6'>
          {priceData.map((item) =>
            <div key={item.id} className=' z-20 relative'>
              <img src={item.img} className='w-60' alt="" />
              <div className='absolute top-2'>
                <h1 className='text-6xl mb-16 text-center text-white relative ml-16 mt-5'> <span className='top-2 -ml-3 text-xl font-light absolute'>$</span>
                  {item.title} <small className='text-sm -ml-5'>/mo</small></h1>
                <div style={{
                  color: item.color
                }} className={` bg-white -ml-4 py-1 px-5 w-max rounded-r-xl font-bold text-xl capitalize`}>
                  <h3 className='ml-5'>{item.subTitle}</h3>
                </div>
                <h4 className='font-light text-sm mb-6 ml-6 capitalize text-white'>starting from</h4>
                {item.content.map((res) =>
                  <div className='flex flex-col space-y-2 text-white'>

                    <p className='flex items-center space-x-2 ml-2'>
                      <img src={check11} alt="" />{res}</p>
                  </div>
                )}
                <button style={{
                  color: item.color,
                  border: `1px solid ${item.color}`,
                }} className={`-bottom-[5rem] font-semibold left-14 rounded-full shadow-sm capitalize py-2 px-6 bg-white w-max border-2 absolute`}>learn more</button>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    
    
    </section>
  )
}

export default Affordable
