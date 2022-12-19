import React, { useEffect, useState } from 'react'
import { down, email, facebook, home, instaw, logo, twitter, vimeo, youtube } from '../images/index'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { menuOption, menuOption2 } from '../constant'

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [navOption, setNavOption] = useState('')
  const [menuTab, setMenuTab] = useState('Websites')
  const [headerTab, setHeaderTab] = useState('Marketing')
  const [tab2, setTab2] = useState(false)
  const [tab, setTab] = useState(false)
  const navigate = useNavigate()
  const pathname = window.location.pathname


  const setTabOption = (name) => {
    // setHeaderTab(name.title)
    setNavOption(name.link)
    setMenu(false)
  }
  const setTabOption2 = (name) => {
    // setMenuTab(name.title)
    setNavOption(name.link)
    setMenu(false)

  }

  const selectOption2 = () => {
    setTab2(prev => !prev)
    setTab(false)
  }
  const selectOption = () => {
    setTab(prev => !prev)
    setTab2(false)

  }
  const handleMouseOver = () => {
    setTab2(true)
  };

  const handleMouseOut = () => {
    setTab2(false)
  };

  const handleMouseOver2 = () => {
    setTab(true)
  };

  const handleMouseOut2 = () => {
    setTab(false)
  };

  const toggle = () => {
    setMenu(prev => !prev)
  }

  const menuNavigation = () => {
    setMenu(false)
    setTab(false)
    setTab2(false)
    navigate(`/${navOption}`)
  }

  useEffect(() => {
    menuNavigation()
  }, [navOption])

  return (
    <header>
      <section className='bg-nc-orange w-full flex    h-[70px]  '>
        <div className='container mx-auto flex justify-center items-center xs:justify-between flex-col xs:flex-row'>
          <div className='flex items-center text-white space-x-1 pb-2 xs:pb-0'>
            <img src={email} alt="" />
            <h3 className='font-normal font-inter'>
              info@nanoqode.com
            </h3>
          </div>
          <div className='hidden lg:flex items-center text-white space-x-1'>
            <img src={home} alt="" />
            <h3 className='font-normal font-inter'>
              6 Indell Lane, Brampton ON L6T 3Y3, Canada
            </h3>
          </div>
          <div className='flex items-center space-x-3 sm:space-x-6 cursor-pointer pl-4 sm:pl-0'>
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={instaw} alt="" />
            <img src={vimeo} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
      </section>
      <section className='bg-[#E9E9E9] w-full py-2'>
        <div className='container mx-auto flex items-center justify-around sm:justify-between relative'>
          <div className='site-logo'>
            <Link to='/'>
              <img src={logo} alt="logo" className='mlg:w-[200px]'/>
            </Link>
          </div>
          <nav className='nc-navbar items-center xl:space-x-8 lg:space-x-4 font-semibold text-sm sm:text-lg text-[#333333] cursor-pointer hidden lg:flex '>
            <Link to='/' className="font-inter font-medium"> Home  </Link>

            <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} className={pathname === '/webdesign' || pathname === '/mobileapp' || pathname === '/ecommerce' || pathname === '/software' ? 'text-[#DA452C] flex items-center space-x-2' : 'flex items-center space-x-2'} >{menuTab}

              <img src={down} className='w-4 ml-2' alt="" />
              {tab2 ?
                <span className='z-50 flex flex-col absolute top-[98%] left-[0%] xl:left-[0%] p-2 text-sm rounded bg-[#DA452C] text-white 2xl:left-[0rem]'>
                  {menuOption.map((item) => <a className='hover:text-[#5AA6B1]' onClick={() => setTabOption2(item)}>{item.title}</a>)}
                </span> : null}
            </div>
            <div onMouseOver={handleMouseOver2} onMouseLeave={handleMouseOut2} className={pathname === '/seo' || pathname === '/social' || pathname === '/marketing' ? 'text-[#DA452C] flex items-center space-x-2' : 'flex items-center space-x-2'}>{headerTab}

              <img src={down} className='w-4 ml-2' alt="" />
              {tab ?
                <span className='z-50 flex flex-col absolute top-[98%] left-[0%] xl:left-[0%] p-2 text-sm rounded bg-[#DA452C] text-white 2xl:left-[0rem]'>
                  {menuOption2.map((item) => <a className='hover:text-[#5AA6B1]' onClick={() => setTabOption(item)}>{item.title}</a>)}
                </span> : null}
            </div>
            {[
              ['Telephony', '/telephony'],
              ['Hosting', '/hosting'],
              ['Blog', '/blog'],
              ['About', '/about'],
            ].map(([title, url]) => (
              <Link to={url} className="font-inter font-medium hover:text-nc-orange">{title}</Link>
            ))}
          </nav>
          <button className="btn btn-blue  font-medium ml-auto lg:ml-0 mr-4 lg:mr-0">
            +1 (647)812-9492
          </button>
        {/* mobile menu */}
        <div className='flex lg:hidden'>
          {!menu ? <AiOutlineMenu onClick={toggle} className=' text-2xl font-bold' /> : <AiOutlineClose onClick={toggle} className='text-2xl text-red-500' />}
        </div>

        {menu &&
          <section className='flex items-center rounded-xl font-semibold flex-col bg-white p-7 shadow-xl w-[350px] right-4 absolute z-50 h-max top-20 space-y-6 justify-center'>
            <Link to='/'>
              <p onClick={() => setMenu(false)} className={pathname === '/' ? 'text-[#DA452C]' : ''} >Home </p>
            </Link>

            <p onClick={selectOption2} className={pathname === '/webdesign' || pathname === '/mobileapp' || pathname === '/ecommerce' || pathname === '/software' ? 'text-[#DA452C] flex items-center space-x-2' : 'flex items-center space-x-2'} >{menuTab}

              <img src={down} className='w-4 ml-2' alt="" />
              {tab2 ?
                <div className='z-50 flex flex-col absolute top-28 right-[7%] w-[250px] p-4 text-sm rounded bg-[#DA452C] text-white'>
                  {menuOption.map((item) => <p className='hover:text-[#5AA6B1]' onClick={() => setTabOption2(item)}>{item.title}</p>)}
                </div> : null}
            </p>
            <p onClick={selectOption} className={pathname === '/seo' || pathname === '/social' || pathname === '/marketing' ? 'text-[#DA452C] flex items-center space-x-2' : 'flex items-center space-x-2'}>{headerTab}

              <img src={down} className='w-4 ml-2' alt="" />
              {tab ?
                <div className='z-50 flex flex-col absolute  top-40 right-[7%]  p-4 text-sm rounded bg-[#DA452C] text-white w-[250px]'>
                  {menuOption2.map((item) => <p className='hover:text-[#5AA6B1]' onClick={() => setTabOption(item)}>{item.title}</p>)}
                </div> : null}
            </p>

            <p className={pathname === '/telephony' ? 'text-[#DA452C]' : ''} onClick={() => setNavOption('telephony')}>Telephony </p>
            <p className={pathname === '/hosting' ? 'text-[#DA452C]' : ''} onClick={() => setNavOption('web-hosting')}>Hosting </p>
            <p className={pathname === '/blog' ? 'text-[#DA452C]' : ''} onClick={() => setNavOption('blog')}>Blog </p>
            <p className={pathname === '/about' ? 'text-[#DA452C]' : ''} onClick={() => setNavOption('about')}>About </p>

          </section>}
        </div>
      </section>
    </header>
  )
}

export default Header
