import { useState } from "react";
import sliderService from '../../assets/services/sliderService';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SliderProduct from "./SliderProduct";


function Slider() {
    const [sliderGallery, setSliderGallery] = useState(
        sliderService
    );


    return (
        <div className="w-full my-20 rounded-md overflow-hidden">
             <Swiper
                slidesPerView={window.screen.width > 768 ? 2 : 1}
                spaceBetween={0}
                modules={[Navigation, Pagination, Scrollbar, A11y, ]}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    sliderGallery.map((sliderItem) => {
                        return (
                            <SwiperSlide key={sliderItem.id}>
                                <SliderProduct
                                    key={sliderItem.id}
                                    contentId={sliderItem.contentId}
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





