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
    const [slidesPerView, setSlidesPerView] = useState(2);

    // Update the number of slides per view when the window width changes
    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth < 769 ? 1 : 2);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="w-full">
             <Swiper
                spaceBetween={0}
                slidesPerView={slidesPerView}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    sliderGallery.map((sliderItem) => {
                        return (
                            <SwiperSlide key={sliderItem.id}>
                                <SliderProduct
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





