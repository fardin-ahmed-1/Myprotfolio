import React from 'react'
import Pera from '../../../components/Shared/Content/Pera'

const Work = ({ work }) => {
    const {icon:Icon, description, title}=work
    return (
        <div className='bg-[#ffffff26] px-3 py-4 border border-bordertrs rounded-lg hover:border-white duration-300'>
            <div className='flex justify-center'>
            <Icon className='text-7xl bg-[#ffffff26] rounded-full p-2 text-white shadow text-center border border-bordertrs'/>
            </div>
            <h1 className='text-xl font-medium text-white mt-3 mb-1 text-center'>{title}</h1>
            <p className='text-sm lg:text-[12px] font-light text-white text-center md:text-center lg:text-left'>{description}</p>
        </div>
    )
}

export default Work