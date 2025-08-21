import React from 'react'
import Container from '../container/Container'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="bg-[#1E1E1E] border-t border-[#3E3E3E]">
            <Container>
                <div className="w-full flex flex-row items-center justify-between h-[50px] lg:h-[100px] bg-[#1E1E1E]">
                    <span className='text-[#B5B5B5] font-poppins text-[10px] lg:text-[12px]'>Copyright by Szczyrk.pl 2025</span>
                    <ul>
                        <li className='text-gray-500 text-sm'>
                            <Link to={"/polityka-prywatnosci"} className='underline hover:no-underline'>Polityka prywatności</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Footer