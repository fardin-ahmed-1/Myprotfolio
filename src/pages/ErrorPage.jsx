import { useNavigate } from 'react-router-dom'
import Container from '../components/Shared/Container'
import Button from '../components/Button/Button'
import Pera from '../components/Shared/Content/Pera'
import ExLink from '../components/Button/ExLink'
import { AiOutlineHome } from "react-icons/ai";
const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <section className='bg-[#2A2C39]'>
      <Container>
        <div className='flex items-center h-screen justify-between gap-10'>
          <div className='flex-1'>
            <h1 className='text-6xl font-semibold text-white'>Sorry!</h1>
            <h1 className='text-3xl font-medium text-neutral-300 py-3'>This Page is Not Found.</h1>
            <Pera pera="Uh-oh! It looks like the page you're searching for has taken a detour. Our apologies for the inconvenience. Please navigate back or explore our site's other offerings."/>
             <div className='my-3'>
              <ExLink lable='Go Back Home'  link='/' icon={AiOutlineHome}/>
             </div>
          </div>
          <div className='flex-1'>
            <img src="https://i.ibb.co/XWzkn62/404-error.webp" alt="" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ErrorPage
