import React from 'react'
import Button from '../../../Button/Button'
import Menuitem from '../Menuitem'
import { MdEventAvailable } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

const DropdownItems = ({menuItems, mobileMenu}) => {
  return (
    <div className='my-5 block md:hidden !z-0 '>
    <div className={`flex flex-col overflow-y-auto gap-4 max-h-screen  absolute top-[67px] sm:top-[95px]  lg:top-24 w-56 duration-500 background ${mobileMenu ? 'right-0' : '-right-60'}`}>
        <div className='flex flex-col items-start gap-2 p-4 border border-bordertrs h-screen'>
            {
                menuItems.map((item, index) => <Menuitem item={item} key={index} />)
            }
            <Button icon={MdEventAvailable} lable='Hire Me' />
            <div className='border-t border-neutral-400 my-3 '>
            <div className='flex items-center justify-center gap-3 mt-4'>
               <a target='_blank' href="https://github.com/fardin-ahmed-1">
               <FaGithub className='text-white text-[40px] border border-bordertrs rounded-full p-[7px]'/>
               </a>
               <a target='_blank' href="https://www.linkedin.com/in/fardinahmed2020/">
               <FaLinkedin className='text-white text-[40px] border border-bordertrs rounded-full p-[7px]'/>
               </a>
               <a target='_blank' href="https://www.facebook.com/fardinahmed2020">
               <FaFacebook className='text-white text-[40px] border border-bordertrs rounded-full p-[7px]'/>
               </a>
               <a target='_blank' href="https://www.fiverr.com/fardin_ahmed_1">
               <TbBrandFiverr className='text-white text-[40px] border border-bordertrs rounded-full p-[7px]'/>
               </a>

            </div>
            </div>
        </div>
       
    </div>
</div>
  )
}

export default DropdownItems