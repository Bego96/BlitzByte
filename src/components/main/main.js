
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import Discounts from "../discounts/Discounts";
import { useEffect, useState } from "react";
import productListService from "../../assets/services/productListService";
import Product from "./Product";
import RouteLinks from "./RouteLinks";

function Main() {
    // Main products list used for filter and printing products in a list inside of Homepage, Shop and Discounts. 
    // Main component is a higher order component for product list.

    const [products, setProducts] = useState()


    useEffect(() => {

      // If server is available fetch products
      // Otherwise use products from service in front end
      if (products === false || null) {
        fetch('http://localhost:3001/products') // Adjust the URL to match your server
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
            throw new Error('Network response was not ok');
        })
        .then((data) => {
          setProducts(data); // Set the fetched data in the state
        })
        .catch((error) => console.log("Im sorry but, " + error));
      } else {
        setProducts(productListService)
      }
      

    }, []);
  
    
    return (
      <>
        {
          products && 
          
            <RouteLinks products={products}/>
          
        }
      </>
    )
}

export default Main;