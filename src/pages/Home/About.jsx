import React from 'react'
import ButtonOutlet from '../../components/Button/ButtonOutlet'
import Button from '../../components/Button/Button'
import Container from '../../components/Shared/Container'
import resume from '../../../public/Resume.pdf'
import SectionLable from '../../components/Shared/SectionLable'

const About = () => {

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
        <div className='pt-16'>
            <Container>
            <div className='pb-8 md:pb-10'>
            <SectionLable title='About Me'/>
            </div>
                <div className='flex flex-col md:flex-row gap-10 items-center justify-between'>
                    <div className='md:w-[700px] lg:w-[600px] '>
                        <img width='100%' className='rounded-lg shadow-md' src="https://i.ibb.co/Q890VYF/Untitled-design-2.png" alt="" />
                    </div>

                    <div className='w-full'>
                        <h1 className='text-3xl font-medium my-1 text-white'>
                         Hi There! I'm Fardin</h1>
                        <h1 className='text-xl font-normal text-neutral-200 mt-2 mb-3'>Front-end Developer & WordPress, wix (CMS) Expert.
                        </h1>
                        <p className='text-lg text-textcolor font-normal'>
                        Passionate MERN Stack Developer and seasoned expert in Content Management Systems (CMS) such as WordPress and Wix. Residing in Dhaka, Bangladesh, I dedicate a minimum of 12-14 hours every day to my craft. For me, web development is not just a job—it's my life and everything I love. I thrive on the excitement of learning new things daily.
                        </p>
                       
                        <div className='flex items-center mt-5  gap-10'>
                            <div>
                                <h1 className='text-lg font-normal text-neutral-300 mb-2'>Phone</h1>
                                <h1 className='text-lg font-normal text-neutral-300 mb-2'>Email</h1>
                                <h1 className='text-lg font-normal text-neutral-300 mb-2'>Language</h1>
                                <h1 className='text-lg font-normal text-neutral-300 mb-2'>Freelance</h1>
                            </div>
                            <div>
                                <h1 className='text-lg font-normal text-neutral-300 mb-2'>:  +880 1316049157</h1>
                                <h1 className='text-lg font-normal text-neutral-300 mb-2'>:  contactfardin22@gmail.com</h1>

                                <h1 className='text-lg font-normal text-neutral-300 mb-2'>:  English, Bangla</h1>

                                <h1 className='text-lg font-normal text-neutral-300 mb-2'>:  Available</h1>
                               
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            
                            <button onClick={handleDownloadResume} 
                                className='text-center font-medium text-lg text-white bg-primery  rounded py-[10px] my-4 px-6 inline-block'>
                               Download CV
                            </button>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default About