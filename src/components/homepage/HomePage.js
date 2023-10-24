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

    const placeProductLink = (link) => {
        props.placeProductLink(link)
    }

    return(
        <div className="bg-slate-200">
            <Slider />
            <HowItsDone />
            <WhatWeSale />
            <LatestProducts products={products} placeProductLink={placeProductLink} routes={['/']}/>
            <Desktop products={products} placeProductLink={placeProductLink} routes={['/']}/>
            <Laptop products={products} placeProductLink={placeProductLink} routes={['/']}/>
            <Phone products={products} placeProductLink={placeProductLink} routes={['/']}/>
            <Television products={products} placeProductLink={placeProductLink} routes={['/']}/>
        </div>
    )
}

export default HomePage;