import { useEffect, useState } from "react";
import ShopNavigation from "./ShopNavigation";
import ShopContainer from "./ShopContainer";

function Shop(props) {
    const [products, setProducts] = useState()
    const [itemsPerPage, setItemsPerPage] = useState(null);
    const [itemOffset, setItemOffset] = useState(0);
    
    const sortingProducts = (value) => {
        
            if (value === 'Lowest') {
                  fetch(`https://blitzbyte-server.vercel.app/products/all/lowest-price`)
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
                      setItemOffset(0);
                    } else {
                      console.error('Invalid data format from the server:', data);
                    }
                  })
                  .catch((error) => {
                      console.error("Error fetching by category and type", error);
                  });
            } else if (value === 'Highest') {
              fetch(`https://blitzbyte-server.vercel.app/products/all/highest-price`)
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
                  setItemOffset(0);
                } else {
                  console.error('Invalid data format from the server:', data);
                }
              })
              .catch((error) => {
                  console.error("Error fetching by category and type", error);
              });
            } else if (value === 'All prices') {
              fetch('https://blitzbyte-server.vercel.app/products')
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
                  setItemOffset(0);
                } else {
                  console.error('Invalid data format from the server:', data);
                }
              })
              .catch((error) => console.log("I'm sorry but, " + error));
            }
    }

    const selectedCategory = (value) => {
        let category = value; // Assuming 'brand' is equivalent to 'type' in your backend
        
        if (value !== 'All products') {
            fetch(`https://blitzbyte-server.vercel.app/allProductsByCategory?category=${category}`)
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
                setItemOffset(0);
                console.log("Fetched products " + productList)
              } else {
                console.error('Invalid data format from the server:', data);
              }
            })
            .catch((error) => {
                console.error("Error fetching by category and type", error);
        });
        } else if (value === 'All products') {
            fetch('https://blitzbyte-server.vercel.app/products')
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
                  setItemOffset(0);
            } else {
              console.error('Invalid data format from the server:', data);
            }
          })
          .catch((error) => console.log("I'm sorry but, " + error));
        }
        
        
    }


    const filterByPrice = (minMax) => {
        // Filter products based on price range and update filtered state
        const minPrice = minMax[0];
        const maxPrice = minMax[1];
       
        fetch(`https://blitzbyte-server.vercel.app/sortAllProductsByPrice?minPrice=${minPrice}&maxPrice=${maxPrice}`)
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
            setItemOffset(0);
          } else {
            console.error('Invalid data format from the server:', data);
          }
        })
        .catch((error) => {
            console.error("Error fetching by category and type", error);
      });
    };

    
    useEffect(() => {
        fetch('https://blitzbyte-server.vercel.app/products')
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
              setItemOffset(0);
            } else {
              console.error('Invalid data format from the server:', data);
            }
          })
          .catch((error) => console.log("I'm sorry but, " + error));
      }, []);

      console.log("IM PRODUCTS " +products)
  return (
    <>
      <div className="pb-10 px-6 tablet:px-4">
        <div className="pt-10 text-center">
          <p className="text-3xl text-blue-600">Shop</p>
        </div>
        {
            products && <ShopNavigation
            products={products}
            sortingProducts={sortingProducts}
            itemsPerPage={itemsPerPage}
          />
        }
        {
            products && <ShopContainer
            itemOffset={itemOffset}
            setItemsPerPage={setItemsPerPage}
            setItemOffset={setItemOffset}
            itemsPerPage={itemsPerPage}
            products={products}
            selectedCategory={selectedCategory}
            filterByPrice={filterByPrice}
            addToCart={props.addToCart}
          />
        }
        
      </div>
    </>
  );
}

export default Shop;
