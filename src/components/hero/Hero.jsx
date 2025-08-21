import React from 'react'
import Container from '../container/Container'
import heroBg from '../../assets/images/background/hero.png';
import { Link } from 'react-router-dom';
import Config from '../../Config';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <div className='lg:min-h-svh bg-slate-100'
      style={{
        background: `
          linear-gradient(
            to bottom,
            rgba(62, 62, 62, 0.58) 35%,
            rgba(113, 113, 113, 0.19) 50%,
            rgba(30, 30, 30, 0.13) 100%
          ),
          url(${heroBg})
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Container>
        <div className="h-svh flex flex-col justify-center text-white">
          <h1 className='font-poppins text-[32px] lg:text-[52px] font-semibold' data-aos="fade-up" data-aos-delay="300">Four Seasons Mountain Apartments</h1>
          <h2 className='font-poppins text-[42px] lg:text-[52px] max-w-[950px] font-extralight' data-aos="fade-up" data-aos-delay="1300">Luksusowy aparthotel w sercu Beskidu Śląskiego</h2>
          <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[32px] pt-[32px]">
            <button className='bg-[#A8853F] hover:bg-[#A8853F]/[0.9] text-white border-b-4 border-[#A8853F] p-4 font-poppins drop-shadow-lg cursor-pointer' data-aos="fade-up" data-aos-delay="1800">
              <HashLink smooth to={`#apartamenty`}>
                Zobacz ofertę
              </HashLink>
            </button>
            <button className='hover:bg-[#ffffff]/[0.1] text-shadow-xl text-white border-b-4 p-4 font-poppins drop-shadow-lg cursor-pointer' data-aos="fade-up" data-aos-delay="2000">
              <Link to={`tel:${Config.contact.phone}`}>
                Zadzwoń {Config.contact.phoneFormated}
              </Link>
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
