import React from 'react'

function Details() {
    return (
        <div className='grid grid-cols-3 gap-4 md:p-20 p-10 h-auto'>
            <div className='bg-gradient-to-r from-slate-950 to-black text-white px-8  font-medium text-lg rounded-[48px] p-[43px] flex flex-col items-center justify-center'>
                <img src="src/assets/img/c1.png" alt="Hero" className='w-full max-w-12 h-auto'/>
                <h3 className='font-bold text-lg my-4'>11:00 am - 8:00 pm</h3>
                <a href="#" className='text-[#9e9e9e]'>Working Hours</a>
            </div>
            <div className='bg-gradient-to-r from-slate-950 to-black text-white px-8 py-3 font-medium text-lg rounded-[48px] flex flex-col items-center justify-center'>
                <img src="src/assets/img/c2.png" alt="Hero" className='w-full max-w-12 h-auto'/>
                <h3 className='font-bold text-lg my-4'>Honey Springs</h3>
                <a href="#" className='text-[#9e9e9e]'>Get Directions</a>
            </div>
            <div className='bg-gradient-to-r from-slate-950 to-black text-white px-8 py-3 font-medium text-lg rounded-[48px] flex flex-col items-center justify-center'>
                <img src="src/assets/img/c3.png" alt="Hero" className='w-full max-w-12 h-auto'/>
                <h3 className='font-bold text-lg my-4'>(+94) 776412345</h3>
                <a href="#" className='text-[#9e9e9e]'>Call Us</a>
            </div>
        </div>
    )
}

export default Details