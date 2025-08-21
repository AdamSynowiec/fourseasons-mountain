import React from 'react'
import { Link } from 'react-router-dom'
const Cta = () => {
    return (
        <div className="bg-[#1e1e1e]">
            <div className='container max-w-[1596px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 py-12'>
                <div className="text-center min-h-[300px] rounded-[50px] flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                    <div className="lg:w-2/3 relative z-10">
                        <h2 className='font-poppins text-white text-2xl sm:text-5xl md:text-6xl lg:text-[54px] font-extralight mb-2'>STANDARD WYKOŃCZENIA</h2>
                        <span className='text-md md:text-xl font-light leading-relaxed text-white max-w-[715px] block'>Inwestycja realizowana z wysokiej klasy materiałów — trwałość, precyzja wykonania i nowoczesne technologie.</span>
                    </div>
                    <div className="lg:w-1/3 relative z-10">
                        <div className="flex lg:justify-center">
                            <Link to={'https://fourseasons-mountain.pl/uploads/katalog_TEC_REM_X_FSMA.pdf'} target='_blank'>
                                <button className='text-white uppercase font-poppins py-4 px-4 border hover:bg-white hover:text-[#1e1e1e] transition-all w-full md:w-auto cursor-pointer'>Dowiedz się więcej</button>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="absolute right-0 top-0 bottom-0 w-1/2 z-0 opacity-[0.1] pointer-events-none"
                        style={{
                            backgroundImage: `
      linear-gradient(to right,rgb(255, 255, 255) 10%, transparent 50%),
      url('http://localhost:5173/src/assets/images/images/szczyrk_aboutUs.png')
    `,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center bottom',
                            backgroundRepeat: 'no-repeat, no-repeat',
                            mixBlendMode: 'multiply',
                        }}
                    ></div>

                </div>
                <div className="text-center min-h-[300px] rounded-[50px] flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                    <div className="lg:w-2/3 relative z-10">
                        <h2 className='font-poppins text-white text-2xl sm:text-5xl md:text-6xl lg:text-[54px] font-extralight mb-2'>PROSPEKT INWESTYCYJNY</h2>
                        <span className='text-md md:text-xl font-light leading-relaxed text-white max-w-[715px] block'>Inwestycja realizowana z wysokiej klasy materiałów — trwałość, precyzja wykonania i nowoczesne technologie.</span>
                    </div>
                    <div className="lg:w-1/3 relative z-10">
                        <div className="flex lg:justify-center">
                            <Link to={'https://fourseasons-mountain.pl/uploads/katalog_TEC_REM_X_FSMA.pdf'} target='_blank'>
                                <button className='text-white uppercase font-poppins py-4 px-4 border hover:bg-white hover:text-[#1e1e1e] transition-all w-full md:w-auto cursor-pointer'>Dowiedz się więcej</button>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="absolute right-0 top-0 bottom-0 w-1/2 z-0 opacity-[0.1] pointer-events-none"
                        style={{
                            backgroundImage: `
      linear-gradient(to right,rgb(255, 255, 255) 10%, transparent 50%),
      url('http://localhost:5173/src/assets/images/images/szczyrk_aboutUs.png')
    `,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center bottom',
                            backgroundRepeat: 'no-repeat, no-repeat',
                            mixBlendMode: 'multiply',
                        }}
                    ></div>

                </div>
            </div>
        </div>
    )
}

export default Cta