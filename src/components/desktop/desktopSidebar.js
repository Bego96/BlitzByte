import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import DesktopSideBarCategories from "./desktopSideBarCategories";

function valuetext(value) {
    return `${value}`;
}

function DesktopSidebar(props) {

    const price=  props.products.map((price) => price.product.price);
    console.log(typeof Math.max(...price))
    const [priceValue, setPriceValue] = useState([0, Math.max(...price)]);

    const handlePriceChange = (event, newValue) => {
      setPriceValue(newValue);
        const priceNewValue = priceValue;
        props.filterByPrice(priceNewValue);
    };

    const minPrice = (event) => {
       const newMinPrice = parseFloat(event.target.value); // Parse the input value to a float
       setPriceValue([newMinPrice, priceValue[1]]); // Update the priceValue state with the new minimum price
       console.log(event.target.value)
        props.filterByPrice([newMinPrice, priceValue[1]])
    }

    const maxPrice = (event) => {
       const newMaxPrice = parseFloat(event.target.value); // Parse the input value to a float
       setPriceValue([priceValue[0], newMaxPrice]); // Update the priceValue state with the new minimum price
       console.log(event.target.value)
       props.filterByPrice([priceValue[0], newMaxPrice])
    }

    const selectCategory = (value) => {
        const selectedCategory = value;
        props.selectedCategory(selectedCategory);
    }

    

    return (
        <div className="w-[15%] laptop:w-[25%] tablet:w-full">
            <div className="">
                <DesktopSideBarCategories products={props.products} selectCategory={selectCategory}/>
            </div>

            <div className="my-10 pl-10">
                <div className="mb-6 tablet:flex tablet:flex-col">
                    <h2 className="text-xl mb-10">Cijene</h2>
                    <label for="min">Min:</label>
                    <input className="border w-full mb-2 p-1 tablet:w-[50%]" type="number" name="min" min={0} max={priceValue[1]} value={priceValue[0]} onChange={minPrice}/>
                    <label for="max">Max:</label>
                    <input className="border w-full p-1 tablet:w-[50%]" type="number" name="max" min={0} max={priceValue[1]} value={priceValue[1]} onChange={maxPrice}/>
                </div>
                <div className="w-full tablet:w-[50%]">
                    <Box sx={{ width: '100%'}}>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={priceValue}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={Math.max(...price)}
                        getAriaValueText={valuetext}
                    />
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default DesktopSidebar;