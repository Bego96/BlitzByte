
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import Discounts from "../discounts/Discounts";
import { useEffect, useState } from "react";
import productListService from "../../assets/services/productListService";
import Product from "./Product";

function Main() {
    // Main products list used for filter and printing products in a list inside of Homepage, Shop and Discounts. 
    // Main component is a higher order component for product list.

    const [products, setProducts] = useState()
    const [productLink, setProductLink] = useState('/Product');


    const placeProductLink = (link) => {
      setProductLink(link)
    }


    console.log(productLink);

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
          <Routes>
          <Route path="/" element={<HomePage products={products} placeProductLink={placeProductLink}/>}/>
          <Route path="/Shop" element={<Shop products={products} placeProductLink={placeProductLink}/>}/>
          <Route path="/Snizeno" element={<Discounts products={products} placeProductLink={placeProductLink}/>}/>
          <Route path={`/Product}`} element={<Product productDetails={productLink.productDetails}/>}/>
        </Routes> 
        }
      </>
    )
}

export default Main;