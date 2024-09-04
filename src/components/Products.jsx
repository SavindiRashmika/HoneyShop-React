import React from 'react'
import { FaRegHeart } from "react-icons/fa"

function Products() {
  return (
    <div className='p-10 md:p-20'>
        <div className='flex flex-col text-center'>
            <h4 className='text-[#ff9f0d] font-semibold text-xl mb-3'>Our Shop</h4>
            <h2 className='text-white font-bold text-4xl mb-10'>Lets Check Popular Products</h2>
        </div>

        <div className='grid grid-flow-col gap-4'>
            <div className='bg-gradient-to-r from-slate-950 to-black py-8 px-5 text-center text-white rounded-3xl'>
            <img src="src/assets/img/R.jpeg" alt="Hero" className='w-full max-w-60 h-auto p-3 rounded-3xl'/>
                <h3>Blueberry Honey</h3>
                <div>
                    <div className='mb-3 font-bold text-xl'>
                        <h6>$21.00</h6>
                    </div>
                    <div>
                        <a href="#" className="bg-[#ff9f0d] text-[#111111] px-4 py-2 rounded-full mr-5 font-bold text-sm">Order now</a>
                    </div>
                </div>

                <div>
                <FaRegHeart />
                </div>
            </div>

            <div className='bg-gradient-to-r from-slate-950 to-black py-8 px-5 text-center text-white rounded-3xl'>
            <img src="src/assets/img/p3.png" alt="Hero" className='w-full max-w-60 h-auto'/>
                <h3>Blueberry Honey</h3>
                <div>
                    <div className='mb-3 font-bold text-xl'>
                        <h6>$21.00</h6>
                    </div>
                    <div>
                        <a href="#" className="bg-[#ff9f0d] text-[#111111] px-4 py-2 rounded-full  font-bold text-sm">Order now</a>
                    </div>
                </div>

                <div>
                <FaRegHeart />
                </div>
            </div>

            <div className='bg-gradient-to-r from-slate-950 to-black py-8 px-5 text-center text-white rounded-3xl'>
            <img src="src/assets/img/R.jpeg" alt="Hero" className='w-full max-w-60 h-auto'/>
                <h3>Blueberry Honey</h3>
                <div>
                    <div className='mb-3 font-bold text-xl'>
                        <h6>$21.00</h6>
                    </div>
                    <div>
                        <a href="#" className="bg-[#ff9f0d] text-[#111111] px-4 py-2 rounded-full mr-5 font-bold text-sm">Order now</a>
                    </div>
                </div>

                <div>
                <FaRegHeart />
                </div>
            </div>

            <div className='bg-gradient-to-r from-slate-950 to-black py-8 px-5 text-center text-white rounded-3xl'>
            <img src="src/assets/img/p2.png" alt="Hero" className='w-full max-w-60 h-auto'/>
                <h3>Blueberry Honey</h3>
                <div className='flex flex-col'>
                    <div className='mb-3 font-bold text-xl'>
                        <h6>$21.00</h6>
                    </div>
                    <div>
                        <a href="#" className="bg-[#ff9f0d] text-[#111111] px-4 py-2 rounded-full mr-5 font-bold text-sm">Order now</a>
                    </div>
                </div>

                <div>
                <FaRegHeart />
                </div>
            </div>
        </div>

        <div className='text-center mt-16'>
            <a href="#" className="bg-[#111111] text-[#ff9f0d] px-8 py-3 rounded-full mr-5 font-medium text-lg">All Products</a>
        </div>
    </div>
  )
}

export default Products