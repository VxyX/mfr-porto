import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/autoplay'
import './carousel.scss'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useCallback, useState } from 'react';

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface Param {
    cards?: { card: JSX.Element }[],
    handleClick?: () => void;
}

export default function Carousel({ cards }: Param) {
    const [swiperRef, setSwiperRef] = useState<SwiperClass>();

    const handlePrevious = useCallback(() => {
        swiperRef?.slidePrev();
    }, [swiperRef]);

    const handleNext = useCallback(() => {
        swiperRef?.slideNext();
    }, [swiperRef]);

    return (
        <>
            <div className='flex'>
                <div className='flex justify-center items-center'>
                    <div className='swiper-prev-btn' onClick={handlePrevious}>
                    </div>
                </div>
                <Swiper
                    onSwiper={setSwiperRef}
                    spaceBetween={50}
                    slidesPerView={'auto'}
                    slidesPerGroup={1}
                    centeredSlides
                    loop
                    touchEventsTarget='container'
                    grabCursor
                    speed={1500}
                    autoplay={{
                        delay: 3500, // Delay in ms // Continue autoplay after user interactions
                    }}
                    className='custom-swiper flex-1'
                >
                    {cards ? cards.map((card, index) => (
                        <>
                            <SwiperSlide key={index} zoom>
                                {card.card}
                            </SwiperSlide>
                        </>
                    )) : null}

                </Swiper>
                <div className='flex justify-center items-center'>
                    <div className='swiper-next-btn' onClick={handleNext}>
                    </div>
                </div>

            </div>

        </>
    )
}