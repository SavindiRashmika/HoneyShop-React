import React from 'react'

function Contact() {
    return (
        <div className='p-10 md:p-20 '>
            <div className='flex flex-row gap-10 justify-center mb-[5rem]'>
                <img src="src/assets/img/f1.png" alt="Hero" />
                <img src="src/assets/img/f2.png" alt="Hero" />
            </div>
            <div className='text-white font-bold text-4xl mb-10 text-center'>
                <h1>Contact Us</h1>
            </div>
            <div>
                <form class="max-w-sm mx-auto ">
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="name@gmail.com" required />
                    </div>
                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white" required />
                    </div>
                    <div class="flex items-start mb-5">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50" required />
                        </div>
                        <label for="remember" class="ms-2 text-sm font-medium text-white">Remember me</label>
                    </div>
                    <button type="submit" class="text-black hover:bg-blue-950 hover:text-white bg-[#ff9f0d] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Contact