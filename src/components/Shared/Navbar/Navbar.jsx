import { Link } from 'react-router-dom'
import Container from '../Container'
import logoImg from '../../../assets/images/logo.png'
import MenuDropdown from './MenuDropdown'
import MenuItems from '../HeaderMenu/MenuItems'

const Navbar = () => {
  return (
    <div className='fixed w-full  bg-darkbg z-10 shadow-sm'>
      <div className='py-4 border-b-[1px] border-neutral-500'>
        <Container>
          <div className='flex items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link className='hidden md:block md:flex-1' to='/'>
            <img className='w-1/4' src="https://i.ibb.co/rH9X1f2/Fardin-s-logo-white.png" alt="logo" />
            </Link>
            <div  className='mx-auto '>
              <MenuItems/>
            </div>
            {/* Dropdown Menu */}
            {/* <MenuDropdown /> */}
          </div>
        </Container>
      </div>
    </div>
  )
}
export default Navbar
