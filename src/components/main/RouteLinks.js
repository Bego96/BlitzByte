import { Route, Routes } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import Shop from "../shop/Shop";
import Discounts from "../discounts/Discounts";
import Product from "./Product";

function RouteLinks(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage products={props.products} />} />
      <Route path="/Shop" element={<Shop products={props.products} />} />
      <Route path="/Snizeno" element={<Discounts products={props.products} />} />
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
