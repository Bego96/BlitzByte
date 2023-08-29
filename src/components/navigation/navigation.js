import { useState, useEffect, useRef } from "react";
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
import Menu from "../menu/Menu";
import Header from "../header/header";

function Navigation(props) {

    const [currency, setCurrency] = useState('BAM');
    const [showSearch, setShowSearch] = useState(false);
    const [scrollPos, setScrollPos] = useState(false);
    const targetRef = useRef();
    const searchBar = useRef();
    console.log(showSearch)
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

    const setSideBar = () => {
        props.setAside();
    }

    const handleClickOutside = (event) => {
        if (targetRef.current && !targetRef.current.contains(event.target)) {
          setShowSearch(false);
        }
      };

    useEffect(() => {


        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={`bg-slate-100 relative`}>
            <div className={`py-[20px] px-[30px] flex justify-between items-center tablet:flex-col`}>
                <div className="flex justify-between items-center w-[50%] tablet:w-[100%]">
                    <div className={`cursor-pointer`} onClick={() => setSideBar()}>
                        <div className={`w-[30px] h-0.5 bg-black mb-[6px] transition-all ${props.showAside ? 'rotate-45 translate-x-0 translate-y-[11px] tablet:rotate-0 tablet:translate-y-0' : ''}`}></div>
                        <div className={`w-[30px] h-0.5 bg-black mb-[6px] transition-all ${props.showAside ? 'opacity-0 tablet:opacity-100' : ''}`}></div>
                        <div className={`w-[30px] h-0.5 bg-black mb-[6px] transition-all ${props.showAside ? '-rotate-45 translate-x-0 translate-y-[-5px] tablet:-rotate-0 tablet:translate-y-0' : ''}`}></div>
                    </div>
                    <div className={`{}}`}>
                        <h1 className="text-4xl">Blitz<span className="text-blue-400">Byte</span></h1>
                    </div>
                </div>
                    
                    
                <div className="ml-[20px] flex items-center justify-center">
                <div ref={searchBar} className="">
                        <IoSearchOutline size={25} color="#64748b" className='cursor-pointer' onClick={() => setShowSearch(!showSearch)}/>
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
                        <span><AiOutlineHeart size={25} color="#64748b" className='cursor-pointer'/>
                        </span>
                        <span className="ml-[20px]"><BsPerson size={25} color="#64748b" className='cursor-pointer'/></span>
                        <span className="ml-[20px]"><BsCart size={25} color="#64748b" className='cursor-pointer'/></span>
                    </div>
            </div>
           
                <div ref={targetRef} className={`w-[40%] mx-auto transition-all ease-in-out delay-150 absolute left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 ${showSearch ? 'block top-[120px]' : 'top-[100px] hidden'}`}>
                    <input type="text" placeholder="Search.." className="border-[1px] w-[70%] h-12 pl-2"/>
                    <button type="button" className="w-[30%] bg-blue-500 h-12 text-white align-top hover:bg-blue-400">Search</button>
                </div> 
                <Menu />
        </nav>
    )
}

export default Navigation;

