import { useState } from "react";
import ShopNavigation from "./ShopNavigation";
import ShopContainer from "./ShopContainer";

function Shop(props) {
    
    const [products, setProducts] = useState(
        props.products
    )

    console.log(products);
    
    const [filtered, setFiltered] = useState(products)

    const sortingProducts = (value) => {
        if (value !== "All products") {
            setFiltered(products.filter((product) => product.product.type === value))
            
        } else {
            setFiltered(products);
        }
        
    }

    const selectedCategory = (value) => {
        if (value !== "All products") {
            setFiltered(products.filter((product) => product.product.type === value))
        } else  {
            setFiltered(products);
        }
        
    }


    const filterByPrice = (min, max) => {
        // Filter products based on price range and update filtered state
        const filteredProducts = products.filter(
            (product) => product.product.price >= min && product.product.price <= max
        );
        //setFiltered(filteredProducts);
        console.log(filteredProducts)
    };

    console.log(products);
    return (
        <><div className="">
            <div className="p-10 text-center">
                <p className="text-2xl">Homepage  / <span className="text-blue-500">Shop</span></p>
            </div>
            <ShopNavigation products={products} sortingProducts={sortingProducts}/>
            <ShopContainer products={filtered} selectedCategory={selectedCategory} filterByPrice={filterByPrice}/>
        </div>
        </>
    )
}

export default Shop;