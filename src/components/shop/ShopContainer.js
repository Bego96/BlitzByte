import ShopProductList from "./ShopProductList";
import ShopSidebar from "./ShopSidebar";
import { useEffect, useState } from "react";

function ShopContainer(props) {

    
    const [showMenu, setShowMenu] = useState(window.innerWidth < 769 ? false : true);

    console.log(showMenu)
    console.log(showMenu)
    const showMenuFunction = () => {
        setShowMenu(!showMenu)
    }

    
    useEffect(() =>{
        const showInfoOnSmallDevices = () => {
            if (window.innerWidth < 768) {
                setShowMenu(false);
            } else {
                setShowMenu(true);
            }
        };
    
        // Add the event listener
        window.addEventListener('resize', showInfoOnSmallDevices);
    
        // Clean up by removing the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', showInfoOnSmallDevices);
        };
    }, [showMenu])

    return (
        <div className="flex justify-between tablet:flex-col">
            <div className="hidden tablet:block tablet:mb-10 tablet:flex tablet:justify-center tablet:items-center">
                <button className="bg-blue-500 w-[130px] h-[40px] text-white hover:bg-blue-600" type="button" onClick={() => showMenuFunction()}>{showMenu ? "Hide filter" : "Show filter"}</button>
            </div>
            
            {
                showMenu  ? <ShopSidebar selectedCategory={props.selectedCategory} products={props.products} filterByPrice={props.filterByPrice}/> : null
            }
            <p>{showMenu}</p>
            <ShopProductList products={props.products}/>
        </div>
    )
}

export default ShopContainer;