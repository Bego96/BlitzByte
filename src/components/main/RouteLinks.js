import { Route, Routes, } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import Product from "./Product";
import Desktop from "../desktop/desktop";
import Laptop from "../laptop/laptop";
import Mobile from "../mobile/mobile";
import Television from "../television/television";
import Cart from "../cart/cart";

function RouteLinks(props) {
  return (
    <Routes>
      <Route path='/' element={<HomePage products={props.products} addToCart={props.addToCart}/>}/>
      <Route path='/Home' element={<HomePage products={props.products} addToCart={props.addToCart}/>}/>
      <Route path="/Home/:productId" element={<Product products={props.products} addToCart={props.addToCart}/>}/>
      <Route path="/Shop" element={<Shop products={props.products} addToCart={props.addToCart}/>} />
      <Route path="/Desktop" element={<Desktop products={props.products} addToCart={props.addToCart}/>}/>
      <Route path="/Laptops" element={<Laptop products={props.products} addToCart={props.addToCart}/>}/>
      <Route path="/Mobiles" element={<Mobile products={props.products} addToCart={props.addToCart}/>}/>
      <Route path="/TV's" element={<Television products={props.products} addToCart={props.addToCart}/>}/>
      <Route path="/Cart" element={<Cart cartList={props.cartProductList} removeFromCart={props.removeFromCart}/>}/>
      <Route path="/Shop/:productId" element={<Product products={props.products} addToCart={props.addToCart}/>}/>
      <Route path="/Desktop/:productId" element={<Product products={props.products} addToCart={props.addToCart}/>}/>
      <Route path="/Laptops/:productId" element={<Product products={props.products} addToCart={props.addToCart}/>}/>
      <Route path="/Mobiles/:productId" element={<Product products={props.products} addToCart={props.addToCart}/>}/>
      <Route path="/TV's/:productId" element={<Product products={props.products} addToCart={props.addToCart}/>}/>
    </Routes>
  );
}

export default RouteLinks;
