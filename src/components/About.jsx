import React from 'react'

function About() {
  return (
    <div className='flex flex-row p-10 md:p-20'>
        <div>
        <img src="src/assets/img/about.jpg" alt="Hero" className='w-10/12 h-1/3 rounded-lg rotate-[-16deg]'/>
        <img src="src/assets/img/R.jpeg" alt="Hero" className='w-9/12 h-1/3 bg-contain rounded-lg rotate-[-16deg]'/>

        </div>
        <div className='text-[#9e9e9e] ml-5 leading-7'>
            <h1 className='text-5xl font-bold mb-12 text-white'>Crafting the Perfect Honey Experience</h1>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Voluptatum cum quisquam in consectetur minus ducimus nihil 
               est modi culpa. Porro fuga voluptates nam veniam unde aperiam 
               qui atque ex libero?</p><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Nam quaerat labore amet quam a, id tempore iste voluptates consectetur 
               enim velit beatae repellendus alias, excepturi cum praesentium quis quod sit!</p><br/>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Nam quaerat labore amet quam!</p>

               <div className='mt-14'>
        <a href="#" className="bg-[#111111] text-[#ff9f0d] px-8 py-3 rounded-full mr-5 font-medium text-lg">Explore Menu </a>
        </div>
        </div>
    </div>
  )
}

export default About