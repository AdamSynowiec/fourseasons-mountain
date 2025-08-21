import React from 'react'

const H2 = ({ children, className }) => {
  return (
    <h2 className={` ${className} font-poppins font-extralight text-[34px] sm:text-[54px] lg:text-[96px] text-[#A8853F] pb-[24px] lg:pb-[64px]`}>{children}</h2>
  )
}

export default H2