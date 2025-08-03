import React from 'react'
import LemonStartInvestingBtn from "../atoms/LemonStartInvestingBtn"

const Hero = () => {
  return (
    <section className='w-full bg-[#FEFBF5]  py-14  pt-28 '>
            <div className='max-w-[1440px] mx-auto px-5  relative '>
                <video  
                    loop
                    className='rounded-xl w-full h-auto'
                    preload="auto"
                    autoPlay
                    muted 
                >
                    <source src="https://storage.googleapis.com/bamboo-website-images/videos/BambooHeroAnimation.mp4"  />
                </video>
                <div className='absolute top-2 left-6 md:top-10 md:left-16'>
                    <h1 className='text-4xl md:text-[61px] xl:text-[119px] text-white leading-[1.1] font-semibold '>
                        Dream
                        <br />
                        Invest
                        <br />
                        Live
                    </h1>
                    <LemonStartInvestingBtn />
                </div>
            </div>
    </section>
  )
}

export default Hero



{/* <video src="https://storage.googleapis.com/bamboo-website-images/videos/BambooHeroAnimation.mp4" preload="auto" autoplay="" loop="" playsinline="" webkit-playsinline="" x5-playsinline="" style="width: 100%; height: 100%;"></video> */}