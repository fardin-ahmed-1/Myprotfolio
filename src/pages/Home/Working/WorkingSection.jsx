import React from 'react'
import Button from '../../../components/Button/Button'
import Container from '../../../components/Shared/Container'
import Pera from '../../../components/Shared/Content/Pera'
import { FaReact } from "react-icons/fa";
import { SiWordpress } from "react-icons/si";
import { FcIdea } from "react-icons/fc";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import Work from './Work';
const WorkingSection = () => {
    const working=[
        {
            icon:FaReact,
            title: 'React Application',
            description: 'Craft a sleek React app for a seamless user experience. Elevate your web development effortlessly.'

        },
        {
            icon:SiWordpress,
            title: 'WordPress Website',
            description: 'Turn your ideas into a captivating WordPress website. Elevate your online presence effortlessly with a beautifully crafted site.'

        },
        {
            icon:FcIdea,
            title: 'Fresh Idea',
            description: 'How to make your website. Suppose you do have not any Idea. You just sent me a message. I will help you with the full journey.'

        },
        {
            icon:MdOutlineWorkspacePremium,
            title: 'Premium Quality',
            description: 'You will get a Premium Quality website and your website must be responsive for any device.'

        },
    ]
    return (
        <div className='mt-20'>
            <Container>
                <div className='flex flex-col md:flex-row gap-8 items-center justify-between bg-backgroundtrs p-5 md:p-7 border border-bordertrs hover:border-primery duration-300 rounded-xl'>
                    <div className='md:w-[800px] lg:w-[800px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
                        {
                            working.map((work, index)=> <Work key={index} work={work}/>)
                        }                        
                    </div>
                    <div className='w-full'>
                        <h1 className='text-4xl md:text-4xl font-semibold my-1 text-white mb-4'>Let's Develop a Awesome Website for your Business</h1>
                       
                        <Pera pera="Let's transform your business into a digital success story! I'm Fardin Ahmed, a seasoned web developer, and I'm here to craft an awesome website tailored to your unique needs. With expertise in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, Node.js, Express.js, MongoDB, and Firebase, I ensure a seamless and visually appealing online presence."/>

                       <div className='my-3'>
                       <Pera pera="Whether you're a small startup or a growing business, my passion for web development extends to creating user-friendly and engaging websites that leave a lasting impression. Let's collaborate and turn your vision into a powerful online reality. Ready to elevate your business? Let's develop something awesome together!"/>
                       </div>

                        <Pera pera="Empower your business with a standout website. I'm Fardin Ahmed, your dedicated web developer, ready to turn your vision into digital reality."/>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default WorkingSection