import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({lable, link}) => {
  return (
    <div>
        <Link to={link} className='text-center font-medium text-lg text-white bg-primery rounded py-3 my-6 px-8 inline-block'>{lable}</Link>
    </div>
  )
}

export default Button