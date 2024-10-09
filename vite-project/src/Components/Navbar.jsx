import React from 'react'
import Logo from  '../MovieLogo.png'
const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img className='w-[50px]' src={Logo} alt="" />
      <a  className='text-blue-500 text-2xl font-bold' href="/">Home</a>
      <a className='text-blue-500 text-2xl font-bold'  href="/WatchList">WatchList</a>
    </div>
  )
}

export default Navbar
