import React from 'react'
import Container from '../../components/Shared/Container'

const SkillLogo = () => {
  const myskill=['HTML','CSS',"Tailwind CSS","Bootstrap", "Javascript", 'React.js', "Node.js", "Express.js", 'Firebase', "MongoDB", ]
  return (
    <div className='bg-backgroundtrs overflow-hidden'>
        <Container>
          <div className='flex flex-wrap gap-y-3  gap-x-8 items-center justify-center shadow-md py-5 '>
            {
              myskill.map(skill=> <h1 className='text-lg md:text-xl  font-semibold text-neutral-500'>{skill}</h1>)
            }
          </div>
        </Container>
    </div>
  )
}

export default SkillLogo