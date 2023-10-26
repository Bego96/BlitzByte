import { Route, Routes } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import Product from "./Product";
import Desktop from "../desktop/desktop";
import Laptop from "../laptop/laptop";
import Mobile from "../mobile/mobile";
import Television from "../television/television";
 

function RouteLinks(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage products={props.products} />} />
      <Route path="/Shop" element={<Shop products={props.products} />} />
      <Route path="/Desktop" element={<Desktop products={props.products}/>}/>
      <Route path="/Laptops" element={<Laptop products={props.products}/>}/>
      <Route path="Mobiles" element={<Mobile products={props.products}/>}/>
      <Route path="/TV's" element={<Television products={props.products}/>}/>
      {props.products.map(route => (
        <Route
          key={route.id}
          path={`/Product/${route.id}`}
          element={
            <Product
              key={route.id}
              id={route.id}
              image={route.product.images}
              name={route.product.name}
              description={route.product.description}
              price={route.product.price}
              components={route.product.components}
            />
          }
        />
      ))}
    </Routes>
  );
}

export default RouteLinks;
