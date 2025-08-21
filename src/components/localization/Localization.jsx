import React from 'react'
import Container from '../container/Container'
import H2 from '../headings/H2'
import map from '../../assets/images/images/map.png'
const Localization = () => {
    
    return (
        <div id="lokalizacja" className='lg:min-h-svh pt-12 lg:py-[64px] bg-[#1E1E1E] border-b border-[#3E3E3E]'>
            <Container>
                <H2>Lokalizacja</H2>
                <span className='block font-poppins font-extralight text-[16px] sm:text-[28px] lg:text-[32px] text-white mb-[24px]'>
                    <span className='block mb-4 font-normal'>W SERCU BESKIDU ŚLĄSKIEGO</span>
                    Four Seasons Mountain Apartments powstaje przy ul. Wrzosowej w Szczyrku - jednym z najpopularniejszych górskich kurortów w Polsce. Ta strategiczna lokalizacja zapewnia:
                </span>
                <div className="block mt-[64px]">
                    <img src={map} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Localization