import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>

      <div
        className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'
        data-aos="fade-right"   //  Animate from left when visible
      >
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2' data-aos="fade-up">
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>

          <h1
            className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'
            data-aos="zoom-in"
          >
            Latest Arrivals
          </h1>

          <div className='flex items-center gap-2' data-aos="fade-up">
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      <img
        className='w-full sm:w-1/2'
        src={assets.hero_img}
        alt="Hero"
        data-aos="fade-left"   //  Animate image from right
      />
    </div>
  )
}

export default Hero
