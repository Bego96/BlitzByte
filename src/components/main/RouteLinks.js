import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import Product from "./Product";
import Desktop from "../desktop/desktop";
import Laptop from "../laptop/laptop";
import Mobile from "../mobile/mobile";
import Television from "../television/television";
import Cart from "../cart/cart";
import { useState } from "react";
 

function RouteLinks(props) {

  const [cartProductList, setCartProductList] = useState([]);

  const addToCart = (productId) => {
    const product = productId;
    const productValues = props.products.find((p) => p.id === product);
  
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

    if (props.products[product - 1]) {
      const productValues = props.products[product-1]
      const newCartProductList = cartProductList.filter(item => item !== productValues)
      // Make a copy of the existing cartProductList and add the new product to it
      setCartProductList(newCartProductList);
    }

  }

  
  return (
    <Routes>
      <Route path='/' element={<HomePage products={props.products} addToCart={addToCart}/>}/>
      <Route path='/Home' element={<HomePage products={props.products} addToCart={addToCart}/>}/>
      <Route path="/Home/:productId" element={<Product products={props.products} addToCart={addToCart}/>}/>
      <Route path="/Shop" element={<Shop products={props.products} addToCart={addToCart}/>} />
      <Route path="/Desktop" element={<Desktop products={props.products} addToCart={addToCart}/>}/>
      <Route path="/Laptops" element={<Laptop products={props.products} addToCart={addToCart}/>}/>
      <Route path="/Mobiles" element={<Mobile products={props.products} addToCart={addToCart}/>}/>
      <Route path="/TV's" element={<Television products={props.products} addToCart={addToCart}/>}/>
      <Route path="/Cart" element={<Cart cartList={cartProductList} removeFromCart={removeFromCart}/>}/>
      <Route path="/Shop/:productId" element={<Product products={props.products} addToCart={addToCart}/>}/>
      <Route path="/Desktop/:productId" element={<Product products={props.products} addToCart={addToCart}/>}/>
      <Route path="/Laptops/:productId" element={<Product products={props.products} addToCart={addToCart}/>}/>
      <Route path="/Mobiles/:productId" element={<Product products={props.products} addToCart={addToCart}/>}/>
      <Route path="/TV's/:productId" element={<Product products={props.products} addToCart={addToCart}/>}/>
    </Routes>
  );
}

export default RouteLinks;
