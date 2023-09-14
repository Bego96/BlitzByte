import { useEffect, useState } from "react";
import sliderService from '../../assets/services/sliderService';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderProduct from "./SliderProduct";

function Slider() {

    const [sliderGallery, setSliderGallery] = useState(
        sliderService
    );

    // Define a state variable to store the number of slides per view

    // Update the number of slides per view when the window width changes

    return (
        <div className="w-full">
             <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                      width: 640,
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      width: 768,
                      slidesPerView: 2,
                    },
                }}
                spaceBetween={0}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    sliderGallery.map((sliderItem) => {
                        return (
                            <SwiperSlide key={sliderItem.id}>
                                <SliderProduct
                                    key={sliderItem.id}
                                    title={sliderItem.title}
                                    about={sliderItem.about}
                                    image={sliderItem.assets.gallery[0]}
                                    alt={sliderItem.assets.alt}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Slider;





