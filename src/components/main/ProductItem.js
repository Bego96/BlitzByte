// Product item will be used to show different products in a list of shop and latest products up to 10 days oldest in Home page 
import {BsCart} from 'react-icons/bs';
import Product from './Product';
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function ProductItem(props) {

    const location = useLocation();
   
    const pathnames = location.pathname.split('/').filter((item) => item);
    
    const routeTo = `/${pathnames.slice(0, 1 + 1).join('/')}`;
    
    const route = `${routeTo}/${props.id}`
    
    

    const addToCart = (productId) => {
        const product = productId;
       
        props.addToCart(product)
    }

    return (
            <div className="rounded-md overflow-hidden">
                <Link to={route}>
                    <div className="overflow-hidden">
                        <img className="hover:scale-105 transition-all delay-50" src={props.image[0].img} alt="product"/>
                    </div>
                </Link>
                <div className="bg-white p-4 min-h-[240px] flex flex-col justify-between">
                    <Link to={route}>
                        <div className="">
                            <h2 className="text-orange-700 font-semibold text-base mb-5">{ props.name} </h2>
                            <p className="font-semibold text-base mt-5 text-slate-600">{ props.price } $</p>
                        </div>
                    </Link>
                    <div>
                        <p className='text-green-700 font-semibold'>Available</p>
                    </div>
                        <div className="flex justify-center mt-5">
                            <button type="button" onClick={() => addToCart(props.id)} className="box-border rounded-md bg-gradient-to-r from-cyan-600 to-cyan-700 text-md text-slate-100 h-12 w-full hover:from-pink-500 hover:to-pink-600 hover:mb-1 transition-all delay-50">Add to cart</button>
                        </div>
                </div>
            </div>
    )
}

export default ProductItem;