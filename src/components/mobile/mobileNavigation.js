import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

function MobileNavigation(props) {
    const [sortProduct, setSortProduct] = useState('All prices');

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSortProduct(selectedValue);
        props.sortingProducts(selectedValue);
    };


    return(
        <div className="flex bg-slate-100 p-4 my-10 rounded-md justify-between items-center laptop:items-start phone:flex-col phone:justify-center phone:items-center tablet:mb-10">
            <div className="flex items-center laptop:flex-col laptop:items-start phone:w-full phone:justify-center phone:items-center">
                <div className="laptop:mt-6 text-slate-600">
                    <p>Showing 1-{props.itemsPerPage} of {props.products.length} results</p>
                </div>
            </div>
            <div className="phone:mt-10">
            <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                    <InputLabel id="demo-select-small-label">Sort</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={sortProduct}
                            label="Product"
                            onChange={handleChange}
                        >
                            <MenuItem value={"All prices"}>
                                All prices
                            </MenuItem>
                            <MenuItem value={"Lowest"}>
                                Lowest price
                            </MenuItem>
                            <MenuItem value={"Highest"}>
                                Highest price
                            </MenuItem>
                        </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default MobileNavigation;