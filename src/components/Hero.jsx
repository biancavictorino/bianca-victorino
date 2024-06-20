import React from 'react'

const Hero = () => {
  return (
    <div className='px-8 h-screen flex flex-col justify-center bg-grid-pattern gap-3 lg:px-28'>
        <div className='text-3xl font-bold lg:text-5xl'>
          <h1>Hello! I am Bianx.</h1>
          <h1>In love with design & code</h1>
        </div>
        <div>
          <p className='text-sm leading-7 lg:text-md lg:w-1/2'>
            Weaving <a href="" className='underline decoration-solid text-primary-color'>beautiful design</a> with <a href="" className='underline decoration-solid text-primary-color'>functional code</a> is my creative passion. I love crafting interactive websites that not only look stunning, but also engage users and deliver a seamless experience.
          </p>
        </div>
        <div className='absolute inset-0 bg-gradient-overlay'></div>
    </div>
  )
}

export default Hero