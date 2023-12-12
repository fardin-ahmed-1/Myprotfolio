import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

const MenuItems = () => {
    const menuItems = [
        {
            address: 'home',
            label: 'Home'
        },
        {
            address: 'about',
            label: 'About'
        },
        {
            address: 'experince',
            label: 'Experince'
        },
        {
            address: 'portfolios',
            label: 'Portfolios'
        },
        {
            address: 'contact',
            label: 'Contact'
        },
    ]

    return (
        <div className=''>
            {
                menuItems.map(item => <ScrollLink 
                    to={item.address}
                     smooth={true}
                    duration={500}
                    activeClass="active"
                    className='text-base cursor-pointer md:text-lg text-center font-normal md:font-medium  text-white mr-4 '>
                    {item.label}
                </ScrollLink>)
            }
        </div>
    )
}

export default MenuItems