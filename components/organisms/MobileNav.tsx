import React from 'react'
import GetStartedBtn from '../atoms/GetStartedBtn'

const MobileNav = () => {
  return (
    <nav className='absolute z-[2000] inset-x-0 top-20 lg:hidden  bg-white py-10'>
        <div className='flex flex-col items-center gap-8 text-[#9E9E9C] font-semibold'>
                <p>Products</p>
                <p>Learn</p>
                <p>Community</p>
                <p>FAQ</p>
                <div className='w-3/5'>
                    <GetStartedBtn width='w-full' />
                </div>
        </div>
            
    </nav>
  )
}

export default MobileNav