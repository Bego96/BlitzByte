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

    if (location.pathname === '/') {
        return <Navigate to='/Home' />
    }

    return(
        <div className="p-6 tablet:p-4">
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