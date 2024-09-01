import React from 'react'
import { MdArrowRight } from "react-icons/md"


function Home() {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div>
        <h1 className="leading-normal font-bold text-6xl mb-20">Pure, Raw, and <br />Naturally Delicious<br />Honey.</h1>
        <a href="#" className="bg-[#111111] text-[#ff9f0d] px-8 py-3 rounded-full mr-5 font-medium text-lg">Explore Menu </a>
        <a href="#" className="bg-[#ff9f0d] text-[#111111] px-8 py-2 rounded-full mr-5 font-medium text-xl">Order Now</a>
      </div>

      <div className="flex  lg:max-w-lg ">
      <img src="src/assets/img/honey_2.png" alt="Hero" className='w-4/5 h-2/5 relative mr-32  md:w-4/5 md:h-2/6'/>
      <img src="src/assets/img/honey_3.png" alt="Hero" className='w-1/5 h-1/4 mt-64 absolute ml-60'/>
      </div>
    </div>

  )
}

export default Home