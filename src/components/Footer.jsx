import React from 'react'
import { MdHome } from "react-icons/md";

function Footer() {
  return (

        

<footer class=" rounded-lg shadow bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span className='text-3xl font-semibold tracking-wide flex gap-3 my-5 text-white'>
        <MdHome size={38} color="#ff9f0d" />Honey
      </span>
      </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About us</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Our shop</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Our Customer</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact us</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> All Rights Reserved - 2024</span>
    </div>
</footer>
  )
}

export default Footer