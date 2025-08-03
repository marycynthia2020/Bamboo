"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import GetStartedBtn from "../atoms/GetStartedBtn"
import { NavigationContext } from '@/contextProvider/Provider'


const Navbar = () => {
 const context = useContext(NavigationContext)
 if(context === undefined){
  return
 } const {isMenuOpen, setIsMenuOpen } = context;

  return (
    <nav className='fixed w-full py-5 z-[2000] bg-white'>
      <div className='flex items-center justify-between max-w-[1440px] px-5 mx-auto'>
            <div>
              <Image src="/bamboologo.svg" width={142} height={40} alt="bamboo logo"  />
            </div>
            <div className=' hidden lg:flex items-center gap-10 text-[#9E9E9C] font-semibold'>
                <p>Products</p>
                <p>Learn</p>
                <p>Community</p>
                <p>FAQ</p>
            </div>
            <div className='hidden lg:block'>
                <GetStartedBtn/>
            </div>
            <div className='lg:hidden relative  ' onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                <input type="checkbox"  className='absolute w-full h-full opacity-0 checkbox'  />
                <div className='flex flex-col gap-1 span-container '>
                <span className={`w-5 h-[3px] bg-[#232323]  ${isMenuOpen ? "span1" : ""}`}></span>
                <span className={`w-5 h-[3px] bg-[#0CCD9D]   ${isMenuOpen ? "span2" : ""}  `}></span>
                <span className={`w-5 h-[3px] bg-[#232323] ${isMenuOpen ? "span3" : ""} `}></span>
              </div>
            </div>
      </div>
    </nav>
  )
}

export default Navbar

