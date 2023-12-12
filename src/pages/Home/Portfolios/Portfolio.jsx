import React from 'react'
import { Link } from 'react-router-dom'
import ButtonOutlet from '../../../components/Button/ButtonOutlet'

const Portfolio = ({ portfolio }) => {
    const { projectName, image, description, livePreview } = portfolio
    return (
        <div className='border border-neutral-500 rounded-lg'>

            <img className='rounded-t-lg' src={image} alt="" />

            <div className='mt-2 p-4'>
                <h1  className='text-xl font-medium text-neutral-200 mb-2'>{projectName.slice(0,30)}</h1>
                <p className='text-base font-normal text-textcolor'>{description.slice(0,200)}</p>
                {/* <Link className='text-lg font-normal text-primery'>more</Link> */}
                {/* <a cl href={livePreview}></a> */}
                <ButtonOutlet lable='View Project' link={livePreview} />
            </div>

        </div>
    )
}

export default Portfolio