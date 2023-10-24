import { useState, useEffect } from "react";
import ProductItem from "../main/ProductItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Desktop(props) {

    

    const [desktopProduct, setDesktopProduct] = useState(
        props.products.filter((product) => product.product.type === "Desktop PC") 
    )
    
    const placeProductLink = (link) => {
        props.placeProductLink(link)
    }
    

    return (
        <div className="p-10 phone:p-6">
            <div>
                <div className="text-2xl font-semibold mb-10">
                    <h2>Desktop</h2>
                </div>
            
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
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        desktopProduct.map((desktop) => {
                            return (
                                <SwiperSlide key={desktop.id}>
                                    <ProductItem routes={props.routes} placeProductLink={placeProductLink} image={desktop.product.images} name={desktop.product.name} description={desktop.product.description} price={desktop.product.price}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Desktop;