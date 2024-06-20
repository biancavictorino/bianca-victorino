import React from 'react'
import Socials from './Socials'
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <div id='contact' className='relative px-9 lg:px-28 h-screen flex flex-col justify-center items-center overflow-hidden'>
        <div className='flex flex-col lg:w-1/2 gap-2'>
            <h1 className='text-3xl font-medium text-left lg:text-4xl'>Actively seeking opportunities to collaborate and open to freelance projects.</h1>
            <a href="mailto:biancamarie.victorino@gmail.com" className='text-3xl text-left underline decoration-solid font-medium text-primary-color lg:text-4xl flex flex-row hover:-translate-y-1 transition ease-in-out duration-100 delay-200'>Let's Connect <MdArrowOutward size={40} /></a>
        </div>
        <div className='absolute flex flex-col justify-center items-center gap-3 bottom-8 lg:flex-row lg:justify-between lg:w-screen lg:px-28'>
            <Socials />
            <p className='text-sm transition-transform transform hover:-translate-y-1 hover:text-primary-color'><a href="mailto:biancamarie.victorino@gmail.com">biancamarie.victorino@gmail.com</a></p>
        </div>
    </div>
  )
}

export default Contact