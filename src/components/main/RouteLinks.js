import { Route, Routes } from "react-router-dom";
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

  // FOR FUTURE UPDATE
  // Cart number will be useful to detect amount of products in cart, if product exists only num of products will increase
  // When user removes product from cart if num of products is higher than 1 then only num will decrease, other wise product will be completed removed
  const [cartNum, setCartNum] = useState(1)

  const addToCart = (productId) => {
    const product = productId;
    const productValues = props.products.find((p) => p.id === product);
  
    if (!productValues) {
      console.log("Product not found");
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

  console.log(cartProductList);
  return (
    <Routes>
      <Route path="/" element={<HomePage products={props.products} addToCart={addToCart}/>} />
      <Route path="/Shop" element={<Shop products={props.products} addToCart={addToCart}/>} />
      <Route path="/Desktop" element={<Desktop products={props.products} addToCart={addToCart}/>}/>
      <Route path="/Laptops" element={<Laptop products={props.products} addToCart={addToCart}/>}/>
      <Route path="/Mobiles" element={<Mobile products={props.products} addToCart={addToCart}/>}/>
      <Route path="/TV's" element={<Television products={props.products} addToCart={addToCart}/>}/>
      <Route path="/Cart" element={<Cart cartList={cartProductList} removeFromCart={removeFromCart}/>}/>
      <Route path="/Product/:productId" element={<Product products={props.products} addToCart={addToCart}/>} />
    </Routes>
  );
}

export default RouteLinks;
