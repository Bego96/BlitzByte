import { useState, useEffect} from 'react';
import { BrowserRouter, } from 'react-router-dom';
import './App.css';
import Main from './components/main/main';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Footer from './components/footer/Footer';

let productCount = 0;

function App() {
  const [showAside, setShowAside] = useState(false);
  const [products, setProducts] = useState()
  const [cartProductList, setCartProductList] = useState([]);
  const [showCartCount, setShowCartCount] = useState(productCount);

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
    productCount++;
    setShowCartCount(productCount);
  };

  const removeFromCart = (productId) => {
    const product = productId;

    if (products[product - 1]) {
      const productValues = products[product-1]
      const newCartProductList = cartProductList.filter(item => item !== productValues)
      // Make a copy of the existing cartProductList and add the new product to it
      setCartProductList(newCartProductList);
    }

    productCount--;
    setShowCartCount(productCount);
  }

  useEffect(() => {
    fetch('https://blitzbyte-server.vercel.app/products') // Adjust the URL to match your server
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
    <>
    <BrowserRouter>
      <div className="relative">
        <Sidebar showAside={showAside} setAside={toggleAside} />
        <div
          className={`w-[90%] z-20 transition-all ease duration-700 tablet:w-[100%] tablet:z-10 ${
            showAside ? 'ml-[10%] tablet:ml-0' : 'ml-[5%] tablet:ml-0'
          }`}
        >
          <Header setAside={toggleAside} showAside={showAside} products={products} addToCart={addToCart} showCartCount={showCartCount}/>
          <Main products={products} addToCart={addToCart} removeFromCart={removeFromCart} cartProductList={cartProductList}/>
        </div>
      </div>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;