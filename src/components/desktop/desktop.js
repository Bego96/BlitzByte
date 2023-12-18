import { useEffect, useState } from "react";
import DesktopNavigation from "./desktopNavigation";
import DesktopContainer from "./desktopContainer";

function Desktop(props) {

    const [products, setProducts] = useState(
        //props.products.filter((product) => product.category === 'PC')
    )
    const [itemsPerPage, setItemsPerPage] = useState(null);

    
    const sortingProducts = (value) => {
        const sortedProducts = [...products];
            if (value === 'Lowest') {
                // Create a copy of the products array to avoid modifying the original state directly
                // Sort the products based on price in ascending order
                sortedProducts.sort((a, b) => a.product.price - b.product.price);
                // Update the state with the sorted products
                setProducts(sortedProducts);
            } else if (value === 'Highest') {
                // Create a copy of the products array to avoid modifying the original state directly
                const sortedProducts = [...products];
    
                // Sort the products based on price in descending order
                sortedProducts.sort((a, b) => b.product.price - a.product.price);
               
                setProducts(sortedProducts);
            } else if (value === 'All prices') {
                setProducts(sortedProducts);
            }
    }

    const selectedCategory = (value) => {
        let category = "PC"; // Assuming 'brand' is equivalent to 'type' in your backend
        let brand = value;
        console.log(brand)
        if (value !== 'All brands') {
            fetch(`https://blitzbyte-server.vercel.app/bycategory?category=${category}&brand=${brand}`)
            .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
            })
            .then((data) => {
                let products = data;
                setProducts(products);
                console.log(data)
            })
            .catch((error) => {
                console.error("Error fetching by category and type", error);
        });
        } else {
            fetch('https://blitzbyte-server.vercel.app/desktopPc')
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Network response was not ok');
          })
          .then((data) => {
            if (Array.isArray(data)) {
              const productList = data;
              setProducts(productList);
              setItemsPerPage(productList.length > 9 ? 10 : productList.length);
            } else {
              console.error('Invalid data format from the server:', data);
            }
          })
          .catch((error) => console.log("I'm sorry but, " + error));
        }
        
    }


    const filterByPrice = (minMax) => {
        // Filter products based on price range and update filtered state
        const category = "PC"
        const minPrice = minMax[0];
        const maxPrice = minMax[1];
       
        fetch(`https://blitzbyte-server.vercel.app/sortByPriceAndCategory?minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category}`)
        .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            const productList = data;
            setProducts(productList);
            setItemsPerPage(productList.length > 9 ? 10 : productList.length);
          } else {
            console.error('Invalid data format from the server:', data);
          }
        })
        .catch((error) => {
            console.error("Error fetching by category and type", error);
      });

      console.log(products)

    };

    useEffect(() => {
        fetch('https://blitzbyte-server.vercel.app/desktopPc')
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Network response was not ok');
          })
          .then((data) => {
            if (Array.isArray(data)) {
              const productList = data;
              setProducts(productList);
              console.log(productList)
              setItemsPerPage(productList.length > 9 ? 10 : productList.length);
            } else {
              console.error('Invalid data format from the server:', data);
            }
          })
          .catch((error) => console.log("I'm sorry but, " + error));
      }, []);
    return (
        <><div className="">
            <div className="pt-10 text-center">
                <p className="text-3xl text-blue-600">Desktop</p>
            </div>
            {
                products && <DesktopNavigation products={products} sortingProducts={sortingProducts} itemsPerPage={itemsPerPage}/>
                            
            }
            {products && <DesktopContainer itemsPerPage={itemsPerPage} addToCart={props.addToCart} products={products} selectedCategory={selectedCategory} filterByPrice={filterByPrice} placeProductLink={props.placeProductLink}/>}
            
        </div>
        </>
    )
}

export default Desktop;