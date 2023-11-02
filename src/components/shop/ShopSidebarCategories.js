import React, { useState, useEffect } from 'react';
import productListService from '../../assets/services/productListService';

function ShopSidebarCategories(props) {
  const [types, setTypes] = useState([]);


  const calcItems = (type) => {
    return productListService.filter(product => product.product.type === type).length;
  }


  useEffect(() => {
    // Extract unique product types from productListService

    const uniqueTypes = [...new Set(productListService.map(product => product.product.type))];
    setTypes(uniqueTypes);
  }, []);

  console.log(types);

  const selectCategory = (value) => {
    const selectedCategory = value;
    props.selectCategory(selectedCategory);
  }

  

  return (
    <div className="pl-10">
      <h2 className="text-xl font-semibold">Categories</h2>
      <ul className="w-fit flex flex-col mt-10">
        <li className="my-2 cursor-pointer text-slate-600" onClick={() => selectCategory("All products")}>See all ({productListService.length})</li>
        {types.map((type, index) => {
            console.log(index);
            const itemCount = calcItems(type);
            return (
                <li key={index} onClick={() => selectCategory(type)} className="cursor-pointer my-2 text-slate-600">{type + " "} ({itemCount})</li>
            )
        })}
      </ul>
    </div>
  );
}

export default ShopSidebarCategories;
