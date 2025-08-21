import React from 'react'

import img1 from '../../assets/images/images/6_sypialnia.jpg'
import img2 from '../../assets/images/images/17_lazienka.jpg'
import img3 from '../../assets/images/images/14_sypialnia.jpg'

const Packages = () => {
    return (
        <div id="pakiety" className='bg-[#1E1E1E] border-b border-[#3E3E3E]'>
            <div className="flex flex-col md:flex-row items-start">

                {/* PAKIET CLASSIC */}
                <div className="w-full md:w-1/3 py-24 text-center overflow-hidden min-h-[250px] lg:min-h-[500px] flex flex-col px-4 lg:px-[100px] border-[#3E3E3E] hover:bg-[#212121]">
                    <h4 className='font-poppins text-[28px] font-medium text-white mt-4 mb-2'>PAKIET CLASSIC</h4>
                    <p className='font-poppins text-[16px] font-extralight text-white'>
                        Pakiet skoncentrowany na podstawowych elementach wykończenia, zapewniający przytulną atmosferę i funkcjonalność.
                    </p>
                    {/* <div className="flex flex-row items-center justify-center gap-2 py-[24px]">
                        <span className='font-poppins text-[16px] font-extralight text-white block'>od</span>
                        <h2 className='font-poppins text-[24px] lg:text-[38px] text-[#A8853F]'>3 300zł/m<sup>2</sup></h2>
                    </div> */}
                    <div className="py-[24px]">
                        <img src={img1} alt="" />
                    </div>

                    <div className="text-white text-[14px] font-extralight space-y-3 text-center flex flex-col gap-[16px]">
                        <div className="flex flex-col">
                            <span className="font-semibold">INSTALACJE:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Zachowanie istniejącej instalacji wod.-kan. oraz elektrycznej</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">PROJEKT:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Układ funkcjonalny + projekt łazienki oraz kuchni</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">WIZUALIZACJE:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Łazienki oraz kuchni (brak zmian)</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">PŁYTKI:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">60x60</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">ARMATURA I CERAMIKA:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Kludi, Kohlman, Roca (dokładne modele dostępne w katalogu)</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">SUFITY:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">-</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">DRZWI:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Standard, przylgowe (dokładne modele dostępne w katalogu)</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">ŚCIANY:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Farba flugger</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">AGD:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Whirlpool (dokładne modele dostępne w katalogu)</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">OŚWIETLENIE:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Natynkowe</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">PODŁOGA:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Panele laminowane lub płytki</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">ZABUDOWA MEBLOWA*:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Płyty meblowe laminowane</span>
                        </div>
                    </div>
                </div>

                {/* PAKIET SUPREME */}
                <div className="w-full md:w-1/3 py-24 text-center overflow-hidden min-h-[250px] lg:min-h-[500px] flex flex-col px-4 lg:px-[100px] border-[#3E3E3E] hover:bg-[#212121]">
                    <h4 className='font-poppins text-[28px] font-medium text-white mt-4 mb-2'>PAKIET SUPREME</h4>
                    <p className='font-poppins text-[16px] font-extralight text-white'>
                        Pakiet oferujący bardziej wyszukane elementy wykończenia, w większym formatach i droższych materiałach.
                    </p>
                    {/* <div className="flex flex-row items-center justify-center gap-2 py-[24px]">
                        <span className='font-poppins text-[16px] font-extralight text-white block'>od</span>
                        <h2 className='font-poppins text-[24px] lg:text-[38px] text-[#A8853F]'>3 300zł/m<sup>2</sup></h2>
                    </div> */}
                    <div className="py-[24px]">
                        <img src={img2} alt="" />
                    </div>

                    <div className="text-white text-[14px] font-extralight space-y-3 text-center flex flex-col gap-[16px]">
                        <div className="flex flex-col">
                            <span className="font-semibold">INSTALACJE:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Dostosowanie instalacji wod.-kan. oraz elektrycznej do projektu</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">PROJEKT:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">2 propozycje układu funkcjonalnego + projekt łazienki, kuchni oraz sypialni (możliwość wykonania 1 zmiany)</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">WIZUALIZACJE:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Łazienki oraz kuchni + sypialni (możliwość wykonania 1 zmiany)</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">PŁYTKI:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">60x60, 120x60, 120x120 + mozaika</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">ARMATURA I CERAMIKA:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Grohe, Geberit, Roca (dokładne modele dostępne w katalogu)</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">SUFITY:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Sufity podwieszane</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">DRZWI:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Ukryte, bezprzylgowe (dokładne modele dostępne w katalogu)</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">ŚCIANY:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Farba flugger, tapeta, lamel, beton dekoracyjny</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">AGD:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Electrolux, Samsung (dokładne modele dostępne w katalogu)</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">OŚWIETLENIE:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Natynkowe, podtynkowe</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">PODŁOGA:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Płytki lub drewno</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">ZABUDOWA MEBLOWA*:</span>
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Płyty meblowe + fronty lakierowane (strefa dzienna i łazienka)</span>
                        </div>
                    </div>
                </div>

                {/* PAKIET CUSTOM */}
                <div className="w-full md:w-1/3 py-24 text-center overflow-hidden min-h-[250px] lg:min-h-[500px] flex flex-col px-4 lg:px-[100px] border-[#3E3E3E] hover:bg-[#212121]">
                    <h4 className='font-poppins text-[28px] font-medium text-white mt-4 mb-2'>PAKIET CUSTOM</h4>
                    <p className='font-poppins text-[16px] font-extralight text-white'>
                        Pakiet stworzony dla tych, którzy poszukują indywidualnych rozwiązań i luksusowych<br/>detali.
                    </p>
                    {/* <div className="flex flex-row items-center justify-center gap-2 py-[24px]">
                        <span className='font-poppins text-[16px] font-extralight text-white block'>od</span>
                        <h2 className='font-poppins text-[24px] lg:text-[38px] text-[#A8853F]'>3 300zł/m<sup>2</sup></h2>
                    </div> */}
                    <div className="py-[24px]">
                        <img src={img3} alt="" />
                    </div>

                    <div className="text-white text-[14px] font-extralight space-y-3 text-center flex flex-col gap-[16px]">
                        <div className="flex flex-col">
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Pakiet stworzony dla tych, którzy poszukują indywidualnych rozwiązań i luksusowych detali.</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-poppins text-[12px] lg:text-[16px] text-white font-extralight break-normal">Projekt i wykończenie wnętrza dostosowane do potrzeb i budżetu klienta.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packages
