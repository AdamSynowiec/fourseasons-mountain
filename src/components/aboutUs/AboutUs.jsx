import React from 'react'
import H2 from '../headings/H2'
import szczyrk_aboutUs from '../../assets/images/images/szczyrk_aboutUs2.png'
import szczyrk_aboutUs2 from '../../assets/images/images/szczyrk_aboutUs.png'

const AboutUs = () => {
    return (
        <div id="inwestycja" className='lg:min-h-svh bg-[#1E1E1E] flex flex-col justify-center border-b border-[#3E3E3E] px-[8px] py-12 lg:py-auto'>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="col-span-1 flex flex-row-reverse gap-[80px] order-2 lg:order-1">
                    <img src={szczyrk_aboutUs2} alt="" className='hidden lg:block'/>
                    <img src={szczyrk_aboutUs} alt="" className='w-full lg:w-auto'/>
                </div>
                <div className="col-span-1 lg:pl-[82px] order-1 lg:order-2">
                    <H2>O inwestycji</H2>
                    <p className='font-poppins text-[16px] text-white' data-aos="fade-up" data-aos-delay="300">NOWOCZESNY APARTHOTEL W GÓRSKIM STYLU</p>
                    <p className='font-poppins font-extralight text-[16px] sm:text-[28px] lg:text-[32px] text-white max-w-[795px] pb-12 lg:pb-auto' data-aos="fade-up" data-aos-delay="600">Four Seasons Mountain Apartments
                        to wyjątkowy aparthotel, który powstaje
                        w malowniczym Szczyrku przy ul. Wrzosowej.
                        Ta kameralna inwestycja obejmuje jeden budynek zawierający 31 ekskluzywnych apartamentów o powierzchni od 28 do 61 m², zaprojektowanych z myślą o komforcie
                        i funkcjonalności.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs