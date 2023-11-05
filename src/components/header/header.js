import Menu from '../menu/Menu';
import Navigation from '../navigation/navigation';

function Header (props) {


    return (
        <>
        <header className="sticky top-0 z-50">
            <Navigation setAside={props.setAside} showAside={props.showAside} showCloseBtn={props.showCloseBtn} products={props.products} addToCart={props.addToCart}/>
        </header>
         <Menu/> 
         </>
    )
};

export default Header;