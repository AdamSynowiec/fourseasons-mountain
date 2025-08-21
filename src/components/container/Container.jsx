import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='max-w-[calc(1595px_-_8px)] lg:max-w-[calc(1595px_-_16px)] mx-auto px-[8px] lg:px-[16px]'>{children}</div>
    )
}

export default Container