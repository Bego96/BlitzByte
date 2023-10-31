import { useState, useEffect, useRef } from "react";
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import { BsCart } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";

function Navigation(props) {
    const [showSearch, setShowSearch] = useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(true); // Initially true for all screen sizes
    const targetRef = useRef();
    const searchBar = useRef();
    const closeSearchBtn = useRef();

    const setSideBar = () => {
        props.setAside();
    }

    const toggleSearch = (value) => {
        setShowSearch(value);
    }

    const handleScroll = () => {
        // Determine whether to show the hamburger menu based on scroll position
        setShowHamburgerMenu(window.scrollY > 50);
    }

    const handleClickOutside = (event) => {
        if (!targetRef.current.contains(event.target)) {
            toggleSearch(false);
        }
        if (searchBar.current.contains(event.target)) {
            toggleSearch(!showSearch);
        }
        if (closeSearchBtn.current.contains(event.target)) {
            toggleSearch(!showSearch);
        }
    };

    useEffect(() => {
        // Add scroll event listener to control hamburger menu appearance
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showSearch, showHamburgerMenu]);
    return (
        <>
        <nav className={`bg-slate-100 rounded-b-md`}>
            <div className={`p-6 flex justify-between items-center`}>
                <div className="flex justify-between items-center w-[50%] tablet:w-[100%]">
                    <div className="flex items-center tablet:justify-between tablet:w-full">
                    {
                        showHamburgerMenu  ? 
                        <div className={`cursor-pointer`} onClick={() => setSideBar()}>
                            <div className={`w-[30px] h-0.5 bg-black mb-[6px] transition-all ${props.showAside ? 'rotate-45 translate-x-0 translate-y-[11px] tablet:rotate-0 tablet:translate-y-0' : ''}`}></div>
                            <div className={`w-[30px] h-0.5 bg-black mb-[6px] transition-all ${props.showAside ? 'opacity-0 tablet:opacity-100' : ''}`}></div>
                            <div className={`w-[30px] h-0.5 bg-black mb-[6px] transition-all ${props.showAside ? '-rotate-45 translate-x-0 translate-y-[-5px] tablet:-rotate-0 tablet:translate-y-0' : ''}`}></div>
                        </div> : null
                    }

                        <div className={`transition-all ${showHamburgerMenu ? 'ml-6' : 'ml-0 '}`}>
                            <h1 className="text-4xl">Blitz<span className="text-blue-500">Byte</span></h1>
                        </div>
                    </div>
                </div>
                <div className="ml-[20px] flex justify-center items-center tablet:hidden">
                    <div className="flex items-center">
                        <div ref={searchBar} className="mr-[20px] phone:mr-[10px]">
                            <IoSearchOutline size={25} color="#64748b" className='cursor-pointer' />
                        </div>
                        <div className="block mr-[20px] phone:mr-[10px]"><BsPerson size={25} color="#64748b" className='cursor-pointer' /></div>
                        <Link to="/Cart"><div className="block mr-[20px] phone:mr-[10px]"><BsCart size={25} color="#64748b" className='cursor-pointer' /></div></Link>
                    </div>
                </div>
            </div>
            <div ref={targetRef} className={`w-[55%] small-desktop:w-[75%] laptop:w-[100%] mx-auto transition-all ease-in-out delay-150 absolute left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 ${showSearch ? 'block top-10' : 'top-[100px] hidden'}`}>
                <div className=" relative phone:w-full phone:mr-0">
                    <input type="search" className="border-2 border-slate-300 h-14 w-full py-4 px-10 rounded-3xl" placeholder="Search.." />
                    <span><IoSearchOutline size={22} color="#94a3b8" className="absolute top-4 left-4 cursor-pointer"></IoSearchOutline></span>
                    <span ref={closeSearchBtn}><AiOutlineClose size={22} className="absolute top-4 right-4 cursor-pointer"></AiOutlineClose></span>
                </div>
            </div>
        </nav>
         </>
    )
}

export default Navigation;
