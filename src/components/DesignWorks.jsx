import React from 'react'
import { Design } from '../Data/Design'

const DesignWorks = () => {
  return (
    <div id='designs' className='px-9 py-20 h-auto lg:px-28 overflow-hidden flex flex-col gap-8 lg:flex-row'>
        <div className='flex flex-col gap-3 lg:w-2/5'>
            <h1 className='text-3xl'>What I design?</h1>
            <p className='text-sm leading-8'>I have a keen eye for design, ensuring that every visual element I craft enhances the user experience. From creating mockups to designing various forms of digital artwork, here are some of my favorite designs.</p>
        </div>
        <div className='works flex flex-col gap-9 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:pl-28'>
            {
                Design.map(designs => (
                    <div className='flex flex-col gap-2 items-center'>
                        <img src={designs.image} className='h-80 w-80' alt="" />
                        <div className='flex flex-col gap-2 justify-center w-80'>
                            <h1 className='text-lg font-medium'>{designs.title}</h1>
                            <p className='font-normal leading-6 text-sm'>{designs.description}</p>
                            <p className='font-light text-slate-400 duration-200 delay-100'>{designs.type}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default DesignWorks