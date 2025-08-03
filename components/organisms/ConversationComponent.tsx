import React from 'react'
import GreenStartInvestingBtn from '../atoms/GreenStartInvestingBtn'

const ConversationComponent = () => {
  return (
    <section className='w-full bg-[#DDBD8E] text-[#1A202C] px-5 py-8 md:py-28'>
        <div className='max-w-[1440px] px-5  mx-auto pt-20 md:pl-20 md:pr-0 bg-white rounded-md flex flex-col gap-y-10 lg:flex-row items-center relative min-h-[780px]'>
            <div className=''>
                <p className='w-full text-2xl md:text-5xl font-bold mb-8 md:max-w-[403px] md:leading-[1.2] '>Join the conversation</p>
                <p className='w-full md:max-w-[372px] mb-6'>
                    Our community has many gems. You can learn from others, vote on upcoming features, chat, and share your ideas. First time investors and experienced ones - all are welcome!
                </p>
                <button className=" w-fit  p-3 px-12 rounded-md -20 bg-[#07775D] text-white" >Learn More</button>
            </div>
            <div className='lg:absolute -right-5 xl-right-16 2xl:-right-20   '>
                <img src="/message-bin.png" className='2xl:w-[1000px] lg:h-[500px] xl:h-[700px] aspect-square' />
            </div>
            
        </div>
    </section>
  )
}

export default ConversationComponent