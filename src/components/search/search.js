import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import SearchEngine from './searchEngine';
import SearchResults from './searchResults';
import { useEffect } from 'react';

function Search(props) {

    useEffect(() => {
        if (props.showSearch) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "scroll"
            };
        }
    },[])
    return (
        <div className="w-full bg-sky-600 bg-opacity-50 backdrop-blur-md fixed top-0 z-50 h-full">
            <span onClick={() => props.setShowSearch(!props.showSearch)}><AiOutlineClose size={26} color='white' className="fixed top-4 right-4 cursor-pointer"></AiOutlineClose></span>
            <SearchEngine setShowSearch={props.setShowSearch} showSearch={props.showSearch} products={props.products} searchResults={props.searchResults} searchValue={props.searchValue} results={props.results}/>
            {
                props.searchValue ? <SearchResults closeSearchOnClickLink={props.closeSearchOnClickLink} showSearch={props.showSearch} setShowSearch={props.setShowSearch} searchValue={props.searchValue} products={props.products} addToCart={props.addToCart} results={props.results}/> : null
            }

        </div>
    )
}

export default Search;