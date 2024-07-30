import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './carousel.scss'

interface Param {
    cards?: { card: JSX.Element }[],
    handleClick?: () => void;
}

export default function Carousel({ cards, handleClick }: Param) {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={'auto'}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop
                effect=""
                className='custom-swiper'
            >
                {cards ? cards.map((card, index) => (
                    <>
                        <SwiperSlide>
                            {card.card}
                        </SwiperSlide>
                    </>
                )) : null}

            </Swiper>
        </>
    )
}