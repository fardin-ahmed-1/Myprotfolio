import { Link } from 'react-router-dom'
import Container from '../Container'
import MenuItems from '../HeaderMenu/MenuItems'

const Navbar = () => {
  return (
    <div className='fixed w-full  bg-backgroundtrs z-10 backdrop-blur-[10px] py-3'>
        <Container>
          <div className='flex items-center justify-between gap-x-10'>
            {/* Logo */}
           <div className='sm:block md:hidden lg:block lg:w-2/12 xl:w-2/12'>
           <Link  to='/'>
            <img className='w-5/12 lg:w-full' src="https://i.ibb.co/rH9X1f2/Fardin-s-logo-white.png" alt="logo" />
            </Link>
           </div>
            <div>
              <MenuItems/>
            </div>
           
            {/* Dropdown Menu */}
            {/* <MenuDropdown /> */}
            
          </div>
        </Container>
      </div>
  
  )
}
export default Navbar
