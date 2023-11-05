
import { useEffect, useState } from "react";
import productListService from "../../assets/services/productListService";
import RouteLinks from "./RouteLinks";

function Main(props) {
    // Main products list used for filter and printing products in a list inside of Homepage, Shop and Discounts. 
    // Main component is a higher order component for product list.
  
    
    return (
      <>
        {
          props.products && 
          
            <RouteLinks products={props.products} addToCart={props.addToCart} removeFromCart={props.removeFromCart} cartProductList={props.cartProductList}/>

        }
      </>
    )
}

export default Main;