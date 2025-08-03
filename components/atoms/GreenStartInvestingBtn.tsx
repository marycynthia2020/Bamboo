import React from 'react'

interface GreenStartInvestingBtnProps {
  color?: string; 
  bg?: string; 
}
const GreenStartInvestingBtn: React.FC<GreenStartInvestingBtnProps> = ({color, bg}) => {
  return (
     <button className={` w-fit  p-3 px-12 rounded-md -20 ${color} ${bg}`} >Start Investing</button>
  )
}

export default GreenStartInvestingBtn