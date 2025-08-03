import Image from 'next/image'
import React from 'react'
import GreenStartInvestingBtn from '../atoms/GreenStartInvestingBtn'

const SafeComponent = () => {
  return (
    <section className='w-full bg-[#FEFBF5] py-14 text-[#1A202C]  '>
      <div className='px-5  max-w-[1440px] mx-auto flex flex-col   md:flex-row md:gap-x-[10%] items-center'>
        <div className='w-full md:w-[49%] '>
              <p className='text-[#232323] text-2xl md:text-5xl font-bold mb-8 '>Your money is safe with us</p>
              <p className='text-[#232323] mb-6 text-[14.8px] '>
                You trust us with your investments and we take that very seriously. We are committed to protecting your account 
                with the highest standards of security available.
              </p>
              <div className='w-full  md:flex flex-wrap  gap-y-16 justify-between gap-x-[10px]  mb-8'>
                <div className='flex-1 min-w-64 max-w-80'>
                  <Image src="/bank.svg" alt='profile' width={26} height={26} className='mb-4' />
                  <p className='text-xl font-bold mb-2.5'>Bank Level Security</p>
                  <p>
                    We use state-of-the-art data encryption when handling your financial information and two-factor authentication (2FA) protection. We're backed by top financial market operators and we not only meet traditional banking security standards, we exceed them.
                  </p>
                </div>
                <div className=' flex-1 min-w-64 max-w-80'>
                  <Image src="/bank.svg" alt='profile' width={26} height={26} className='mb-4' />
                  <p className='text-xl font-bold mb-2.5'>Secure Payments</p>
                  <p>
                    Our payment processor Flutterwave is PADSS & PCIDSS compliant satisfying the highest level of Security Audit available.
                  </p>
                </div>
                <div className='flex-1 min-w-64 max-w-80'>
                  <Image src="/bank.svg" alt='profile' width={26} height={26} className='mb-4' />
                  <p className='text-xl font-bold mb-2.5'>Covered by NG & US SEC</p>
                  <p>
                   Trading accounts are held by our partners, a firm duly registered by the Securities and Exchange Commission in Nigeria and in the US
                  </p>
                </div>
                <div className='flex-1 min-w-64 max-w-80'>
                  <Image src="/bank.svg" alt='profile' width={26} height={26} className='mb-4' />
                  <p className='text-xl font-bold mb-2.5'>SIPC Insured</p>
                  <p>
                   Your US stocks portfolio is insured by the United States SIPC up to $500,000.
                  </p>
                </div>
              </div>
              <GreenStartInvestingBtn bg="bg-[#07775D]" color='text-white' />
            </div>
            <div className='hidden md:block w-full  md:w-[45%] aspect-square  ' >
              <img src="/key1.png" alt='artborad'  className='h-full w-full '  />
            </div>

      </div>
    </section>
  )
}

export default SafeComponent