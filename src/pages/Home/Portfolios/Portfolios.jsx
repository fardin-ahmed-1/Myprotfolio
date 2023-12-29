import { useEffect, useState } from 'react'
import Container from '../../../components/Shared/Container'
import { getportfolios } from '../../../Apis/GetMethod'
import Portfolio from './Portfolio'
import SectionLable from '../../../components/Shared/SectionLable'
import ExLink from '../../../components/Button/ExLink'
import { GoPlusCircle } from "react-icons/go";

const Portfolios = () => {
    const [loading, setLoading]=useState(false)
    const [portfolios, setPortfolios]=useState([])

    useEffect(()=>{
        setLoading(true)
        getportfolios()
        .then(data=> {
            setPortfolios(data)
            setLoading(false)
        } )
    },[])
   
  return (
      <div>
          <Container>
            <div className='pt-16 pb-10'>
            <SectionLable title='Latest projects'/>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' >
           {
                portfolios.map((portfolio, index)=><Portfolio key={portfolio._id} 
                portfolio={portfolio}></Portfolio>)
            }
           </div>
           <div className='flex justify-center mt-8'>
            <ExLink icon={GoPlusCircle} lable='Load More'/>
           </div>
        </Container>
      </div>
  )
}

export default Portfolios