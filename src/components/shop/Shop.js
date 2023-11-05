import { useEffect, useState } from "react";
import ShopNavigation from "./ShopNavigation";
import ShopContainer from "./ShopContainer";

function Shop(props) {
    
    const [products, setProducts] = useState(
        props.products
    )
    const [itemsPerPage, setItemsPerPage] = useState(products.length > 9 ? 10 : products.length)
    const [filtered, setFiltered] = useState(products)

    const sortingProducts = (value) => {
        const sortedProducts = [...products];
            if (value === 'Lowest') {
                // Create a copy of the products array to avoid modifying the original state directly
                // Sort the products based on price in ascending order
                sortedProducts.sort((a, b) => a.product.price - b.product.price);
                // Update the state with the sorted products
                setFiltered(sortedProducts);
            } else if (value === 'Highest') {
                // Create a copy of the products array to avoid modifying the original state directly
                const sortedProducts = [...products];
    
                // Sort the products based on price in descending order
                sortedProducts.sort((a, b) => b.product.price - a.product.price);
               
                setFiltered(sortedProducts);
            } else if (value === 'All prices') {
                setFiltered(sortedProducts);
            }
    }

    const selectedCategory = (value) => {
        if (value !== "All products") {
            setFiltered(products.filter((product) => product.product.type === value))
        } else  {
            setFiltered(products);
        }
        
    }


    const filterByPrice = (minMax) => {
        // Filter products based on price range and update filtered state
        const filteredProducts = products.filter(
            (product) => product.product.price >= minMax[0] && product.product.price <= minMax[1]
        );
      setFiltered(filteredProducts);
        
    };


    return (
        <><div className="">
            <div className="pt-10 text-center">
                <p className="text-3xl text-blue-600">Shop</p>
            </div>
            <ShopNavigation products={products} sortingProducts={sortingProducts} itemsPerPage={itemsPerPage}/>
            <ShopContainer itemsPerPage={itemsPerPage} products={filtered} selectedCategory={selectedCategory} filterByPrice={filterByPrice} placeProductLink={props.placeProductLink} addToCart={props.addToCart}/>
        </div>
        </>
    )
}

export default Shop;