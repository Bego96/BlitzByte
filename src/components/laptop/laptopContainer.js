import { useState } from "react";
import LaptopSidebar from "./laptopSidebar";
import LaptopProductList from "./laptopProductList";


function LaptopContainer(props) {
    const [showMenu, setShowMenu] = useState(window.innerWidth > 768);
    
    const showMenuFunction = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="flex justify-between tablet:flex-col">
            <div className="hidden tablet:block tablet:mb-10 tablet:flex tablet:justify-center tablet:items-center tablet:block">
                <button className="bg-blue-500 w-[130px] h-[40px] rounded-md text-white hover:bg-blue-600" type="button" onClick={showMenuFunction}>
                    {showMenu ? "Hide filter" : "Show filter"}
                </button>
            </div>
            
            {showMenu && (
                <LaptopSidebar 
                selectedCategory={props.selectedCategory} 
                products={props.products} 
                filterByPrice={props.filterByPrice}
                />
            )}
            <LaptopProductList 
            itemOffset={props.itemOffset} 
            setItemOffset={props.setItemOffset}  
            setItemsPerPage={props.setItemsPerPage} 
            itemsPerPage={props.itemsPerPage} 
            addToCart={props.addToCart} 
            products={props.products} 
            />
        </div>
    )
}

export default LaptopContainer;