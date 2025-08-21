import React from 'react'

const P = ({ children, className }) => {
    return (
        <p className={`${className} font-poppins font-extralight text-[32px] text-white`}>{children}</p>
    )
}

export default P