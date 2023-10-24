// Product item will be used to show different products in a list of shop and latest products up to 10 days oldest in Home page 
import {BsCart} from 'react-icons/bs';
import Product from './Product';
import { useState } from 'react';
import { Link} from "react-router-dom";

function ProductItem(props) {

    const linkName = props.name

    const selectItem = () => {
        const productDetails = {
            images: props.image,
            name: props.name,
            price: props.price,
            description: props.description,
            components: props.components
        }

        props.placeProductLink({linkName: linkName, productDetails: productDetails})
    }



    return (
        
        <Link to={`/Product}`}>
            <div onClick={() => selectItem()}>
                <div className="">
                    <img className="" src={props.image[0].img} alt="product"/>
                </div>
                <div className="bg-slate-50 p-4 h-[200px] flex flex-col justify-between">
                    <div className="">
                        <h2 className="text-orange-700 font-semibold text-base mb-5">{ props.name} </h2>
                        <p className="font-semibold text-base mt-5">{ props.price }</p>
                    </div>
                    <div className="flex justify-center mt-5">
                        <button type="button" className="bg-blue-500 text-sm text-slate-100 h-12 flex justify-center items-center w-full hover:bg-blue-600"><BsCart size={18} color="#ffff" className='cursor-pointer mr-3'/>Dodaj u korpu</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem;