import { useState, useEffect } from "react";
import ProductItem from "../main/ProductItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Television(props) {


    const [televisionProduct, setTelevisionProduct] = useState(
        props.products.filter((product) => product.product.type === "LED TV") 
    )
    

    return (
        <div className="p-10 phone:p-6 bg-slate-100 rounded-md my-10">
            <div>
                <div className="text-2xl font-semibold mb-10">
                    <h2>TV</h2>
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
                        televisionProduct.map((television) => {
                            return (
                                <SwiperSlide key={television.id}>
                                    <ProductItem id={television.id} image={television.product.images} name={television.product.name} description={television.product.description} price={television.product.price}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Television;