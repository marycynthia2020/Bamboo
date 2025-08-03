import React from 'react'
import GreenStartInvestingBtn from '../atoms/GreenStartInvestingBtn'

const BasicsComponent = () => {
  return (
    <section className='w-full '>
        <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row'>
            <div className=' w-4/5 mx-auto md:w-[45%] md:py-10 lg:py-5 xl:py-0 '>
                <img src="/icecrystal.png" alt="media art board" className='w-full aspect-square'/>
            </div>
            <div className='p-8 2xl:p-32 w-4/5 mx-auto md:w-[55%]'>
                <p className='text-[#232323] font-bold text-2xl md:text-5xl mb-4 md:leading-[3.5rem]'>Learn the basics of investing: From the ground up</p>
                <p className='ttext-[#232323] mb-4'>
                    We teach you the basics and get you started on your investment journey in no time.
                </p>
                <GreenStartInvestingBtn bg='bg-[#07775D]' color='text-white' />
            </div>
        </div>

    </section>
  )
}

export default BasicsComponent