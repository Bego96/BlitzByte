import { useState } from "react";
import ProductItem from "../main/ProductItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Phone(props) {

    

    const [phoneProduct, setPhoneProduct] = useState(
        props.products.filter((product) => product.product.type === "Smartphone") 
    )
    

    return (
        <div className="p-10">
            <div>
                <div className="text-2xl font-semibold mb-10">
                    <h2>Mobiteli</h2>
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
                        phoneProduct.map((phone) => {
                            return (
                                <SwiperSlide key={phone.id}>
                                    <ProductItem image={phone.product.images[0].img} name={phone.product.name} description={phone.product.description} price={phone.product.price}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Phone;