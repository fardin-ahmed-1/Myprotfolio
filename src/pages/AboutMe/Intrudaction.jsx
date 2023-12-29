import React from 'react'
import Container from '../../components/Shared/Container';
import Pera from '../../components/Shared/Content/Pera';
import { FaLayerGroup } from "react-icons/fa6";
import { FaWordpressSimple } from "react-icons/fa6";



const Intrudaction = () => {
  return (
    <div className='mt-20'>
      <Container>
        <div className='flex flex-col md:flex-row gap-10 items-center justify-between '>
          <div className='md:w-[750px] lg:w-[600px] '>
            <img width='100%' className='rounded-lg shadow-md' src="https://i.ibb.co/Q890VYF/Untitled-design-2.png" alt="" />
          </div>

          <div className='w-full'>
            <h1 className='text-4xl md:text-5xl font-semibold my-1 text-white'>
              Hi There! I'm <span className=' text-primery ml-1'> Fardin. </span></h1>
            <h1 className='text-xl font-normal text-neutral-200 mt-2 mb-3'>Front-end Developer & WordPress, wix (CMS) Expert.
            </h1>
            <Pera pera="Passionate MERN Stack Developer and seasoned expert in Content Management Systems (CMS) such as WordPress and Wix. Residing in Dhaka, Bangladesh, I dedicate a minimum of 12-14 hours every day to my craft. For me, web development is not just a job—it's my life and everything I love. I thrive on the excitement of learning new things daily." />

            <div>
              <div className='flex items-center mt-5  gap-7'>
                <div className='w-14'>
                  <div className='w-16 h-16 rounded-full bg-[#7952B3] p-3 flex items-center justify-center'>
                    <FaLayerGroup className='text-white text-5xl'></FaLayerGroup>
                  </div>
                </div>
                <div className='flex-1'>
                  <h1 className='text-xl font-normal text-neutral-200 mt-2 mb-1'>Junior Front-end Developer</h1>
                  <Pera pera='Junior Front-end Developer on a Mission.' />
                </div>
              </div>
              <div className='flex items-center mt-7  gap-7 border-t border-neutral-500'>
                <div className='w-14 pt-7'>
                  <div className='w-16 h-16 rounded-full bg-[#21759B] p-3 flex items-center justify-center'>
                    <FaWordpressSimple className='text-white text-5xl'></FaWordpressSimple>
                  </div>
                </div>
                <div className='flex-1'>
                  <h1 className='text-xl font-normal text-neutral-200 mt-2 mb-1'>Professional WordPress Developer</h1>
                  <Pera pera=' Your Professional WordPress Partner.' />
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Intrudaction