import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { FaSearch } from "react-icons/fa";


function Navbar() {
  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 bg-origin-padding
    md:px-20'>
      <span className='text-3xl font-semibold tracking-wide flex gap-3'><MdHome size={38}  color="#ff9f0d"/>Honey</span>
      <ul className='mx-24 text-xl py-2 mb-3 font-semibold md:mt-5 px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6'>
        <li className='text-xs transition-all duration-300 p-1 md:p-0'>Home</li>
        <li className='text-xs transition-all duration-300 p-1 md:p-0'>About us</li>
        <li className='text-xs transition-all duration-300 p-1 md:p-0'>Our Shop</li>
        <li className='text-xs transition-all duration-300 p-1 md:p-0'>Our Customer</li>
        <li className='text-xs transition-all duration-300 p-1 md:p-0'>Contact Us</li>
      </ul>
      <div className='flex gap-5 items-center' style={{ backgroundColor: '#ff9f0d', padding: '8px 15px', borderRadius: '3rem',color:'black' }}>
        <FaSearch size={24}/>
        <BsCart2 size={28}/>
      </div>
    </nav>
  )
}

export default Navbar