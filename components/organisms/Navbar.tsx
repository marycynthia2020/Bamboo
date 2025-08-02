import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed w-full py-5 z-[2000] bg-white border'>
      <div className='flex items-center justify-between max-w-[1440px] px-5 mx-auto '>
            <div>
              <Image src="/bamboologo.svg" width={142} height={40} alt="bamboo logo"  />
            </div>
            <div className=' hidden lg:flex items-center gap-10 text-[#9E9E9C] font-semibold'>
                <p>Products</p>
                <p>Learn</p>
                <p>Community</p>
                <p>FAQ</p>
            </div>
            <div>
                <button className='bg-[#00A239] text-white py-3  px-5 rounded-md font-semibold ' >Get Started</button>
            </div>
      </div>
    </nav>
  )
}

export default Navbar

