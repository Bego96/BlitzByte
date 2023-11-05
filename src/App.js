import { useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import './App.css';
import Main from './components/main/main';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import productListService from './assets/services/productListService';

function App() {
  const [showAside, setShowAside] = useState(false);
  const [products, setProducts] = useState()
  const [cartProductList, setCartProductList] = useState([]);

  function toggleAside() {
    setShowAside(prevShowAside => !prevShowAside);
  }

  

  const addToCart = (productId) => {
    const product = productId;
    const productValues = products.find((p) => p.id === product);
  
    if (!productValues) {
      return;
    }
  
    // Check if the product already exists in the cart
    const isProductInCart = cartProductList.some((item) => item.id === product);
  
    if (isProductInCart) {
      alert("Product already exists in cart");
      return;
    }
  
    // If the product is not in the cart, add it
    setCartProductList((prevCart) => [...prevCart, productValues]);
  };

  const removeFromCart = (productId) => {
    const product = productId;

    if (products[product - 1]) {
      const productValues = products[product-1]
      const newCartProductList = cartProductList.filter(item => item !== productValues)
      // Make a copy of the existing cartProductList and add the new product to it
      setCartProductList(newCartProductList);
    }

  }



  useEffect(() => {

    // If server is available fetch products
      // Otherwise use products from service in front end
      if (products === false || null) {
        fetch('http://localhost:3001/products') // Adjust the URL to match your server
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
            throw new Error('Network response was not ok');
        })
        .then((data) => {
          setProducts(data); // Set the fetched data in the state
        })
        .catch((error) => console.log("Im sorry but, " + error));
      } else {
        setProducts(productListService)
      }


    const toggleSideBar = () => {
      if (window.scrollY < 50) {
        setShowAside(false);
      } 
    }

    if (window.innerWidth > 914) {
      window.addEventListener('scroll', toggleSideBar)
    } else {
      window.removeEventListener('scroll', toggleSideBar)
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="relative">
        <Sidebar showAside={showAside} setAside={toggleAside} />
        <div
          className={`w-[70%] transition-all ease duration-700 tablet:w-[100%] tablet:z-10 ${
            showAside ? 'ml-[30%] tablet:ml-0' : 'ml-[15%] tablet:ml-0'
          }`}
        >
          <Header setAside={toggleAside} showAside={showAside} products={products} addToCart={addToCart}/>
          <Main products={products} addToCart={addToCart} removeFromCart={removeFromCart} cartProductList={cartProductList}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;