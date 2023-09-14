import ShopProductList from "./ShopProductList";
import ShopSidebar from "./ShopSidebar";
import { useEffect, useState } from "react";

function ShopContainer(props) {
    const [showMenu, setShowMenu] = useState(window.innerWidth >= 769);

    const showMenuFunction = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleResize = () => {
            setShowMenu(window.innerWidth >= 769);
        }

        window.addEventListener('resize', handleResize);

        // Clean up by removing the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex justify-between tablet:flex-col">
            <div className="hidden tablet:block tablet:mb-10 tablet:flex tablet:justify-center tablet:items-center tablet:block">
                <button className="bg-blue-500 w-[130px] h-[40px] text-white hover:bg-blue-600" type="button" onClick={showMenuFunction}>
                    {showMenu ? "Hide filter" : "Show filter"}
                </button>
            </div>
            
            {showMenu && (
                <ShopSidebar selectedCategory={props.selectedCategory} products={props.products} filterByPrice={props.filterByPrice} showMenu={showMenu} />
            )}

            <ShopProductList products={props.products}/>
        </div>
    )
}

export default ShopContainer;