
import { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import DesktopSidebar from "./desktopSidebar";
import DesktopProductList from "./desktopProductList";

function DesktopContainer(props) {
    const [showMenu, setShowMenu] = useState(window.innerWidth > 768);
    
    const showMenuFunction = () => {
        setShowMenu(!showMenu);
    }

    const placeProductLink = (link) => {
        props.placeProductLink(link)
    }

    return (
        <div className="flex justify-between tablet:flex-col">
            <div className="hidden tablet:block tablet:mb-10 tablet:flex tablet:justify-center tablet:items-center tablet:block">
                <button className="bg-blue-500 w-[130px] h-[40px] rounded-md text-white hover:bg-blue-600" type="button" onClick={showMenuFunction}>
                    {showMenu ? "Hide filter" : "Show filter"}
                </button>
            </div>
            
            {showMenu && (
                <DesktopSidebar selectedCategory={props.selectedCategory} products={props.products} filterByPrice={props.filterByPrice}/>
            )}
            <DesktopProductList itemsPerPage={props.itemsPerPage} addToCart={props.addToCart} products={props.products}/>
        </div>
    )
}

export default DesktopContainer;