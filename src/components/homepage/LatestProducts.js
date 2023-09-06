import { useState } from "react";
import ProductItem from "../main/ProductItem";
import { Link} from "react-router-dom";

function LatestProducts(props) {
    let maxProducts = 8;
    const [latestProducts, setLatestProducts] = useState(
        props.products.slice(0, maxProducts)
    )
    

    console.log(latestProducts);

    return (
        <><div className="p-10 ">
                <h2 className=" text-2xl font-semibold mb-10">Najnovije</h2>
                <div className="grid grid-cols-4 gap-2 place-items-stretch gap-y-8">
                    {
                        latestProducts.map((product) => {
                            return (
                                <ProductItem image={product.product.images[0].img} name={product.product.name} description={product.product.description} price={product.product.price}/>
                            )
                        })
                    }
                </div>
                <div className="text-center mt-10">
                    <Link to="/Shop" className="text-lg font-semibold">Svi proizvodi</Link>
                </div>
            </div>
        </>
    )
}

export default LatestProducts;