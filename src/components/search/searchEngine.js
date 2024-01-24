import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import SearchResults from './searchResults';
import { useState } from 'react';


function SearchEngine(props) {


    const searchResults = (event) => {
        const resultValue = event.target.value;
        
        props.searchResults(resultValue)

    }

    return (
        <div className={`w-[55%] fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 small-desktop:w-[75%] tablet:w-[90%] transition-all ease-in-out duration-500`}>
            <div className=" relative phone:w-full phone:mr-0">
                <input type="search" className="border-2 border-slate-500 h-14 w-full py-4 pl-10 pr-4 rounded-lg" placeholder="Search.." value={props.searchValue} onChange={searchResults}/>
                <span><IoSearchOutline size={22} color="#94a3b8" className="absolute top-4 left-4 cursor-pointer"></IoSearchOutline></span>
            </div>
            
        </div>
    )
}

export default SearchEngine;