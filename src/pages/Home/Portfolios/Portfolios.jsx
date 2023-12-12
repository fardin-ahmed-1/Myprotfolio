import React, { useEffect, useState } from 'react'
import Container from '../../../components/Shared/Container'
import { getportfolios } from '../../../Apis/GetMethod'
import Portfolio from './Portfolio'
import SectionLable from '../../../components/Shared/SectionLable'

const Portfolios = () => {
    const [loading, setLoading]=useState(false)
    const [allportfolios, setPortfolios]=useState([])

 
    useEffect(()=>{
        setLoading(true)
        getportfolios()
        .then(data=> {
            setPortfolios(data)
            setLoading(false)
        } )
    },[])
   
  return (
      <div className='pb-12 md:pb-16 '>
          <Container>
            <div className='mt-12 mb-10 md:mt-20 md:mb-12'>
            <SectionLable title='Latest projects'/>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' >
           {
                allportfolios.map(portfolio=><Portfolio key={portfolio._id} 
                portfolio={portfolio}></Portfolio>)
            }
           </div>
        </Container>
      </div>
  )
}

export default Portfolios