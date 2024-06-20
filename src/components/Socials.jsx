import React from 'react'
import Facebook from '../assets/facebook.png'
import Github from '../assets/github.png'
import LinkedIn from '../assets/linkedIn.png'
import Behance from '../assets/behance.png'

function Socials() {
  return (
    <div className='flex flex-row justify-start gap-4'>
        <div className='border rounded-full p-2 flex justify-center hover:border-primary-color hover:shadow-md hover:shadow-pink-200 duration-200 delay-100'>
            <a href=""><img src={Facebook} alt="" /></a>
        </div>
        <div className='border rounded-full p-2 flex justify-center hover:border-primary-color hover:shadow-md hover:shadow-pink-200 duration-200 delay-100'>
            <a href=""><img src={Github} alt="" /></a>
        </div>
        <div className='border rounded-full p-2 flex justify-center hover:border-primary-color hover:shadow-md hover:shadow-pink-200 duration-200 delay-100'>
            <a href=""><img src={LinkedIn} alt="" /></a>
        </div>
        <div className='border rounded-full p-2 flex justify-center hover:border-primary-color hover:shadow-md hover:shadow-pink-200 duration-200 delay-100'>
            <a href=""><img src={Behance} alt="" /></a>
        </div>
    </div>
  )
}

export default Socials 