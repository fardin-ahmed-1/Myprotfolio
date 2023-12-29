import React from 'react'
import Container from '../../Shared/Container'
import BreadCrumbsTitle from '../Content/BreadCrumbsTitle'
import { Link } from "react-router-dom";

const BreadCrumbs = ({pageName, link}) => {

    return (
      <div className='bg-backgroundtrs shadow-lg h-64 flex items-center justify-center'>
        <Container>
          <div>
            <BreadCrumbsTitle page='About Me' />
            <div className="text-base breadcrumbs text-white">
              <ul>
                <li><Link to={link}>Home</Link></li>
                <li><a>{pageName}</a></li>
               
              </ul>
            </div>
  
          </div>
  
        </Container>
      </div>
    )
  }
  

export default BreadCrumbs