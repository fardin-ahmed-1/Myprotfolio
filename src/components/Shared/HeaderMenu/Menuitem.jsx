import React from 'react'
import { Link } from 'react-router-dom';
const Menuitem = ({ item }) => {
    const { address, label, icon: Icon } = item
    return (
        <Link
            to={address} >
            <h1 className='flex items-center gap-2 text-base cursor-pointer text-center font-normal md:font-medium  text-white hover:bg-backgroundtrs py-2 hover:shadow-md px-2 duration-300 rounded-lg'><Icon />{label} </h1>
        </Link>
    )
}

export default Menuitem