import { useState } from "react";
import ProductItem from "../main/ProductItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Laptop(props) {

    

    const [laptopProduct, setDesktopProduct] = useState(
        props.products.filter((product) => product.product.type === "Laptop") 
    )
    

    return (
        <div className="p-10">
            <div>
                <div className="text-2xl font-semibold mb-10">
                    <h2>Laptopi</h2>
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
                        laptopProduct.map((laptop) => {
                            return (
                                <SwiperSlide key={laptop.id}>
                                    <ProductItem image={laptop.product.images[0].img} name={laptop.product.name} description={laptop.product.description} price={laptop.product.price}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Laptop;