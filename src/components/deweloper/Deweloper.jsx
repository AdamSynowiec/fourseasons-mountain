import React, { useEffect, useState } from 'react';
import Container from '../container/Container';
import H2 from '../headings/H2';
import Config from '../../Config';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Deweloper = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${Config.url.baseUrl}/acp/api/content/items/fmdeweloper?api_key=${Config.rest.apiKey}`)
            .then(res => res.json())
            .then(json => {
                if (json && json.length > 0) {
                    setData(json[0]);
                }
            })
            .catch(err => console.error('API fetch error:', err));
    }, []);

    if (!data) return null;

    const { fmd_header, fmd_content, fmd_image } = data;
    const imageUrl = `${Config.url.baseUrl}/acp/storage/uploads/${fmd_image?.path}`;

    return (
        <div id="o_deweloperze" className="lg:min-h-svh bg-[#1E1E1E] border-[#3E3E3E] py-[24px] lg:py-auto">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 flex items-center">
                    <div className="col-span-1 flex flex-col justify-center">
                        <H2>{fmd_header}</H2>
                        <p
                            className="font-poppins font-extralight lg:mb-auto text-[16px] sm:text-[20px] lg:text-[24px] text-white lg:mr-[24px]"
                            dangerouslySetInnerHTML={{ __html: fmd_content }}
                        ></p>
                        <div className="">
                            <button className='my-[24px] bg-[#A8853F] hover:bg-[#A8853F]/[0.9] text-white border-b-4 border-[#A8853F] p-4 font-poppins drop-shadow-lg cursor-pointer'>
                                <Link to={"https://kgd-group.pl"}>Dowiedz się więcej</Link>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <img src={imageUrl} alt={fmd_image?.altText || fmd_header} className='w-full' />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Deweloper;
