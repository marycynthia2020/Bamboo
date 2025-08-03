import React from 'react'

const DownloadComponent = () => {
  return (
    <section className='pb-8 md:pb-0'>
        <div className='max-w-[1440px] mx-auto px-5 flex flex-col md:flex-row gap-2 md:items-center'>
            <div className='md:w-1/2 aspect-square'>
                <img src="mobile-with-icons.jpeg" alt="" className='w-full h-full'/>
            </div>
            <div className='md:w-1/2'>
                <p className='text-2xl lg:text-4xl xl:text-5xl font-bold text-[#232323] text-center md:text-left'>Download the app and start your investing journey now.</p>
                <div className='flex  gap-2 w-1/2  mx-auto md:mx-0 mt-8 md:mt-24 '>
                    <img src="/playstore.png" alt="" className='w-1/2'/>
                    <img src="/applestore.png" alt="" className='w-1/2'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DownloadComponent