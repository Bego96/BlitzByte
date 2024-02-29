import React, { useState, useEffect } from 'react';

function MobileSideBarCategories(props) {
  const [brands, setBrands] = useState([]);
  const [brandTypes, setBrandTypes] = useState(props.products)

  const calcItems = (brand) => {
    return brandTypes.filter(product => product.product.brand === brand).length;
  }

  const selectCategory = (value) => {
    const selectedCategory = value;
    props.selectCategory(selectedCategory);
  }

  useEffect(() => {
    // Extract unique product types from database
    const uniqueTypes = [...new Set(props.products.map(product => product.product.brand))];
    setBrands(uniqueTypes);
  }, []);

  return (
    <div className="pl-10">
      <h2 className="text-xl font-semibold">Categories</h2>
      <ul className="w-fit flex flex-col mt-10">
        <li className="my-2 cursor-pointer text-slate-600" onClick={() => selectCategory("All brands")}>See all ({brandTypes.length})</li>
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

export default MobileSideBarCategories;
