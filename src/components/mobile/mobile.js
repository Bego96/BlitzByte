import { useEffect, useState } from "react";
import MobileNavigation from "./mobileNavigation";
import MobileContainer from "./mobileContainer";


function Mobile(props) {

    const [products, setProducts] = useState(
        //props.products.filter((product) => product.category === 'PC')
    )
    const [itemsPerPage, setItemsPerPage] = useState(null);

    
    const sortingProducts = (value) => {
        const category = "Phone";
            if (value === 'Lowest') {
                  fetch(`https://blitzbyte-server.vercel.app/products/lowest-price?category=${category}`)
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
            } else if (value === 'Highest') {
              fetch(`https://blitzbyte-server.vercel.app/products/highest-price?category=${category}`)
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
            } else if (value === 'All prices') {
              fetch('https://blitzbyte-server.vercel.app/phones')
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
            }
    }

    const selectedCategory = (value) => {
        let category = "Phone"; // Assuming 'brand' is equivalent to 'type' in your backend
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
        } else {
            fetch('https://blitzbyte-server.vercel.app/phones')
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
        const category = "Phone"
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
        fetch('https://blitzbyte-server.vercel.app/phones')
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
        <><div className="pb-10 px-6 tablet:px-4">
            <div className="pt-10 text-center">
                <p className="text-3xl text-blue-600">Mobile</p>
            </div>
            {
                products && <MobileNavigation products={products} sortingProducts={sortingProducts} itemsPerPage={itemsPerPage}/>
            }
            {
                products && <MobileContainer itemsPerPage={itemsPerPage} addToCart={props.addToCart} products={products} selectedCategory={selectedCategory} filterByPrice={filterByPrice} placeProductLink={props.placeProductLink}/>
            }
           
        </div>
        </>
    )
}

export default Mobile;