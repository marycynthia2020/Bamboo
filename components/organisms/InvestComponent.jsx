import React from 'react'
import GreenStartInvestingBtn from '../atoms/GreenStartInvestingBtn'

const InvestComponent = () => {
  return (
    <section className='w-full mb-8 md:mb-0'>
        <div className='max-w-[1440px] mx-auto px-5 2xl:pr-0  md:bg-[#07775D] flex flex-col md:flex-row'>
            <div className='p-8 2xl:p-32 w-full md:w-[55%] bg-[#07775D]'>
                <p className='text-white font-bold text-4xl mb-12'>Invest in fractions</p>
                <p className='text-xl text-white leading-relaxed tracking-[0.02em] mb-20'>
                    Our fractional investing technology allows you to invest as much or as little 
                    as you want in your favorite public listed US company, a bundle of companies called an ETF, 
                    other African companies, mutual funds, 
                    or fixed income products from around the world.
                </p>
                <GreenStartInvestingBtn bg='bg-white' color='text-[#0A8469]' />
            </div>
            <div className=' w-full md:w-[45%] md:py-10 lg:py-5 xl:py-0  md:bg-[#07775D] '>
                <img src="/iconsongreen.png" alt="media art board" className='w-full aspect-square h-full pb-2'/>
            </div>
        </div>

    </section>
  )
}

export default InvestComponent