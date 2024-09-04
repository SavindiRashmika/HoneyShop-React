import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Details from './components/Details'
import About from './components/About'
import Products from './components/Products'
import Customer from './components/Customer'
import Contact from './components/Contact'

function App() {

  return (
    
      <div className='bg-[#171d32] h-auto w-full overflow-hidden p-0'>
        <Navbar/>
        <Home />
        <Details />
        <About />
        <Products />
        <Customer />
        <Contact />
      </div>
     )
}

export default App
