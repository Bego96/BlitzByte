import RouteLinks from "./RouteLinks";

function Main(props) {
    
    return (
      <>
        {
          props.products && 
          
            <RouteLinks products={props.products} addToCart={props.addToCart} removeFromCart={props.removeFromCart} cartProductList={props.cartProductList}/>

        }
      </>
    )
}

export default Main;