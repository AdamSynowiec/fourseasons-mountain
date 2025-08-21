import React from 'react'
import Container from '../container/Container'
import H2 from '../headings/H2';

const Comfort = ({ data }) => {

    const { header, subHeader, items } = data;
    let delay = 100;
    return (
        <div id="udogodnienia" className='lg:min-h-svh py-12 lg:py-[64px] bg-[#1E1E1E] border-b border-[#3E3E3E]'>
            <Container>
                <H2>{header}</H2>
                <p className='font-poppins font-extralight text-[16px] sm:text-[28px] lg:text-[32px] text-white mb-[24px] lg:mb-[64px]'>{subHeader}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {items?.map((item) => {
                        delay+=300;
                        return (
                            <div data-aos="fade-up" data-aos-delay={delay} className="overflow-hidden col-span-1 min-h-[250px] lg:min-h-[500px] flex flex-col justify-center px-4 lg:px-[100px] border border-[#3E3E3E] hover:bg-[#212121]">
                                <h4 data-aos="fade-up" data-aos-delay={delay+15} className='font-poppins text-[24px] lg:text-[38px] text-[#A8853F] mb-6 break-normal'>{item.header}</h4>
                                <p data-aos="fade-up" data-aos-delay={delay+15} className='font-poppins text-[16px] lg:text-[22px] text-white font-extralight break-normal'>{item.span}</p>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

export default Comfort