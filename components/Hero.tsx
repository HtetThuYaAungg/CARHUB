"use client"

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {

  const handleScroll = () => {
    
  }

  return (
    <div className='hero'>
      <div className=' flex-1 pt-32 padding-x'>
        <h1 className='hero__title'>Find, Book or Rent a car - quickly and easily!</h1>
        <p className='hero__subtitle'>Streamline your car rental experience wiht our efforless booking process.</p>
        <CustomButton
          title="Explore Cars"
          containerStyles=" bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image
            src='/hero.png'
            alt="hero"
            
            fill className="object-contain"
          />
          <div className='hero__image-overlay'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

