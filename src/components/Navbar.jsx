import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpen = () => {
        setMenuOpen(!menuOpen);

    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className='absolute w-full bg-background-color bg-opacity-50 px-8 py-4 flex flex-row items-center justify-between lg:px-28'>
        <div className='logo'>
            <h1 className='font-bold text-md'>bianx</h1>
        </div>
        <div className='flex flex-row items-center gap-5 md:gap-10'>
            <div className='hidden md:flex md:flex-row md:gap-9'>
                <a onClick={() => scrollToSection('story')} className='text-sm font-normal hover:text-primary-color duration-200 delay-100 cursor-pointer'>My Story</a>
                <a onClick={() => scrollToSection('codes')} className='text-sm font-normal hover:text-primary-color duration-200 delay-100 cursor-pointer'>Works</a>
                <a onClick={() => scrollToSection('contact')} className='text-sm font-normal hover:text-primary-color duration-200 delay-100 cursor-pointer'>Contact</a>
            </div>
            <div>
                <button className='text-xs md:text-sm border px-4 py-2 rounded-full border-primary-color hover:shadow-lg hover:shadow-pink-200 transform transition-transform hover:-translate-y-1 duration-200 delay-100'>Download CV</button>
            </div>
            <RxHamburgerMenu onClick={handleOpen} size={20} className='md:hidden hover:text-primary-color duration-200 delay-100' />
        </div>

        <div className={`${menuOpen ? 'flex flex-col fixed bg-background-color shadow-lg right-0 top-0 h-screen w-3/4 z-40 justify-center items-center gap-6' : 'hidden'}`}>
                <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='text-text-color h-6 w-6 absolute top-6 right-8 cursor-pointer hover:text-primary-color hover:scale-110 transition ease-in-out duration-200'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <a onClick={() => scrollToSection('story')} className='text-sm font-normal hover:text-primary-color transition ease-in-out duration-200 cursor-pointer'>My Story</a>
                <a onClick={() => scrollToSection('codes')} className='text-sm font-normal hover:text-primary-color transition ease-in-out duration-200 cursor-pointer'>Works</a>
                <a onClick={() => scrollToSection('contact')} className='text-sm font-normal hover:text-primary-color transition ease-in-out duration-200 cursor-pointer'>Contact</a>
        </div>
        
    </div>
  )
}

export default Navbar