import { useState, useEffect } from "react";
import CartProduct from "./cartProduct";

function Cart(props) {
    return (
        <div className="py-6 phone:px-6 flex flex-col min-h-[65vh]">
            {!props.cartList || props.cartList.length === 0 ? (
                
                    <div className="p-6 bg-slate-100 mt-6 text-center text-2xl rounded-md">No items in cart</div>
                
            ) : (
                    props.cartList.map((cartProduct) => (
                        <CartProduct removeFromCart={props.removeFromCart} key={cartProduct.id} id={cartProduct.id} name={cartProduct.product.name} description={cartProduct.product.description} image={cartProduct.product.images[0].img} price={cartProduct.product.price}/>
                    ))
            )}
        </div>
    );
}

export default Cart;
