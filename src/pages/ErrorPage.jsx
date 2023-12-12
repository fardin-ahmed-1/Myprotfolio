import { useNavigate } from 'react-router-dom'
import Container from '../components/Shared/Container'
import Button from '../components/Button/Button'
const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <section className='bg-[#2A2C39]'>
      <Container>
        <h1 className='text-5xl font-semibold text-white mb-10 text-center py-20'>Page Not Found</h1>
        <div className='flex items-center justify-between gap-10'>
          <div className='flex-1'>
            <h1 className='text-6xl font-semibold text-white'>Sorry!</h1>
            <h1 className='text-3xl font-medium text-neutral-300 py-3'>This Page is Not Found.</h1>
            <p className='text-base font-normal text-textcolor'>Uh-oh! It looks like the page you're searching for has taken a detour. Our apologies for the inconvenience. Please navigate back or explore our site's other offerings."</p>
             <div>
              <Button lable='Go back Home' link="/"/>
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
