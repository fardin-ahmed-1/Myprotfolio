import React from 'react'
import { Link } from 'react-router-dom'

const ExLink = ({link, lable, icon:Icon}) => {
  return (
    <Link to={link} className='text-center font-medium text-base text-white bg-backgroundtrs border border-bordertrs hover:bg-hoverbgtrs duration-300 rounded-lg py-[10px]  px-4 flex items-center gap-2 w-fit'> {Icon && <Icon className=' text-2xl' />} {lable}</Link>
  )
}

export default ExLink