import Image from 'next/image'
import React from 'react'
import GreenStartInvestingBtn from '../atoms/GreenStartInvestingBtn'

const RestrictionComponent = () => {
  return (
    <section className='bg-[#FEFBF5] w-full py-14 text-[#1A202C]'>
      <div className='px-5 w-full max-w-[1440px] mx-auto flex flex-col   md:flex-row md:gap-x-[8%] items-center  gap-y-10 2xl:pl-24 2xl:pr-0'>
          <div className=' w-full  md:w-[40%] aspect-square ' >
            <img src="/artboard.png" alt='artborad'  className='h-full w-full '  />
          </div>
            <div className='w-full md:w-[57%] '>
              <p className='text-[#232323] text-2xl md:text-5xl font-bold mb-8 md:max-w-[250px]'>No more restriction</p>
              <p className='text-[#232323] mb-6 '>Investing from Africa has never been easier. Get started in 3 easy steps</p>
              <div className='w-full  flex flex-wrap  gap-y-16 justify-between gap-x-[50px]  mb-8'>
                <div className='flex-1 min-w-48 max-w-[390px]'>
                  <Image src="/profile.svg" alt='profile' width={23} height={26} className='mb-4' />
                  <p className='text-xl font-bold mb-2.5'>Create an account</p>
                  <p>
                    by selecting your country and instantly verify your identity using your government issued number like your Bank Verification Number or National Identity Number.
                  </p>
                </div>
                <div className=' flex-1 min-w-48 max-w-[390px]'>
                  <Image src="/wallet.svg" alt='profile' width={32} height={32} className='mb-4' />
                  <p className='text-xl font-bold mb-2.5'>Fund your wallet</p>
                  <p>
                    via multiple channels including your local currency cards and our partner will handle the currency conversion instantly in one click.
                  </p>
                </div>
                <div className='flex-1 min-w-48 max-w-[390px]'>
                  <Image src="/bank.svg" alt='profile' width={26} height={26} className='mb-4' />
                  <p className='text-xl font-bold mb-2.5'>Start Investing</p>
                  <p>
                    in your favorite public listed US company, a bundle of companies called an ETF,other African companies, mutual funds, or fixed income products from around the world.
                  </p>
                </div>
              </div>
              <GreenStartInvestingBtn bg="bg-[#07775D]" color='text-white' />
            </div>
      </div>
    </section>
  )
}

export default RestrictionComponent