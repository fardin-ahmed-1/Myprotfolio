import React from 'react'
import Container from '../../components/Shared/Container'
import SectionLable from '../../components/Shared/SectionLable'
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import toast from 'react-hot-toast';
import Pera from '../../components/Shared/Content/Pera';
import Button from '../../components/Button/Button';
import { useForm } from "react-hook-form"


const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        console.log(data.error);
    }
    console.log(watch('name'));


    return (
        <Container>
            <div className='pt-24'>
                <SectionLable title='Got a project?' />
            </div>
            <div className='flex items-center justify-between gap-10 md:gap-16 py-10 '>
                <div className='w-96'>
                    <h1 className='text-2xl font-medium text-neutral-300 mb-3'>Let's Collaborate</h1>
                    <Pera pera="For inquiries or collaboration opportunities, feel free to contact me. I'm available by phone" />
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
                                <FaLocationDot className='text-xl group-hover:text-primery duration-300   text-neutral-300'></FaLocationDot>
                            </span>
                        </div>
                        <div>
                            <h1 className='text-xl font-medium text-neutral-200'>Location</h1>
                            <a class='text-base font-normal text-neutral-400 ' href="tel:+8801316049157">Dhanbari-1997, Tangail <br /> Dhaka, Bangladesh</a>
                        </div>
                    </div>
                </div>
                <div className='flex-1 bg-backgroundtrs p-7 border border-bordertrs rounded-lg '>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col md:flex-row gap-3 mt-3'>
                            <div className='flex-1'>
                                <label className='text-white font-xl font-medium mb-1 pl-1 block'>Your Name</label>
                                <input  {...register("name")} type="text" name='name' placeholder='Your Name'
                                    className='text-lg w-full font-normal bg-[#171d2c] p-3 border border-bordertrs focus:border-primery duration-300 rounded-md outline-none text-neutral-300' />

                            </div>
                            <div className='flex-1'>
                                <label className='text-white font-xl font-medium mb-1 pl-1 block'>Email Address</label>
                                <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    type="email" placeholder='Your Email'
                                    className='text-lg w-full font-normal bg-[#171d2c] p-3 border border-bordertrs focus:border-primery duration-300 rounded-md outline-none text-neutral-300' />
                                {errors.email && <span className='text-base font-medium text-red-500 mt-1 ml-2'>This field is required</span>}
                            </div>
                        </div>
                        <div className='my-3'>
                            <label className='text-white font-xl font-medium mb-1 pl-1 block'>
                                Describe the service you're looking to purchase</label>
                            <textarea {...register("description")}
                                type="text" placeholder='Describe your requirements'
                                className='text-lg w-full font-normal bg-[#171d2c] p-3 border border-bordertrs focus:border-primery duration-300 rounded-md outline-none text-neutral-300'
                            > </textarea>
                        </div>

                        <div className='flex flex-col md:flex-row gap-3 mt-3'>
                            <div className='flex-1'>
                                <label className='text-white font-xl font-medium mb-1 pl-1 block'>
                                    When would you delivered?</label>
                                <input {...register("deliveryDate", { required: true, pattern: /^[0-9\b]+$/ })}
                                    type="text" name='deliveryDate' placeholder='1/3/7/10 Days?'
                                    className='text-lg w-full font-normal bg-[#171d2c] p-3 border border-bordertrs focus:border-primery duration-300 rounded-md outline-none text-neutral-300' />
                                {errors.deliveryDate && <span className='text-base font-medium text-red-500 mt-1 ml-2'>Please enter a valid number</span>}
                            </div>
                            <div className='flex-1'>
                                <label className='text-white font-xl font-medium mb-1 pl-1 block'>What is your budget for this service?</label>
                                <input  {...register("budget", { required: true, pattern: /^[0-9\b]+$/ })} type="text" name='budget' placeholder='Esimated Budget $?'
                                    className='text-lg w-full font-normal bg-[#171d2c] p-3 border border-bordertrs focus:border-primery duration-300 rounded-md outline-none text-neutral-300' />
                                {errors.budget && <span className='text-base font-medium text-red-500 mt-1 ml-2'>Please enter a valid number</span>}
                            </div>
                        </div>
                        <div className='mt-5'>
                            <Button type="submit" lable='Submit Request' />
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}
export default Contact