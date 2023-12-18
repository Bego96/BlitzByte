import React, { useState, useEffect } from 'react';
import productListService from '../../assets/services/productListService';

function DesktopSideBarCategories(props) {
  const [brands, setBrands] = useState([]);
  const [brandTypes, setBrandTypes] = useState(props.products)

  const calcItems = (brand) => {
    console.log(props.products.filter(product => product.product.brand === brand).length)
    return brandTypes.filter(product => product.product.brand === brand).length;
  }

  console.log(brands);

  const selectCategory = (value) => {
    const selectedCategory = value;
    props.selectCategory(selectedCategory);
    console.log(selectedCategory)
  }

  useEffect(() => {
    // Extract unique product types from productListService

    const uniqueTypes = [...new Set(props.products.map(product => product.product.brand))];
    setBrands(uniqueTypes);
  }, []);

  return (
    <div className="pl-10">
      <h2 className="text-xl font-semibold">Categories</h2>
      <ul className="w-fit flex flex-col mt-10">
        <li className="my-2 cursor-pointer" onClick={() => selectCategory("All brands")}>See all ({brandTypes.length})</li>
        {brands.map((brand, index) => {
            console.log(index);
            const itemCount = calcItems(brand);
            return (
                <li key={index} onClick={() => selectCategory(brand)} className="cursor-pointer my-2 text-slate-600">{brand + " "} ({itemCount})</li>
            )
        })}
      </ul>
    </div>
  );
}

export default DesktopSideBarCategories;
