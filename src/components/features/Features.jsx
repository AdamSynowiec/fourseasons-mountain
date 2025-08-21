import React from 'react'
import Container from '../container/Container'
import H2 from '../headings/H2'
import icon_elastycznosc from '../../assets/icons/icon_elastycznosc.svg'
import icon_stabilna_inwestycja from '../../assets/icons/icon_stabilna_inwestycja.svg'
import icon_udogodnienia from '../../assets/icons/icon_udogodnienia.svg'
import icon_strefa_relaksu from '../../assets/icons/icon_strefa_relaksu.svg'
import icon_caloroczna_atrakcyjnosc from '../../assets/icons/icon_caloroczna_atrakcyjnosc.svg'
import icon_lokalizacja from '../../assets/icons/icon_lokalizacja.svg'

const Features = () => {

    const data = [
        {
            id: "1",
            icon: icon_lokalizacja,
            header: "Lokalizacja premium",
            content: "Przy ul. Wrzosowej w Szczyrku, w bliskiej odległości od głównych atrakcji regionu"
        },
        {
            id: "2",
            icon: icon_caloroczna_atrakcyjnosc,
            header: "Całoroczna atrakcyjność",
            content: "Zima na stokach, lato na górskich i rowerowych szlakach"
        },
        {
            id: "3",
            icon: icon_strefa_relaksu,
            header: "Strefa relaksu",
            content: "Sauna, jacuzzi i przestrzeń wypoczynkowa tylko dla mieszkańców"
        },
        {
            id: "4",
            icon: icon_udogodnienia,
            header: "Udogodnienia",
            content: "Recepcja, narciarnia/rowerownia, miejsca parkingowe dla każdego apartamentu"
        },
        {
            id: "5",
            icon: icon_stabilna_inwestycja,
            header: "Stabilna inwestycja",
            content: "Możliwość zarządzania wynajmem z preferencyjnymi warunkami"
        },
        {
            id: "6",
            icon: icon_elastycznosc,
            header: "Elastyczność ",
            content: "Możliwość wykończenia apartamentu pod klucz"
        },
    ]

    let delay = 100;

    return (
        <div className='lg:min-h-svh py-12 lg:py-[64px] bg-[#1E1E1E] border-b border-[#3E3E3E]'>
            <Container>
                <H2>DLACZEGO FOUR SEASONS MOUNTAIN APARTMENTS?</H2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[64px] lg:gap-[105px]">
                    {data?.map((item) => {
                        delay += 100;
                        return (<div data-aos="fade-up" data-aos-delay={delay} className="col-span-1 lg:p-[40px] hover:bg-[#212121] text-center lg:text-left">
                            <img src={item.icon} alt="" className='mx-auto mb-12'/>
                            <h4 className='font-poppins text-[28px] font-medium text-white mt-4 mb-2'>{item.header}</h4>
                            <span className='font-poppins text-[16px] font-extralight text-white'>{item.content}</span>
                        </div>)
                    })}
                </div>
                <H2 className="text-center py-24">Termin realizacji - planowane zakończenie w Q3 2027</H2>
            </Container>
        </div>
    )
}

export default Features