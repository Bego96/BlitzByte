// This Product component will be used as a single page to set product details when user clicks on Product Item in a list of products (From latest products in Home page, from all products in Shop, and discounted in Discounts ). Essentialy it opens new page for clicked products details.
// Regarding images, there will be main image and under it array of images, when we click on image in array then main image changes, detecting is done with image's id.
import { Link, useParams} from "react-router-dom";
import sliderService from '../../assets/services/sliderService';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState,  } from "react";



function Product(props) {

    const { productId } = useParams();

    const [mainImage, setMainImage] = useState(0)
    const [numOfProducts, setNumOfProducts] = useState(0)
    
    const product = props.products.find((p) => p.id === Number(productId));

    const addToCart = (productId) => {
        const product = parseInt(productId);
        props.addToCart(product)
    }


    const numOfProduct = (event) => {
        let num  = event.target.value;
        setNumOfProducts(num);
    }


    if (!product) {
        return <div>Product not found</div>;
    }

    
    return (
        <div className="flex justify-between p-20 tablet:flex-col laptop:p-10">
            <div className="w-1/2 tablet:w-full tablet:mb-20">
                <div className="mb-10">
                    <img src={product.product.images[mainImage].img} alt='product main'/>
                </div>
                <div className="w-[70%]">
                    <Swiper
                    slidesPerView={5}
                    spaceBetween={5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                product.product.images.map((image) => {
                                return (
                                    <SwiperSlide key={image.id}>
                                        <div key={image.id} onClick={() => setMainImage(image.id-1)} className={`box-border cursor-pointer ${(image.id-1) === mainImage ? 'border border-slate-400' : ''}`}>
                                            <img src={image.img} alt='product'/>
                                        </div>
                                    </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
            </div>
            <div className="w-1/2 pl-6 tablet:w-full tablet:p-0">
                <h2 className="text-3xl mb-6">{product.product.name}</h2>
                <p className="mb-3">{product.product.description}</p>
                <p className="mb-3 text-4xl font-bold text-slate-600">{product.product.price}</p>
                <ul className="mb-10 text-slate-500">
                {
                    product.product.components.map((component) => {
                        return (
                            <li key={component.id}>{component.component}</li>  
                        )
                    })
                }
                </ul> 
                <div className="flex">    
                    <div className="w-14 mr-4">
                        <input className="w-full p-2 rounded border border-slate-400" type="number" id="productNum" name="productNum" step="1" value={numOfProducts < 1 ? 1 : numOfProducts} onChange={numOfProduct}/>
                    </div>
                    <div className="w-[40%]">
                        <button className="bg-blue-500 w-full h-10 text-white rounded" onClick={() => addToCart(productId)}>Add to basket</button>
                    </div>
                </div>  
            </div>
        </div>
        
    )
}

export default Product;