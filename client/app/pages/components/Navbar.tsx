import React from 'react'

const Navbar = () => {
  return (
    <div className="w-screen h-20 bg-darkpurple flex flex-row justify-between items-center text-white">
        <div className="flex flex-row gap-10 h-full justify-start items-center ml-16">
            <img src="" alt="LOGO"></img>
            <h1 className='text-2xl font-bold'>PCS FOODWATCH</h1>
        </div>
        <div className='flex flex-row gap-24 h-full justify-start items-center mr-24 text-xl tracking-wider'>
            <div className='cursor-pointer border-b-8 border-white h-full flex flex-col justify-center items-center text-center pt-2'>
                <a>HOME</a>
            </div>
            <div className='cursor-pointer border-b-8 border-darkpurple h-full flex flex-col justify-center items-center text-center pt-2 hover:border-white duration-300'>
                <a >MAP</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar