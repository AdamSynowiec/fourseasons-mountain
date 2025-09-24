import React, { useEffect, useRef, useState } from 'react'
import Container from '../container/Container'
import { motion, AnimatePresence } from "framer-motion";
import Config from '../../Config';

const Gallery = () => {

    const carouselRef = useRef();
    const [width, setWidth] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [dragged, setDragged] = useState(false);
    const [calcWidth, setCalcWith] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(null);

    useEffect(() => {
        const updateWidth = () => {
            if (carouselRef.current) {
                setWidth(
                    carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
                );
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, [calcWidth]);

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    `${Config.url.baseUrl}/acp/api/content/items/fmgallery?sort={_o:1}&api_key=${Config.rest.apiKey}`
                );

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const data = await response.json();

                const imageItems = data[0]?.fm_image.map((img) => ({
                    path: `${Config.url.baseUrl}/acp/storage/uploads/${img.path}`,
                    title: img.title,
                    altText: img.altText
                })) || [];

                setImages(imageItems);
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const handleImageClick = (index) => {
        if (!dragged) {
            setCurrentIndex(index);
            setSelectedImage(images[index]);
        }
    };

    const handleNext = (e) => {
        e.stopPropagation();
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedImage(images[currentIndex + 1]);
        }
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setSelectedImage(images[currentIndex - 1]);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return;

            if (e.key === "ArrowRight") {
                handleNext(e);
            } else if (e.key === "ArrowLeft") {
                handlePrev(e);
            } else if (e.key === "Escape") {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, currentIndex, images]);

    if (loading) return <></>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div id="galeria" className=' py-[64px] bg-[#1E1E1E] border-b border-[#3E3E3E]'>
            <Container>
                <h2 className='font-poppins font-extralight text-[54px] lg:text-[96px] text-[#A8853F] pb-[64px]'>Galeria</h2>
            </Container>
            <div className="overflow-hidden w-full px-4 relative">
                <motion.div
                    ref={carouselRef}
                    className="flex cursor-e-resize active:cursor-e-resize"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    onDragStart={() => setDragged(true)}
                    onDragEnd={() => setDragged(false)}
                    onMouseEnter={() => setCalcWith(!calcWidth)}
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[300px] lg:min-w-[50vw] mr-4"
                            onClick={() => !dragged && handleImageClick(index)}
                        >
                            <img
                                src={`${src.path}`}
                                alt={src.altText || `Slide ${index + 1}`}
                                className="w-full h-auto pointer-events-none"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                        >
                            <button onClick={handlePrev} className="text-white text-3xl p-0 lg:px-4"><svg class="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m15 19-7-7 7-7" />
                            </svg>
                            </button>
                            <motion.img
                                src={selectedImage?.path}
                                alt={selectedImage?.altText || 'Enlarged'}
                                className="rounded-lg shadow-2xl w-[80%] h-auto max-w-4xl"
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.5 }}
                                onClick={(e) => e.stopPropagation()}
                            />
                            <button onClick={handleNext} className="text-white text-3xl p-0 lg:px-4"><svg class="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m9 5 7 7-7 7" />
                            </svg>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Gallery