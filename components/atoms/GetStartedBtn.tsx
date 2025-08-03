import React from 'react'

interface btnProps{
  width? : string
}
const GetStartedBtn = ({ width }: btnProps) => {
  return (
    <button className={`bg-[#00A239] text-white py-3  px-5 rounded-md font-semibold ${width} `} >Get Started</button>
  )
}

export default GetStartedBtn