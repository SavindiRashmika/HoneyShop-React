import React, { useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <nav className='flex flex-wrap justify-between lg:items-center text-white px-10 pt-1 bg-origin-padding lg:px-20 '>
      <span className='text-3xl font-semibold tracking-wide flex gap-3 my-5'>
        <MdHome size={38} color="#ff9f0d" />Honey
      </span>
      <ul className={` ${menu ? "block" : "hidden"} mx-20 text-xl py-2 mb-3 font-semibold lg:mt-5 px-2 rounded-xl bg-opacity-30 lg:border-none text-center lg:bg-transparent lg:static lg:mx-0 lg:flex gap-6`}>
        <a href='#home'><li className='text-lg transition-all duration-300 p-1 lg:p-0'>Home</li></a>
        <a href='#about'><li className='text-lg transition-all duration-300 p-1 lg:p-0'>About us</li></a>
        <a href='#shop'><li className='text-lg transition-all duration-300 p-1 lg:p-0'>Our Shop</li></a>
        <a href='#review'><li className='text-lg transition-all duration-300 p-1 lg:p-0'>Our Customer</li></a>
        <a href='#contact'><li className='text-lg transition-all duration-300 p-1 lg:p-0'>Contact Us</li></a>
      </ul>
      <div className='flex gap-5 h-9 w-32 mt-6 font-bold items-center px-6 py-2 rounded-3xl mb-2 text-lg' style={{ backgroundColor: '#ff9f0d' }}>
        <FaSearch size={24} color='#111111' />
        <BsCart2 size={24} color='#111111'  />
        {menu ? (
          <IoClose size={28} className='lg:hidden transition-all right-11 duration-300 text-black fixed'
            onClick={() => openMenu(false)}
          />
        ) : (
          <FaList size={30} className='lg:hidden transition-all duration-300 text-black'
            onClick={() => openMenu(true)}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar