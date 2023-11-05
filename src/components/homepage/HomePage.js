import Desktop from "./Desktop";
import HowItsDone from "./HowItsDone";
import Laptop from "./Laptop";
import LatestProducts from "./LatestProducts";
import Phone from "./Phone";
import Slider from "./Slider";
import Television from "./Television";
import WhatWeSale from "./WhatWeSale";
import { useState } from "react";
import './styles.css'
import { useLocation, Navigate } from "react-router-dom";

function HomePage(props) {

    const [products, setProducts] = useState(
        props.products

    )

    const location = useLocation();
    console.log(location)

    if (location.pathname === '/') {
        return <Navigate to='/Home' />
    }

    return(
        <div className="">
            <Slider />
            <HowItsDone />
            <WhatWeSale />
            <LatestProducts products={products} addToCart={props.addToCart}/>
            <Desktop products={products} addToCart={props.addToCart}/>
            <Laptop products={products} addToCart={props.addToCart}/>
            <Phone products={products} addToCart={props.addToCart}/>
            <Television products={products} addToCart={props.addToCart}/>
        </div>
    )
}

export default HomePage;