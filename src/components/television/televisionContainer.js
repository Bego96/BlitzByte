import { useState } from "react";
import TelevisionSidebar from "./televisionSidebar";
import TelevisionProductList from "./televisionProductList";


function TelevisionContainer(props) {
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
                <TelevisionSidebar 
                selectedCategory={props.selectedCategory} 
                products={props.products} 
                filterByPrice={props.filterByPrice}/>
            )}
            <TelevisionProductList 
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

export default TelevisionContainer;