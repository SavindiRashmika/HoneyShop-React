import React from 'react'

function Navbar() {
  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6
    md:px-20'>
        <span>Honey</span>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Our Shop</li>
            <li>Our Customer</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navbar