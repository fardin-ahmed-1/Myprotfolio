import React from 'react'
import { Link } from 'react-router-dom'
import ButtonOutlet from '../../../components/Button/ButtonOutlet'
import ExLink from '../../../components/Button/ExLink'
import { BiLinkExternal } from "react-icons/bi";
import { IoIosEye } from "react-icons/io";
import Pera from '../../../components/Shared/Content/Pera';

const Portfolio = ({ portfolio }) => {
    const { projectName, image, description, livePreview } = portfolio
    return (
        <div className='border border-bordertrs bg-backgroundtrs hover:border-primery duration-300 rounded-lg'>
            <img className='rounded-t-lg' src={image} alt="" />
            <div className='mt-2 p-4'>
                {/* <h1  className='text-xl font-medium text-neutral-200 mb-2'>{}</h1> */}
                <Pera pera={projectName.slice(0,30)}/>
                <p className='text-base font-normal text-textcolor'>{description.slice(0,80)}</p>
                {/* <Link className='text-lg font-normal text-primery'>more</Link> */}
                {/* <a cl href={livePreview}></a> */}
               <div className='flex  mt-3 mb-1'>
               <ExLink lable="Preview" icon={IoIosEye} link={livePreview}/>
               </div>
            </div>
        </div>
    )
}

export default Portfolio