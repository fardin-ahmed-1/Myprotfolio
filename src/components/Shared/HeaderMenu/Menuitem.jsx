import React from 'react'
import { Link as ScrollLink } from 'react-scroll';


const Menuitem = ({ item }) => {
    const { address, label, icon: Icon } = item
    return (
        <ScrollLink
            to={address}
            smooth={true}
            duration={500}
            activeClass="active">
            <h1 className='flex items-center gap-2 text-base cursor-pointer text-center font-normal md:font-medium  text-white hover:bg-backgroundtrs py-2 hover:shadow-md px-2 duration-300 rounded-lg'><Icon />{label} </h1>
        </ScrollLink>
    )
}

export default Menuitem