import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

function Socials() {
  return (
    <div className='flex flex-row justify-start gap-4'>
        <div className='border rounded-full p-2 flex justify-center hover:border-primary-color hover:shadow-md hover:shadow-pink-200 duration-200 delay-100'>
            <a href="https://www.facebook.com/biancamarie.victorino/"><FaFacebookF size={20} color='text-text-color'/></a>
        </div>
        <div className='border rounded-full p-2 flex justify-center hover:border-primary-color hover:shadow-md hover:shadow-pink-200 duration-200 delay-100'>
            <a href="https://github.com/biancavictorino"><BsGithub size={20} /></a>
        </div>
        <div className='border rounded-full p-2 flex justify-center hover:border-primary-color hover:shadow-md hover:shadow-pink-200 duration-200 delay-100'>
            <a href="https://www.linkedin.com/in/bianca-marie-victorino-361418279/"><FaLinkedinIn size={20}/></a>
        </div>
        <div className='border rounded-full p-2 flex justify-center hover:border-primary-color hover:shadow-md hover:shadow-pink-200 duration-200 delay-100'>
            <a href="https://www.behance.net/biancavictorino4"><FaBehance size={20} /></a>
        </div>
    </div>
  )
}

export default Socials 