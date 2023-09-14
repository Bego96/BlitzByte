import { useState, useEffect } from "react";
import ProductItem from "../main/ProductItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Laptop(props) {

   // const [slidesPerView, setSlidesPerView] = useState(5);

    const [laptopProduct, setDesktopProduct] = useState(
        props.products.filter((product) => product.product.type === "Laptop") 
    )
    

    /*useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.screen.width < 650 ? 2 : window.screen.width < 1024 ? 3 : window.screen.width < 1281 ? 4 : 5);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);*/

    return (
        <div className="p-10 phone:p-6">
            <div>
                <div className="text-2xl font-semibold mb-10">
                    <h2>Laptopi</h2>
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