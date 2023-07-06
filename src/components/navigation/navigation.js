import { useState } from "react";
import {  faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {AiOutlineHeart} from 'react-icons/ai';
import {IoSearchOutline} from 'react-icons/io5';
import {BsCart} from 'react-icons/bs';
import {BsPerson} from 'react-icons/bs';

function Navigation(props) {

    const [currency, setCurrency] = useState('BAM');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

    const setSideBar = () => {
        props.setAside();
    }

    return (
        <nav className="">
            <div className="py-[20px] px-[30px] flex items-center justify-between relative  bg-slate-100 ">
                <div className={`cursor-pointer`} onClick={() => setSideBar()}>
                    <div className={`w-[30px] h-0.5 bg-black mb-[6px] transition-all ${props.showAside ? 'rotate-45 translate-x-0 translate-y-[11px]' : ''}`}></div>
                    <div className={`w-[30px] h-0.5 bg-black mb-[6px] transition-all ${props.showAside ? 'opacity-0' : ''}`}></div>
                    <div className={`w-[30px] h-0.5 bg-black mb-[6px] transition-all ${props.showAside ? '-rotate-45 translate-x-0 translate-y-[-5px]' : ''}`}></div>
                </div>
                <div>
                    <h1 className="text-4xl">Blitz<span className="text-blue-400">Byte</span></h1>
                </div>
                <div className="flex items-center justify-between">
                    <div className="">
                        <IoSearchOutline size={25} color="#64748b" className='cursor-pointer'/>
                    </div>
                    <div className="ml-[20px]">
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Currency</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={currency}
                                    label="Currency"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"BAM"}>
                                    BAM
                                    </MenuItem>
                                    <MenuItem value={"EUR"}>EUR</MenuItem>
                                </Select>
                        </FormControl>
                    </div>
                    <div className="ml-[20px] flex items-center justify-center">
                        <span><AiOutlineHeart size={25} color="#64748b" className='cursor-pointer'/>
                        </span>
                        <span className="ml-[20px]"><BsPerson size={25} color="#64748b" className='cursor-pointer'/></span>
                        <span className="ml-[20px]"><BsCart size={25} color="#64748b" className='cursor-pointer'/></span>
                    </div>
                </div>
            </div>
            <div className="w-[600px] mx-auto">
                <input type="text" placeholder="Search.." className="border-[1px] w-[500px] h-12 pl-2 rounded"/>
                <button type="button" className="w-[100px] bg-blue-400">Search</button>
            </div>
        </nav>
    )
}

export default Navigation;

