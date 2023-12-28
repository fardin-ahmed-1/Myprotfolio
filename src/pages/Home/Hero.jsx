import React from 'react'
import Container from '../../components/Shared/Container'
import Button from '../../components/Button/Button'
import resume from '../../../public/Resume.pdf'
import Pera from '../../components/Shared/Content/Pera'
import { HiMiniCheckBadge  } from "react-icons/hi2";
import toast from 'react-hot-toast'
import { TbProgressCheck } from "react-icons/tb";
import { MdEventAvailable } from "react-icons/md";



const Hero = () => {
  const handleDownloadResume = async () => {
    const googleDocsLink =
      'https://docs.google.com/document/d/1uRYq5OoAHHlNpspSZ7NMt92Fb1HP-gHKKpEfRddABwA/edit?usp=sharing';
    try {
      const response = await fetch(googleDocsLink);
      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }

      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.target = '_blank';
      link.download = 'Fardin_Ahmed.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Handle the error here (e.g., show an error message to the user)
    }
  };
  const handle=()=>{
 toast.success('hi')

  }
  return (
    <div className='w-full pt-0 lg:pt-16 pb-10 md:pb-14 md:pt-0 '>
      <Container>
        <div className='flex justify-between items-center  w-full flex-col md:flex-row'>
          <div className='flex-1'>
            <div className='inline-block bg-backgroundtrs pl-1 pr-3 py-1 rounded-full'>
              <div className='items-center gap-2 flex'>
                <HiMiniCheckBadge className='text-white text-3xl p-1 bg-[#334155] rounded-full'/>
              <h1 className='text-white font-medium text-base'>Front End Developer</h1>
              </div>
            </div>
            <h1 className='text-5xl md:text-5xl font-bold my-3 text-white'>Hi<span className=' text-primery ml-1'>,</span> I am <span className=' text-primery ml-1'> Fardin Ahmed. </span></h1>
            <h1 className='text-3xl md:text-4xl font-bold my-3 text-white'>I'm Your Developer
            <span className=' text-primery ml-1'>.</span>
            </h1>
            <Pera pera='I am a front-end web developer. I can provide clean code and pixel-perfect design. I also make websites more & more interactive with web animations. With a passion for creating seamless user experiences, I strive to bring innovation to every project I undertake.'/>

            {/* Hero Section Button */}
            <div className='flex sm:flex-row items-center gap-2 my-6'>
              <Button handleClick={handleDownloadResume} icon={TbProgressCheck} lable='My Resume'/>
              <Button handleClick={handle} icon={MdEventAvailable} lable='Hire Me'/>
            </div>
          </div>
          <div className='flex-1 flex justify-end'>
            <img className='border-[16px] border-[#47556933] w-96 h-96 rounded-full' src="https://i.ibb.co/5Lfv1kC/Untitled-design-1.png" alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero