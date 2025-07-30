import React from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import './index.css' // Ensure your styles are imported


const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Nav/>
      <Hero/>
    </div>
  )
}

export default App