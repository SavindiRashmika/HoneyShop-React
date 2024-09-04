import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa"

function Customer() {
    return (
        <div className='p-10 md:p-20'>
            <div className='flex flex-col text-center'>
                <h4 className='text-[#ff9f0d] font-semibold text-xl mb-3'>Our Customer</h4>
                <h2 className='text-white font-bold text-4xl mb-10'>Clients Review About Our</h2>
            </div>

            <div className='grid grid-flow-row gap-4 sm:grid-flow-col md:text-xl'>
                <div className='bg-gradient-to-r from-slate-950 to-black py-8 px-5 text-white rounded-3xl'>
                    <p className='mb-10 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo adipisci numquam ullam aspernatur. Dicta deserunt corporis iusto adipisci, blanditiis quam hic quae nulla,
                        voluptates quod accusantium rerum itaque libero vero.
                    </p>
                    <div className='grid grid-flow-col justify-items-center'>
                        <div >
                            <img src="src/assets/img/r1.jpg" alt="Hero" className='w-36 h-auto p-3 rounded-full' />
                        </div>
                        <div className='flex flex-col w-fit justify-center'>
                            <h4>kasun perera</h4>
                            <h5>Food Vlogger</h5>
                            <div className='flex text-[#ff9f0d] text-xl justify-center mt-4'>
                                <FaStar className='mr-2'/>
                                <FaStar className='mr-2' />
                                <FaStar className='mr-2' />
                                <FaStar className='mr-2' />
                                <FaRegStar className='mr-2' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-gradient-to-r from-slate-950 to-black py-8 px-5 text-white rounded-3xl'>
                    <p className='mb-10 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo adipisci numquam ullam aspernatur. Dicta deserunt corporis iusto adipisci, blanditiis quam hic quae nulla,
                        voluptates quod accusantium rerum itaque libero vero.
                    </p>
                    <div className='grid grid-flow-col justify-items-center'>
                        <div >
                            <img src="src/assets/img/r2.jpg" alt="Hero" className='w-36 h-auto p-3 rounded-full' />
                        </div>
                        <div className='flex flex-col w-fit justify-center'>
                            <h4>kasun perera</h4>
                            <h5>Food Vlogger</h5>
                            <div className='flex text-[#ff9f0d] text-xl justify-center mt-4'>
                                <FaStar className='mr-2'/>
                                <FaStar className='mr-2' />
                                <FaStar className='mr-2' />
                                <FaStar className='mr-2' />
                                <FaRegStar className='mr-2' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-gradient-to-r from-slate-950 to-black py-8 px-5 text-white rounded-3xl'>
                    <p className='mb-10 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo adipisci numquam ullam aspernatur. Dicta deserunt corporis iusto adipisci, blanditiis quam hic quae nulla,
                        voluptates quod accusantium rerum itaque libero vero.
                    </p>
                    <div className='grid grid-flow-col justify-items-center'>
                        <div >
                            <img src="src/assets/img/r1.jpg" alt="Hero" className='w-36 h-auto p-3 rounded-full' />
                        </div>
                        <div className='flex flex-col w-fit justify-center'>
                            <h4>kasun perera</h4>
                            <h5>Food Vlogger</h5>
                            <div className='flex text-[#ff9f0d] text-xl justify-center mt-4'>
                                <FaStar className='mr-2'/>
                                <FaStar className='mr-2' />
                                <FaStar className='mr-2' />
                                <FaStar className='mr-2' />
                                <FaRegStar className='mr-2' />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Customer