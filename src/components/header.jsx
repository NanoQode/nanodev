import React, { useState } from 'react'
import { down, email, facebook, home, instaw, logo, twitter, vimeo, youtube } from '../images/index'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [menu, setMenu] = useState(false)

  const toggle = () => {
    setMenu(prev => !prev)
  }

  return (
    <header>
      <section className='bg-[#DA452C] w-full  justify-between sm:px-10 h-[70px] p-3 flex'>
        <div className='flex items-center text-white space-x-1'>
          <img src={email} alt="" />
          <h3>
            infi@nanoqodee.com
          </h3>
        </div>
        <div className='hidden lg:flex items-center text-white space-x-1'>
          <img src={home} alt="" />
          <h3>
            888 Sargent Ave Winnipeg, Manitoba, R3E 0C7, Canada
          </h3>
        </div>
        <div className='flex items-center space-x-3 cursor-pointer'>
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={instaw} alt="" />
          <img src={vimeo} alt="" />
          <img src={youtube} alt="" />
        </div>
      </section>
      <section className='bg-[#E9E9E9] w-full h-[100px] flex items-center justify-around sm:justify-between pr-4 sm:px-10 relative'>
        <div className=''>
          <img src={logo} alt="logo" />
        </div>
        <nav className=' items-center space-x-4 font-semibold text-sm text-[#333333] cursor-pointer hidden lg:flex'>
          <p >Home </p>
          <p className='items-center flex space-x-2'>Websites
            <img src={down} className='ml-1 w-full object-contain' alt="" />
          </p>
          <p className='flex space-x-2 items-center'>Marketing
            <img src={down} className='ml-1 w-full object-contain' alt="" />
          </p>
          <p>Telephony </p>
          <p>Hosting </p>
          <p>Blog </p>
          <p>About </p>
        </nav>
        <div className='hidden lg:flex bg-[#5AA6B1] p-4 text-white w-max'>
          +1 (800) 361-2961
        </div>
        {/* mobile */}
        <div className='flex lg:hidden'>
          {!menu ? <AiOutlineMenu onClick={toggle} className=' text-2xl font-bold' /> : <AiOutlineClose onClick={toggle} className='text-2xl text-red-500' />}
        </div>
        
        {menu &&
          <section className='flex items-center rounded-xl font-semibold flex-col bg-white p-7 shadow-xl w-[250px] right-4 absolute h-max top-20 space-y-6 justify-center'>
            <p >Home </p>
            <p className='items-center flex space-x-2'>Websites
              <img src={down} className='ml-1 w-full object-contain' alt="" />
            </p>
            <p className='flex space-x-2 items-center'>Marketing
              <img src={down} className='ml-1 w-full object-contain' alt="" />
            </p>
            <p>Telephony </p>
            <p>Hosting </p>
            <p>Blog </p>
            <p>About </p>
          </section>}
      </section>
    </header>
  )
}

export default Header
