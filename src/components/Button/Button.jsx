import React from 'react'
const Button = ({ lable, handleClick, icon: Icon }) => {
  return (
    <button onClick={handleClick} className='text-center font-medium text-base text-white bg-backgroundtrs border border-bordertrs hover:bg-hoverbgtrs duration-300 rounded-lg py-3  px-4 flex items-center gap-2'> {Icon && <Icon className=' text-2xl' />} {lable}</button>
  )
}

export default Button