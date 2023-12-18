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
    

    //SLIDER PRICE RANGE CHANGE
    const handlePriceChange = (event, newValue) => {
        const [newMinPrice, newMaxPrice] = newValue.map(val => parseFloat(val));

        setTimeout(() => {
            setPriceValue([newMinPrice, newMaxPrice]);
            console.log("PRICE VALUE " + priceValue);
            console.log(newMinPrice);
            console.log(newMaxPrice);
            props.filterByPrice(priceValue)
        }, 200);

    };

    const minPrice = (event) => {
       const newMinPrice = parseFloat(event.target.value); // Parse the input value to a float

       setTimeout(() => {
        setPriceValue([newMinPrice, priceValue[1]]);
        props.filterByPrice([newMinPrice, priceValue[1]])
       }, 100)
       
        
    }

    const maxPrice = (event) => {
       const newMaxPrice = parseFloat(event.target.value); // Parse the input value to a float

       setTimeout(() => {
        setPriceValue([priceValue[0], newMaxPrice]);
        props.filterByPrice([priceValue[0], newMaxPrice])
       },100)
        // Update the priceValue state with the new minimum price
       console.log(newMaxPrice)
       
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
                    <h2 className="text-xl mb-10 font-semibold">Prices</h2>
                    <label for="min" className="text-slate-600">Min:</label>
                    <input className="border w-full mb-2 p-1 tablet:w-[50%]" type="number" name="min" min={0} max={priceValue[1]} value={priceValue[0]} onChange={minPrice}/>
                    <label for="max" className="text-slate-600">Max:</label>
                    <input className="border w-full p-1 tablet:w-[50%]" type="number" name="max" min={0} max={priceValue[1]} value={priceValue[1]} onChange={maxPrice}/>
                </div>
                <div className="w-full tablet:w-[50%]">
                    <Box sx={{ width: '100%'}}>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={priceValue}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        min={0.0}
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