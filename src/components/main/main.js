
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../navigation/navigation";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import Contact from "../contact/Contact";
import Discounts from "../discounts/Discounts";
import AboutUs from "../aboutus/AboutUs";
import productListService from "../../assets/services/productListService";
import { useState } from "react";

function Main() {
    // Main products list used for filter and printing products in a list inside of Homepage, Shop and Discounts. 
    // Main component is a higher order component for product list.
    // When back end comes instead of importing, we will fetch products from back-end that takes data from database
    const [products, setProducts] = useState(
      productListService
    )

    return (
      
      <Routes>
        <Route path="/" element={<HomePage products={products}/>}/>
        <Route path="/Shop" element={<Shop products={products}/>}/>
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/Snizeno" element={<Discounts products={products}/>}/>
        <Route path="/O nama" element={<AboutUs />}/>
      </Routes> 
    
    )
}

export default Main;