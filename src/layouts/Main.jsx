import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className=' pt-[120px] lg:pt-[150px] min-h-[calc(100vh-68px)] background'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
