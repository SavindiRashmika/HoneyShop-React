import React from 'react'
import { MdArrowRight } from "react-icons/md"


function Home() {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      {/* <div className='md:w-2/4 md:pt-10'>
      <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'></h1>
      </div> */}

      <div>
        <h1 className="leading-snug font-bold text-7xl  mb-20">Meet, <span>Eat &</span> <br /> Enjoy the true <br /> taste</h1>
        <a href="#" className="bg-[#111111] text-[#ff9f0d] px-8 py-3 rounded-full mr-5 font-medium text-lg">Explore Menu </a>
        <a href="#" className="bg-[#ff9f0d] text-[#111111] px-8 py-2 rounded-full mr-5 font-medium text-xl">Order Now</a>
      </div>

      <div className="lg:w-full lg:max-w-lg lg:h-auto">
      <img src="src/assets/img/hero.png" alt="Hero" />
      </div>
    </div>

  )
}

export default Home