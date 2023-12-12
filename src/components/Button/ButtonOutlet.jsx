import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";

const ButtonOutlet = ({lable, link}) => {
  return (
    <a href={link} target='_blank' className='text-center font-normal text-lg text-white bg-transparent border-b-2 inline-block border-primery rounded py-2 my-4 px-2 gap-x-2'> <span className='flex items-center'>{lable} <GoArrowUpRight className='text-3xl'/></span> </a>
  )
}

export default ButtonOutlet