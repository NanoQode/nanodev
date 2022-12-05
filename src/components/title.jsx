import React from 'react'
import { line } from '../images'

const Title = ({title,center}) => {
  return (
        <div className={center ? 'flex flex-col w-[800px] p-3 my-10' :'flex flex-col items-center justify-center'}> 
          <h3 className='nc-heading font-bold font-inter'>{title ?? ''}</h3>
          <img src={line} className='w-80' alt="" />
        </div>
  )
}

export default Title
