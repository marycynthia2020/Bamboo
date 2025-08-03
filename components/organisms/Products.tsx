import React from 'react'
import LearnMorebtn from '../atoms/LearnMorebtn'
import Image from 'next/image'

const Products = () => {
  return (
    <section className='pt-28 pb-14 bg-[#07775D] text-[#1A202C]'>
        <div className='max-w-[1440px] px-5 mx-auto  '>
            <p className='text-white text-center font-bold text-4xl mb-14'>Our Products</p>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8'>
                <div className=' flex flex-col  '>
                    <div className='bg-[#C4CAE4] p-12 pb-20 rounded-t-md h-[350px] flex justify-center items-center '>
                        <Image src="/3-icons.png" alt="icons" width={190} height={203} />
                    </div>
                    <div className='bg-white p-6 pt-12 flex flex-col flex-grow  rounded-b-md'>
                        <p className='text-2xl mb-8 font-bold'>Stocks</p>
                        <p className='mb-6 flex-grow'>
                            Discover the best global and local stocks to invest in. Get unrestricted access to the U.S. and Nigerian stock markets, right from your mobile phone or computer.
                        </p>
                        <LearnMorebtn />
                    </div>
                </div>
                <div className=' flex flex-col'>
                    <div className='bg-[#F2F2F2] p-12 pb-20 rounded-t-md h-[350px] flex justify-center items-center '>
                        <Image src="/ring.jpg" alt="a ring" width={190} height={203} />
                    </div>
                    <div className='bg-white p-6 pt-12 flex flex-col flex-grow  rounded-b-md'>
                        <p className='text-2xl mb-8 font-bold'>Exchange Traded Funds (ETFs)</p>
                        <p className='mb-6  flex-grow'>
                            Want to quickly diversify your portfolio? Unsure what stocks to buy? Want to follow an index like the S&P 500 that tracks the US economy? Want to get professional money management for a low price? We have got you covered.
                        </p>
                        <LearnMorebtn />
                    </div>
                </div>
                <div className=' flex flex-col'>
                    <div className='bg-[#E99B8D] p-12 pb-20 rounded-t-md h-[350px]  flex justify-center items-center'>
                        <Image src="/clock.png" alt="a ring" width={190} height={203} />
                    </div>
                    <div className='bg-white p-6 pt-12 flex flex-col flex-grow  rounded-b-md'>
                        <p className='text-2xl mb-8 font-bold'>Fixed Returns</p>
                        <p className='mb-6  flex-grow'>
                            Bamboo Fixed Returns is for you. It is a fixed-income dollar-denominated investment that gives you up to 8% annual returns. It allows you to invest your extra cash and diversify your overall portfolio.
                        </p>
                        <LearnMorebtn />
                    </div>
                </div>
                <div className=' flex flex-col'>
                    <div className='bg-[#BAC5E8] p-12 pb-20 rounded-t-md h-[350px] flex justify-center items-center '>
                        <Image src="/browntower.png" alt="a ring" width={190} height={203} />
                    </div>
                    <div className='bg-white p-6 pt-12 flex flex-col flex-grow  rounded-b-md'>
                        <p className='text-2xl mb-8 font-bold'>Fixed Returns</p>
                        <p className='mb-6  flex-grow'>
                            Bamboo Fixed Returns is for you. It is a fixed-income dollar-denominated investment that gives you up to 8% annual returns. It allows you to invest your extra cash and diversify your overall portfolio.
                        </p>
                        <LearnMorebtn />
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Products