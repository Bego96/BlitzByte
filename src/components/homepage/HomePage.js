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

function HomePage(props) {

    const [products, setProducts] = useState(
        props.products

    )


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