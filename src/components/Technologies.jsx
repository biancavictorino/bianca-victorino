import React from 'react'
import JS from '../assets/javascript.png'
import WindCSS from '../assets/tailwind.png'
import ReactJS from '../assets/react.png'
import Git from '../assets/git.png'
import Figma from '../assets/figma.png'
import AdobeIllus from '../assets/illustrate.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'


const Technologies = () => {
  return (
    <div className='px-9 h-screen flex flex-col justify-center items-center gap-12'>
        <div className='grid grid-rows-2 grid-flow-col gap-6 lg:flex lg:flex-row'>
            <div className='border rounded-full p-2 flex justify-center'>
                <img className='h-14 w-14 rounded-lg p-2 lg:h-16 lg:w-16' src={ HTML } alt="" />
            </div>

            <div className='border rounded-full p-2 flex justify-center'>
                <img className='h-14 w-14 rounded-lg p-2 lg:h-16 lg:w-16' src={ CSS } alt="" />
            </div>

            <div className='border rounded-full p-2 flex justify-center'>
                <img className='h-14 w-14 rounded-lg p-2 lg:h-16 lg:w-16' src={ JS } alt="" />
            </div>

            <div className='border rounded-full p-2 flex justify-center'>
                <img className='h-14 w-14 rounded-lg p-2 lg:h-16 lg:w-16' src={ WindCSS } alt="" />
            </div>

            <div className='border rounded-full p-2 flex justify-center'>
                <img className='h-14 w-14 rounded-lg p-2 lg:h-16 lg:w-16' src={ ReactJS } alt="" />
            </div>

            <div className='border rounded-full p-2 flex justify-center'>
                <img className='h-14 w-14 rounded-lg p-2 lg:h-16 lg:w-16' src={ Git } alt="" />
            </div>

            <div className='border rounded-full p-2 flex justify-center'>
                <img className='h-14 w-14 rounded-lg p-2 lg:h-16 lg:w-16' src={ Figma } alt="" />
            </div>

            <div className='border rounded-full p-2 flex justify-center'>
                <img className='h-14 w-14 rounded-lg p-2 lg:h-16 lg:w-16' src={ AdobeIllus } alt="" />
            </div>

        </div>
        <div>
            <h1 className='text-3xl text-center p-6'>These are the <span className='text-primary-color'>technologies </span> I use to craft my projects.</h1>
        </div>
    </div>

  )
}

export default Technologies