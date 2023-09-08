import { useState } from "react";
import ProductItem from "../main/ProductItem";
import { Link} from "react-router-dom";

function LatestProducts(props) {
    let maxProducts = 10;
    const [latestProducts, setLatestProducts] = useState(
        props.products.slice(0, maxProducts)
    )
    

    console.log(latestProducts);

    return (
        <><div className="p-10 phone:p-6">
                <h2 className=" text-2xl font-semibold mb-10">Najnovije</h2>
                <div className="grid grid-cols-5 gap-2 place-items-stretch gap-y-8 small-desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 tablet:gap-x-2">
                    {
                        latestProducts.map((product) => {
                            return (
                                <ProductItem image={product.product.images[0].img} name={product.product.name} description={product.product.description} price={product.product.price}/>
                            )
                        })
                    }
                </div>
                <div className="text-center mt-10">
                    <Link to="/Shop" className="text-lg font-semibold text-blue-500 hover:text-blue-600">Svi proizvodi</Link>
                </div>
            </div>
        </>
    )
}

export default LatestProducts;