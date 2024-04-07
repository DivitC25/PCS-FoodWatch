import React from 'react'
import Navbar from './components/Navbar'

const Home = () => {
  return (
    <div className="w-screen h-screen relative">
        <Navbar />
        <div className="w-screen h-1/2 relative flex flex-col justify-center items-start text-white">
          <img src="/map.png" className='w-screen h-full absolute top-0 left-0 object-cover'></img>
          <div className="w-1/4 h-full flex flex-col justify-center items-start gap-4 ml-[4%]">
            <h1 className="relative text-5xl font-bold scale-y-105">A Small Scale Food Scarcity Map</h1>
            <p className="relative">Built to provide real-time global data to best understand the hunger crisis</p>
          </div>
        </div>
    </div>
  )
}

export default Home