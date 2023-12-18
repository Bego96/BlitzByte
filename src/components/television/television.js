import { useEffect, useState } from "react";
import TelevisionNavigation from "./televisionNavigation";
import TelevisionContainer from "./televisionContainer";



function Television(props) {

    const [products, setProducts] = useState(
        props.products.filter((product) => product.category === 'TV')
    )
    const [filtered, setFiltered] = useState(products)
    const [itemsPerPage, setItemsPerPage] = useState(filtered.length > 9 ? 10 : filtered.length)

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
        <><div className="pb-10 px-6">
            <div className="pt-10 text-center">
                <p className="text-3xl text-blue-600">TV</p>
            </div>
            <TelevisionNavigation products={products} sortingProducts={sortingProducts} itemsPerPage={itemsPerPage}/>
            <TelevisionContainer itemsPerPage={itemsPerPage} addToCart={props.addToCart} products={filtered} selectedCategory={selectedCategory} filterByPrice={filterByPrice} placeProductLink={props.placeProductLink}/>
        </div>
        </>
    )
}

export default Television;