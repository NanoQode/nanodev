import React from 'react'
import { line } from '../images'

const Title2 = ({ title, subtitle }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h4 className='font-semibold font-inter nc-sub-heading mb-2 '>{title ?? ''}</h4>
      <h3 className='font-inter font-bold nc-heading  mlg:text-fs36'>{subtitle ?? ''}</h3>
      <img src={line} className='w-40 -ml-5 sm:w-60' alt="" />
    </div>
  )
}

export default Title2
