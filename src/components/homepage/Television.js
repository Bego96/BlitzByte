import { useState } from "react";
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
        <div className="p-10">
            <div>
                <div className="text-2xl font-semibold mb-10">
                    <h2>TV</h2>
                </div>
            
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        televisionProduct.map((television) => {
                            return (
                                <SwiperSlide key={television.id}>
                                    <ProductItem image={television.product.images[0].img} name={television.product.name} description={television.product.description} price={television.product.price}/>
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