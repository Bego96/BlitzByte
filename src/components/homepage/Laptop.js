import { useState, } from "react";
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
        <div className="p-10 phone:p-6 bg-slate-100 rounded-md my-10">
            <div>
                <div className="text-3xl text-slate-600 font-semibold mb-10">
                    <h2>Laptops</h2>
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
                    style={{
                        "--swiper-navigation-color": "#000",
                        "--swiper-navigation-size": "30px",
                      }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        laptopProduct.map((laptop) => {
                            return (
                                <SwiperSlide key={laptop.id}>
                                    <ProductItem id={laptop.id} addToCart={props.addToCart} image={laptop.product.images} name={laptop.product.name} description={laptop.product.description} price={laptop.product.price}/>
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