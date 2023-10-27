import { useEffect, useState } from "react";
import TelevisionNavigation from "./televisionNavigation";
import TelevisionContainer from "./televisionContainer";



function Television(props) {

    const [products, setProducts] = useState(
        props.products.filter((product) => product.category === 'TV')
    )

    console.log(products);
    
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
        if (value !== "All brands") {
            setFiltered(products.filter((product) => product.product.brand === value))
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
        console.log(filteredProducts + "Min" + minMax[0] + " Max" + minMax[1])
    };


    return (
        <><div className="">
            <div className="p-10 text-center">
                <p className="text-2xl">Homepage  / <span className="text-blue-500">Laptop</span></p>
            </div>
            <TelevisionNavigation products={products} sortingProducts={sortingProducts}/>
            <TelevisionContainer products={filtered} selectedCategory={selectedCategory} filterByPrice={filterByPrice} placeProductLink={props.placeProductLink}/>
        </div>
        </>
    )
}

export default Television;