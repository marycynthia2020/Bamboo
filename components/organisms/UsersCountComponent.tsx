import React from 'react'
import GreenStartInvestingBtn from '../atoms/GreenStartInvestingBtn'
import Image from 'next/image'

const UsersCountComponent = () => {
  return (
    <section className='pt-32 pb-28 text-[#1A202C]'>
      <div className='max-w-[1440px] mx-auto px-5'>
        <div className='mb-14 md:mb-24 2xl:mb-64'>
          <h2 className='text-3xl md:text-5xl font-bold max-w-[606px] text-center mx-auto md:leading-[1.2] mb-14'>We are helping Africans build actual wealth</h2>
          <p className='text-2xl leading-relaxed tracking-[0.02em] mb-14 max-w-[690px] mx-auto text-center'>
            Armed with the most robust data feeds about the market, we alert our investors with power triggers that ensure you make money moves as the market moves.
          </p>
          <p className='text-2xl md:text-6xl text-[#07775D] text-center font-bold mb-7'>500,000+</p>
          <p className='md:font-bold md:text-3xl text-center'>Registered users</p>
        </div>
        <div className='flex flex-col md:flex-row gap-14 mx-auto md:pl-40 md:pr-40 gap-x-28  items-center '>
          <div className=' p-2 bg-[#FEFBF5] md:bg-white '>
            <Image src="/greeen-bell.png" width={450} height={300} alt="" />
          </div>
          <div className='  '>
            <p className='text-[#232323] font-bold text-2xl md:text-5xl mb-10 md:leading-[3.5rem] max-w-[480px] '>Triggers and alerts with AI driven market insights</p>
            <p className='ttext-[#232323] mb-16 max-w-[380px]'>
                Armed with the most robust data feeds about the market, we alert our investors with power triggers that ensure you make money moves as the market moves.
            </p>
            <GreenStartInvestingBtn bg='bg-[#07775D]' color='text-white' />
        </div>
        </div>
      </div>
    </section>
  )
}

export default UsersCountComponent