import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { SiWheniwork } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import Menuitem from './Menuitem';
import Button from '../../Button/Button';
import { MdEventAvailable } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import DropdownItems from './MobileMenu/DropdownItems';
const MenuItems = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const menuItems = [
        {
            address: 'home',
            icon: AiOutlineHome,
            label: 'Home'
        },
        {
            address: 'about',
            icon: AiOutlineInfoCircle,
            label: 'About'
        },
        {
            address: 'experince',
            icon: IoSettingsOutline,
            label: 'Experince'
        },
        {
            address: 'portfolios',
            icon: SiWheniwork,
            label: 'Portfolios'
        },
        {
            address: 'contact',
            icon: RiCustomerService2Fill,
            label: 'Contact'
        },
    ]

    return (
        <div className='flex items-center justify-between'>
            <div className='gap-2 lg:gap-5 hidden md:flex'>
                <div className='flex items-center gap-2 bg-backgroundtrs px-3 md:px-2 lg:px-3 rounded-lg py-1 border border-bordertrs backdrop-blur-[50px] flex-1'>
                    {
                        menuItems.map(item => <Menuitem item={item} />)
                    }
                </div>
                <div className=''>
                    <Button icon={MdEventAvailable} lable='Hire Me' />
                </div>
            </div>

            <div className='justify-self-end items-center block md:hidden text-white text-4xl'>
                <button onClick={() => setMobileMenu(!mobileMenu)}>
                    {
                        mobileMenu ? <RxCross1 />: <LuMenu/>
                    }
                </button>
            </div>
           <DropdownItems menuItems={menuItems} mobileMenu={mobileMenu}/>
        </div>
    )
}

export default MenuItems