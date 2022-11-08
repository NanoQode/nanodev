import React, { useEffect, useState } from 'react'
import { down, email, facebook, home, instaw, logo, twitter, vimeo, youtube } from '../images/index'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { menuOption, menuOption2 } from '../constant'

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [navOption, setNavOption] = useState('')
  const [menuTab, setMenuTab] = useState('websites')
  const [headerTab, setHeaderTab] = useState('Marketing')
  const [tab2, setTab2] = useState(false)
  const [tab, setTab] = useState(false)
  const navigate = useNavigate()
  const pathname = window.location.pathname


  const setTabOption = (name) => {
    setHeaderTab(name.title)
    setNavOption(name.link)
  }
  const setTabOption2 = (name) => {
    setMenuTab(name.title)
    setNavOption(name.link)
    // selectOption()
  }

  const selectOption2 = () => {
    setTab2(prev => !prev)
  }
  const selectOption = () => {
    setTab(prev => !prev)
  }

  const toggle = () => {
    setMenu(prev => !prev)
  }

  const menuNavigation = () => {
    navigate(`/${navOption}`)
  }

  useEffect(() => {
    menuNavigation()
  }, [navOption])

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
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className=' items-center space-x-4 font-semibold text-sm sm:text-lg text-[#333333] cursor-pointer hidden lg:flex '>
          <Link to='/'>
            <p className={pathname === '/' ? 'text-[#DA452C]' : ''} >Home </p>
          </Link>

          <p onClick={selectOption2} className={pathname === '/webdesign' || pathname === '/mobileapp' || pathname === '/ecommerce' || pathname === '/software' ? 'text-[#DA452C] flex items-center space-x-2' : 'flex items-center space-x-2'} >{menuTab}
            
            <img src={down} className='w-4 ml-2' alt="" />
            {tab2 ?
              <div className='z-50 flex flex-col absolute top-20 left-[27%] p-4 text-sm rounded bg-[#DA452C] text-white'>
                {menuOption.map((item) => <p className='hover:text-[#5AA6B1]' onClick={() => setTabOption2(item)}>{item.title}</p>)}
              </div> : null}
          </p>
          {/*  */}
          <p onClick={selectOption} className={pathname === '/seo' || pathname === '/social' || pathname === '/marketing'  ? 'text-[#DA452C] flex items-center space-x-2' : 'flex items-center space-x-2'}>{headerTab}

            <img src={down} className='w-4 ml-2' alt="" />
            {tab ?
              <div className='z-50 flex flex-col absolute top-20 left-[40%] p-4 text-sm rounded bg-[#DA452C] text-white'>
                {menuOption2.map((item) => <p className='hover:text-[#5AA6B1]' onClick={() => setTabOption(item)}>{item.title}</p>)}
              </div> : null}
          </p>
       
          <p className={pathname==='/telephony' ? 'text-[#DA452C]' : ''} onClick={() => setNavOption('telephony')}>Telephony </p>
          <p className={pathname==='/hosting' ? 'text-[#DA452C]' : ''} onClick={() => setNavOption('hosting')}>Hosting </p>
          <p className={pathname==='/blog' ? 'text-[#DA452C]' : ''} onClick={() => setNavOption('blog')}>Blog </p>
          <p className={pathname==='/about' ? 'text-[#DA452C]' : ''} onClick={() => setNavOption('about')}>About </p>
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
