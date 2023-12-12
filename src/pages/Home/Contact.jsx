import React from 'react'
import Container from '../../components/Shared/Container'
import SectionLable from '../../components/Shared/SectionLable'
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import toast from 'react-hot-toast';


const Contact = () => {
    const handleMessage = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const subject = form.subject.value
        const message = form.message.value
        console.log(name, email, subject, message);
        setTimeout(() => {
            toast.success('Your message has been submitted.')
        }, 1000);
        
    }
    return (
        <Container>
            <div className='mb-7  md:mb-5
    '>
                <SectionLable title='Contact Me' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10 md:gap-16 pb-10'>
                <div >
                    <h1 className='text-2xl font-medium text-neutral-300 mb-3'>Just say Hello</h1>
                    <form onSubmit={handleMessage}>
                        <div className='my-4'>
                            <input type="text" name='name' placeholder='Your Name'
                                className='text-lg w-full font-normal bg-[#171d2c] p-3 border border-neutral-600 focus:border-primery duration-300 rounded-md outline-none text-neutral-300'/>
                        </div>
                        <div className='my-4'>
                            <input type="text" name='email' placeholder='Your Email'
                                className='text-lg w-full font-normal bg-[#171d2c] p-3 border border-neutral-600 focus:border-primery duration-300 rounded-md outline-none text-neutral-300'
                            />
                        </div>

                        <div className='my-4'>
                            <input type="text" name='subject' placeholder='Your Subject'
                                className='text-lg w-full font-normal bg-[#171d2c] p-3 border border-neutral-600 focus:border-primery duration-300 rounded-md outline-none text-neutral-300'
                            />
                        </div>

                        <div className='my-4'>
                            <textarea type="text" name='message' placeholder='Your Message'
                                className='text-lg w-full font-normal bg-[#171d2c] p-3 border border-neutral-600 focus:border-primery duration-300 rounded-md outline-none text-neutral-300'
                            > </textarea>
                        </div>
                        <button type="submit"
                            className='text-center font-medium text-lg text-white bg-primery rounded py-3 px-8 inline-block'
                        >Send Message</button>
                    </form>
                </div>

                <div>
                    <h1 className='text-2xl font-medium text-neutral-300 mb-3'>Contact Info</h1>
                    <p className='text-lg text-textcolor font-normal max-w-md'>For inquiries or collaboration opportunities, feel free to contact me. I'm available by phone</p>
                    <div className='flex gap-3 items-center group mt-3'>
                        <div className='border border-neutral-300 rounded-full p-3  group-hover:border-primery duration-0'>
                            <span >
                            <FaEnvelope className='text-xl group-hover:text-primery duration-300   text-neutral-300'></FaEnvelope>
                            </span>
                        </div>
                        <div>       
                     <h1 className='text-xl font-medium text-neutral-200'> Email</h1>
                     <a className='text-base font-normal text-neutral-400 hover:text-primery duration-300' href="mailto:contactfardin22@gmail.com">contactfardin22@gmail.com</a>
                     </div>
                  
                    </div>


                    <div className='flex gap-3 items-center group mt-5'>
                        <div className='border border-neutral-300 rounded-full p-3  group-hover:border-primery duration-0'>
                            <span >
                            <FaPhoneAlt className='text-xl group-hover:text-primery duration-300   text-neutral-300'></FaPhoneAlt>
                            </span>
                        </div>
                     <div>       
                     <h1 className='text-xl font-medium text-neutral-200'> Phone</h1>
                     <a class='text-base font-normal text-neutral-400' href="tel:+8801316049157">+880 1316049157</a>
                     </div>
                    </div>


                    <div className='flex gap-3 items-center group mt-5'>
                        <div className='border border-neutral-300 rounded-full p-3  group-hover:border-primery duration-0'>
                            <span >
                            <FaLocationDot className='text-xl group-hover:text-primery duration-300   text-neutral-300'></FaLocationDot>
                            </span>
                        </div>
                     <div>       
                     <h1 className='text-xl font-medium text-neutral-200'>Location</h1>
                     <a class='text-base font-normal text-neutral-400 ' href="tel:+8801316049157">Dhanbari-1997, Tangail <br/> Dhaka, Bangladesh</a>
                     </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contact