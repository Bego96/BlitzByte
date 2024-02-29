import React, { useState, useEffect } from 'react';

function ShopSidebarCategories(props) {
  const [types, setTypes] = useState([]);
  const [products, setProducts] = useState(props.products)

  const calcItems = (type) => {
    return products.filter(product => product.product.type === type).length;
  }

  const selectCategory = (value) => {
    const selectedCategory = value;
    props.selectCategory(selectedCategory);
  }


  useEffect(() => {
    // Extract unique product types from database trought parent component
    const uniqueTypes = [...new Set(products.map(product => product.product.type))];
    setTypes(uniqueTypes);
  }, []);

  return (
    <div className="pl-10">
      <h2 className="text-xl font-semibold">Categories</h2>
      <ul className="w-fit flex flex-col mt-10">
        <li className="my-2 cursor-pointer text-slate-600" onClick={() => selectCategory("All products")}>See all ({products.length})</li>
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
