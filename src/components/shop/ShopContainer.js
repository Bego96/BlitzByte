import ShopProductList from "./ShopProductList";
import ShopSidebar from "./ShopSidebar";
import { useEffect, useState } from "react";

function ShopContainer(props) {

    console.log("Shop COntainer " + props.products)
    const [showMenu, setShowMenu] = useState(true);

    const showMenuFunction = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() =>{
        const showInfoOnSmallDevices = () => {
            if (window.innerWidth < 769) {
                setShowMenu(false);
            } else {
                setShowMenu(true);
            }
        } 
        window.addEventListener('resize', showInfoOnSmallDevices);
    }, [showMenu])

    return (
        <div className="flex justify-between tablet:flex-col">
            <div className="hidden tablet:block tablet:mb-10 tablet:flex tablet:justify-center tablet:items-center">
                <button className="bg-blue-500 w-[130px] h-[40px] text-white hover:bg-blue-600" type="button" onClick={() => showMenuFunction()}>{showMenu ? "Hide filter" : "Show filter"}</button>
            </div>
            
            {
                showMenu ? <ShopSidebar selectedCategory={props.selectedCategory} products={props.products} filterByPrice={props.filterByPrice}/> : null
            }
            
            <ShopProductList products={props.products}/>
        </div>
    )
}

export default ShopContainer;