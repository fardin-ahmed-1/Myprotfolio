import Container from '../Container'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn,FaFacebookF,FaBehance } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-darkbg py-4 border-t-[1px] border-neutral-500">
      <Container>
        <div className='flex items-center justify-between'>
          <div className="">
          <h1 className='text-lg font-normla text-neutral-400'>© 2020 All rights reserved | Design by Fardin Ahmed</h1>
          </div>
          <div className=" flex gap-6">
            <a href="https://github.com/fardin-ahmed-1" target='_blank'>
              <FaGithub className='text-2xl text-white '/>
            </a>
           
            <a href="https://www.linkedin.com/in/fardinahmed2020/" target='_blank'>
              <FaLinkedinIn className='text-2xl text-white '/>
            </a>

            <a href="https://www.facebook.com/fardinahmed2020/" target='_blank'>
              <FaFacebookF className='text-2xl text-white '/>
            </a>
           
            <a href="https://www.behance.net/fardinahmed2020" target='_blank'>
              <FaBehance className='text-2xl text-white '/>
            </a>
           
          </div>
          

         
        </div>

      </Container>
    </div>
  )
}

export default Footer
