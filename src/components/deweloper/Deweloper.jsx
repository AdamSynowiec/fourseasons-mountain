import React, { useEffect, useState } from 'react';
import Container from '../container/Container';
import H2 from '../headings/H2';
import Config from '../../Config';

const Deweloper = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${Config.url.baseUrl}/acp/api/content/items/fmdeweloper`, {
            headers: {
                'api_key': Config.rest.apiKey
            }
        })
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
                    <div className="col-span-1 lg:min-h-svh flex flex-col justify-center">
                        <H2>{fmd_header}</H2>
                        <p
                            className="font-poppins font-extralight mb-[24px] lg:mb-auto text-[16px] sm:text-[20px] lg:text-[24px] text-white lg:mr-[24px]"
                            dangerouslySetInnerHTML={{ __html: fmd_content }}
                        ></p>
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
