import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../container/Container';
import H2 from '../headings/H2';
import Config from '../../Config';
import { Link } from 'react-router-dom';

const Apartaments = () => {
    const [selectedApartment, setSelectedApartment] = useState(null);
    const [apartmentsData, setApartmentsData] = useState([]);

    const calcPriceM2 = (price, area, id) => {

        const numericPrice = Number(String(price).replace(/\s/g, ''));
        const numericArea = Number(String(area).replace(',', '.'));

        if (isNaN(numericPrice) || isNaN(numericArea) || numericArea === 0) {
            return 0;
        }

        const pricePerM2 = numericPrice / numericArea;
        const rounded = Math.floor(pricePerM2 * 100) / 100;

        return rounded.toLocaleString("pl-PL", {
            maximumFractionDigits: 2,
        });
    };



    const getLatestPrice = (priceArray) => {
        if (!priceArray || priceArray.length === 0) return null;
        const latest = priceArray[priceArray.length - 1];
        return latest.h_price;
    }

    useEffect(() => {
        const fetchApartments = async () => {
            try {
                const response = await fetch(
                    `${Config.url.baseUrl}/acp/api/content/items/fmapartaments?sort={_o:1}`,
                    {
                        method: "GET",
                        headers: {
                            'api_key': Config.rest.apiKey
                        }
                    }
                );

                const json = await response.json();

                const transformedData = json.map((item, index) => ({
                    id: item._id || index.toString(),
                    flatId: item.fm_flatNumber,
                    flatArea: item.fm_apartmentArea,
                    balconyArea: item.fm_balconyArea,
                    flatPriceM2: calcPriceM2((item.history_price ? getLatestPrice(item.history_price) : item.fm_price) || 0, item.fm_apartmentArea || 0, item.fm_flatNumber),
                    flatPrice: item.history_price ? getLatestPrice(item.history_price) : item.fm_price,
                    roomCount: item.fm_rooms,
                    status: item.fm_status,
                    planUrl: item.fm_apartmentPlan?.[0]?.path
                        ? `${Config.url.baseUrl}/acp/storage/uploads/${item.fm_apartmentPlan[0].path}`
                        : ''
                }));

                setApartmentsData(transformedData);
            } catch (error) {
                console.error('Błąd podczas pobierania danych mieszkań:', error);
            }
        };

        fetchApartments();
    }, []);

    useEffect(() => {
        document.body.style.overflow = selectedApartment ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedApartment]);

    return (
        <div id="apartamenty" className='py-12 lg:py-[64px] bg-[#1E1E1E] border-b border-[#3E3E3E]'>
            <Container>
                <H2>Apartamenty</H2>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse text-white font-poppins">
                        <thead className="bg-[#1E1E1E]">
                            <tr className="h-[100px] border-t border-b border-[#3E3E3E] uppercase text-[18px]">
                                <th className="text-center px-4">Mieszkanie</th>
                                <th className="text-center px-4">Liczba pokoi</th>
                                <th className="text-center px-4">Powierzchnia</th>
                                <th className="text-center px-4">Powierzchnia balkonu</th>
                                <th className="text-center px-4">Status</th>
                                <th className="text-center px-4">Cena za m<sup>2</sup></th>
                                <th className="text-center px-4">Cena</th>
                                <th className="text-center px-4">Rzut mieszkania</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apartmentsData.map((item) => {
                                const statusColor = item.status === "Sprzedane"
                                    ? "text-red-600"
                                    : item.status === "Rezerwacja"
                                        ? "text-yellow-400"
                                        : "text-white";
                                const bgstatusColor = item.status === "Sprzedane"
                                    ? "bg-red-500/[0.1]"
                                    : item.status === "Rezerwacja"
                                        ? "bg-[#A8853F]/[0.1]"
                                        : "bg-transparent";

                                return (
                                    <tr
                                        key={item.id}
                                        className={`h-[70px] border-b border-[#3E3E3E] hover:bg-[#212121] cursor-pointer ${bgstatusColor}`}
                                    >
                                        <td className="text-center text-[#A8853F] text-[24px] px-4">{item.flatId}</td>
                                        <td className="text-center px-4">{item.roomCount}</td>
                                        <td className="text-center px-4">{item.flatArea}m<sup>2</sup></td>
                                        <td className="text-center px-4">{item.balconyArea}m<sup>2</sup></td>
                                        <td className={`text-center px-4 ${statusColor}`}>{item.status}</td>
                                        <td className="text-center px-4">{`${item.flatPriceM2} zł`}</td>
                                        <td className="text-center px-4">{`${item.flatPrice} zł`}</td>
                                        <td className="text-center px-4">
                                            {["Sprzedane", "Rezerwacja"].includes(item.status) || !item.planUrl ? "" : (
                                                <span
                                                    className="underline hover:bg-[#212121] p-3 text-[#A8853F] cursor-pointer"
                                                    onClick={() => setSelectedApartment(item)}
                                                >
                                                    Zobacz
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-row gap-4 text-center mx-auto justify-end mt-[64px]">
                    <Link to={"/historia-cen"} className='font-poppins font-extralight text-[16px] text-white underline hover:no-underline'>Historia cen</Link>
                </div>
            </Container>

            {/* Modal */}
            <AnimatePresence>
                {selectedApartment && (
                    <motion.div
                        className="z-50 fixed inset-0 bg-black/80 flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative bg-[#1E1E1E] p-6 w-full h-screen overflow-auto flex items-center justify-center"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            <img
                                src={selectedApartment.planUrl}
                                alt={`Rzut mieszkania ${selectedApartment.flatId}`}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                            <button
                                onClick={() => setSelectedApartment(null)}
                                className="absolute top-4 right-4 text-gray-800 hover:text-red-500"
                            >
                                <svg class="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>

                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Apartaments;
