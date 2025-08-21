import React from 'react'
import Container from '../container/Container'
import winterImage from '../../assets/images/images/winter.png'
import winterImage2 from '../../assets/images/images/winter2.png'
import summerImage from '../../assets/images/images/summer.png'
import summerImage2 from '../../assets/images/images/summer2.png'
import fallImage from '../../assets/images/images/fall.png'
import fallImage2 from '../../assets/images/images/fall2.png'
import H2 from '../headings/H2'
const Attractions = () => {

    const data = [
        {
            id: "1",
            header: "Zimowe",
            subHeader: `
            <ul class="space-y-4 list-disc">
            <li> Szczyrk Mountain Resort - jeden z największych ośrodków narciarskich w Polsce z 22 km tras zjazdowych</li> 
            <li> Centralny Ośrodek Sportu - Skrzyczne - trasy na najwyższym szczycie Beskidu Śląskiego (1257 m n.p.m.)</li> 
            <li> Beskid Sport Arena - rodzinny ośrodek narciarski o łącznej długości tras ponad 2 km</li> 
            </ul>
            `,
            images: [
                {
                    url: winterImage,
                },
                {
                    url: winterImage2
                }
            ]
        },
        {
            id: "1",
            header: "Letnie",
            subHeader: `
            <ul class="space-y-4 list-disc">
            <li>Szczyrk Enduro Trails by TREK - kompleks 13 jednokierunkowych tras rowerowych o łącznej długości 16 km</li>
            <li>Górskie szlaki turystyczne - na Skrzyczne, Klimczok, Magurę i inne szczyty Beskidu Śląskiego</li>
            <li>Ścieżka pieszo-rowerowa wzdłuż Żylicy - idealna na rodzinne przejażdżki</li>
            <li>Crossowy tor rowerowy - pętla o długości 1,85 km</li>
            </ul>
            `,
            images: [
                {
                    url: summerImage,
                },
                {
                    url: summerImage2
                }
            ]
        },
        {
            id: "1",
            header: "Cały rok",
            subHeader: `
            <ul class="space-y-4 list-disc">
            <li>Restauracje i kawiarnie</li>
            <li>Centra sportowe i rekreacyjne</li>
            <li>Urokliwe centrum miasta Szczyrk</li>
            <li>Punkty widokowe z panoramą Beskidów</li>
            </ul>
            `,
            images: [
                {
                    url: fallImage,
                },
                {
                    url: fallImage2
                }
            ]
        }
    ]

    return (
        <div className='lg:min-h-svh py-[24px] lg:py-[64px] bg-[#1E1E1E] border-b border-[#3E3E3E]'>
            <Container>
                <H2>ATRAKCJE W POBLIŻU</H2>
            </Container>
            {data?.map((item) => {
                let delay = 100;
                return (<div className="lg:min-h-svh py-[24px] lg:py-auto grid grid-cols-1 md:grid-cols-2 flex items-center relative">
                    <div className="col-span-1 px-[8px] lg:ml-[10vw]">
                        <h3 className='font-poppins font-extralight text-[24px] sm:text-[54px] lg:text-[96px] text-[#A8853F] pb-[12px] lg:pb-[64px]'>{item.header}</h3>
                        <p className='font-poppins font-extralight text-[16px] sm:text-[28px] lg:text-[32px] text-white' dangerouslySetInnerHTML={{ __html: item.subHeader }} />
                    </div>
                    <div className="hidden col-span-1 pl-[75px] gap-[80px] lg:flex overflow-hidden">
                        {item.images.map((image) => {
                            
                            return <img data-aos="fade-up" data-aos-delay={delay+=300} src={image.url} alt="" />
                        })}
                    </div>
                    <div className="lg:hidden col-span-1 flex overflow-hidden py-[24px]">
                        <Container>
                            <img src={item.images[0].url} alt="" className='w-full' />
                        </Container>
                    </div>
                </div>)
            })}
        </div >
    )
}

export default Attractions