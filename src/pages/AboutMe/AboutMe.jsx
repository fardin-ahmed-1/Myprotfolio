import React from 'react'
import BreadCrumbs from '../../components/Shared/BreadCrumbs/BreadCrumbs'
import Intrudaction from './Intrudaction'
import MySkills from '../Home/MySkills'


const AboutMe = () => {
  return (
    <div>
        <BreadCrumbs link='/' pageName='About Me'/>
        <div>
          <Intrudaction/>
        </div>
        <MySkills/>
    </div>
  )
}

export default AboutMe