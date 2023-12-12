import React from 'react'
import Container from '../../components/Shared/Container'
import Button from '../../components/Button/Button'
import resume from '../../../public/Resume.pdf'
import { saveAs } from 'file-saver'


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
  return (
    <div className='bg-[url(https://i.ibb.co/4jVcmmv/hero-bg-2.jpg)] bg-cover bg-no-repeat bg-center md:h-screen w-full pt-16 pb-10 md:pb-0 md:pt-0 '>
      <Container>
        <div className='flex justify-center items-center md:h-screen max-w-2xl mx-auto text-center'>
          <div>
            <h1 className='text-4xl md:text-5xl font-semibold my-3 text-white'>Hi<span className=' text-primery ml-1'>,</span> I am <span className=' text-primery ml-1'> Fardin Ahmed. </span></h1>
            <h1 className='text-2xl md:text-3xl font-medium my-3 text-white'>Front End Developer</h1>
            <p className='text-base md:text-lg text-textcolor font-normal'>I am a front-end web developer. I can provide clean code and pixel-perfect design. I also make websites more & more interactive with web animations. With a passion for creating seamless user experiences, I strive to bring innovation to every project I undertake.</p>
            <div className='flex flex-col sm:flex-row w-full mx-auto items-center justify-center gap-2'>
              <Button lable='Got a Project?' />
              <a onClick={handleDownloadResume}
                className='text-center font-medium text-lg text-primery border border-primery rounded py-3 md:my-6 px-6 inline-block hover:text-white hover:border-primery hover:bg-primery duration-300'>
                <button>My Resume</button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero