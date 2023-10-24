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
        <div className="bg-slate-200">
            <Slider />
            <HowItsDone />
            <WhatWeSale />
            <LatestProducts products={products}/>
            <Desktop products={products}/>
            <Laptop products={products}/>
            <Phone products={products}/>
            <Television products={products}/>
        </div>
    )
}

export default HomePage;