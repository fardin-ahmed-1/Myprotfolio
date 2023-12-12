import React from 'react'
import Container from '../../components/Shared/Container'
import SectionLable from '../../components/Shared/SectionLable'

const MySkills = () => {
    const Frontend = ['HTML', 'CSS', 'Javascript', 'React.js', 'React Router', 'Node.js', 'Express.js', 'MongoDB', 'Firebase']
    const Libraries = ['Tailwind CSS', 'Bootstrap', 'Daisy Ui',' Meraki UI']
    const Others = ['Git', 'GitHub', 'Figma', 'WordPress', 'Wix', 'Netlify', 'Vercel', 'Canva.com', 'VS Code', 'MS Office']
    return (
        <Container>
            <div className='py-10'>
                <SectionLable title='My Skills' />
            </div>
            <div className='flex flex-col-reverse md:flex-row gap-10 justify-between'>
                <div className='flex-1'>
                    <h1 className='text-2xl font-medium text-neutral-200 mt-2 mb-3'>
                        Intent-Focused Web Developer
                    </h1>
                    <p className='text-lg text-textcolor font-normal'>Dedicated to simplifying the digital landscape, I am passionate about web development, crafting solutions that make the world of intent easy and affordable for everyone</p>

                    <div className='max-w-sm'>
                        <h1 className='text-xl font-medium text-neutral-200 mt-5 mb-2'>
                            Front-end & Back-end
                        </h1>
                        <div className='flex flex-wrap gap-3'>
                            {
                                Frontend.map(skill => <h1 className='text-base font-medium text-neutral-400'>{skill}</h1>)
                            }
                        </div>
                    </div>

                    <div className='max-w-sm'>
                        <h1 className='text-xl font-medium text-neutral-200 mt-5 mb-2'>
                            Libraries
                        </h1>
                        <div className='flex flex-wrap gap-3'>
                            {
                                Libraries.map(skill => <h1 className='text-base font-medium text-neutral-400'>{skill}</h1>)
                            }
                        </div>
                    </div>

                    <div className='max-w-sm'>
                        <h1 className='text-xl font-medium text-neutral-200 mt-5 mb-2'>
                            Others
                        </h1>
                        <div className='flex flex-wrap gap-3'>
                            {
                                Others.map(skill => <h1 className='text-base font-medium text-neutral-400'>{skill}</h1>)
                            }
                        </div>
                    </div>

                </div>
                <div className='flex-1'>
                    <img className='rounded-lg' src="https://i.ibb.co/brQSSmC/pexels-antoni-shkraba-4348401.jpg" alt="" />
                </div>
            </div>

        </Container>
    )
}

export default MySkills