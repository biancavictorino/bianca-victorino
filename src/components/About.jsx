import React from 'react'
import Me from '../assets/me.png'
import Socials from './Socials'

const About = () => {
  return (
    <div className='relative px-9 py-10 lg:px-28 flex flex-col h-auto gap-10 justify-around lg:flex-row lg:h-screen lg:items-center'>
        <div className='pt-10 relative flex flex-col gap-4 lg:items-start lg:max-h-screen lg:bottom-36'>
            <div className='flex flex-col gap-1 font-light text-5xl'>
                <h1>It's me</h1>
                <h1>Bianca Victorino</h1>
            </div>
            <Socials />
            <img src={Me} alt="" className='absolute top-2 left-40 h-20 w-20 rounded-full'/>
        </div>

        <div className='story text-md leading-8 flex flex-col gap-7 lg:w-3/5 lg:text-md lg:pl-12'>
            <p className='font-bold'>I am currently studying at University of Rizal System.</p>
            <p>BS Information Technology student with a keen eye for aesthetics and a newfound love for coding. In high school, I fell in love with the world of design, crafting compelling visuals. Back then, websites seemed like a separate realm. But now, diving into code, has opened my eyes to the magic of combining design and functionality. I thrive on creating visually stunning and user-friendly digital experiences, and the challenge of bringing creative visions to life through websites excites me more than ever.</p>
            <p>This journey of learning is endless, and I'm constantly eager to explore new technologies and expand my skillset. Every day brings fresh knowledge and exciting possibilities! But when I'm not coding or designing, you might just find me holding a mic and singing endlessly at karaoke.</p>
        </div>
    </div>
  )
}

export default About