import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Details from './components/Details'

function App() {

  return (
    
      <div className='bg-[#171d32] h-auto w-full overflow-hidden p-0'>
        <Navbar/>
        <Home />
        <Details />
      </div>
     )
}

export default App
