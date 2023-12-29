import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-[67px] md:pt-[74px] lg:pt-[75px] xl:pt-[88px] 2xl:pt-[152px] min-h-[calc(100vh-61px)] background'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
