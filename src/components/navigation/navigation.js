import { useState, useEffect, useRef } from "react";
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import { BsCart } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";

function Navigation(props) {
    const [showSearch, setShowSearch] = useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(window.innerWidth > 914 ? false : true); // Initially true for all screen sizes
    const targetRef = useRef();
    const searchBar = useRef();
    const closeSearchBtn = useRef();
    const [navigationBg, setNavigationBg] = useState(false);

    const setSideBar = () => {
        props.setAside();
    }


    const handleScroll = () => {
        // Determine whether to show the hamburger menu based on scroll position
        setNavigationBg(window.scrollY > 90 ? true : false) 
        if (window.innerWidth > 914) {
            setShowHamburgerMenu(window.scrollY > 90);
        }
    }


    useEffect(() => {
        // Add scroll event listener to control hamburger menu appearance
        window.addEventListener('scroll', handleScroll);
        //window.addEventListener('click', handleClickOutside);
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showSearch, showHamburgerMenu,]);
    return (
        <>
        <nav className={`rounded-b-md transition ease-in-out delay-50 ${!navigationBg ? 'bg-slate-100' : 'bg-slate-200'}`}>
            <div className={`p-6 flex justify-between items-center`}>
                <div className="flex justify-between items-center w-[50%] tablet:w-[100%]">
                    <div className="flex items-center tablet:justify-between">
                    {
                        showHamburgerMenu && props && typeof props.showAside !== 'undefined' ?
                        <div className={`cursor-pointer`} onClick={() => setSideBar()}>
                            <div className={`w-[30px] h-0.5 bg-black mb-[6px] transition-all phone:mb-[4px] phone:h-0.3 phone:w-[25px] ${props.showAside ? 'rotate-45 translate-x-0 translate-y-[11px] tablet:rotate-0 tablet:translate-y-0' : ''}`}></div>
                            <div className={`w-[30px] h-0.5 bg-black mb-[6px] transition-all phone:mb-[4px] phone:h-0.3 phone:w-[25px] ${props.showAside ? 'opacity-0 tablet:opacity-100' : ''}`}></div>
                            <div className={`w-[30px] h-0.5 bg-black mb-[6px] transition-all phone:mb-[4px] phone:h-0.3 phone:w-[25px] ${props.showAside ? '-rotate-45 translate-x-0 translate-y-[-5px] tablet:-rotate-0 tablet:translate-y-0' : ''}`}></div>
                        </div> : null
                    }

                        <Link to='/'><div className={`transition-all ${showHamburgerMenu ? 'ml-4' : 'ml-0 '}`}>
                            <h1 className="text-4xl tablet:text-3xl phone:text-2xl">Blitz<span className="text-blue-500">Byte</span></h1>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="ml-[20px] flex justify-center items-center">
                    <div className="flex items-center">
                        <div ref={searchBar} onClick={() => setShowSearch(!showSearch)} className="mr-[20px] phone:mr-[14px]">
                            <IoSearchOutline size={window.innerWidth > 480 ? 25 : 22} color="#64748b" className='cursor-pointer' />
                        </div>
                        <div className="block mr-[20px] phone:mr-[14px]"><BsPerson size={window.innerWidth > 480 ? 25 : 20} color="#64748b" className='cursor-pointer' /></div>
                        <Link to="/Cart"><div className="block mr-[20px] phone:mr-0"><BsCart size={window.innerWidth > 914 ? 25 : 22} color="#64748b" className='cursor-pointer' /></div></Link>
                    </div>
                </div>
            </div>
            <div ref={targetRef} className={`w-[55%] small-desktop:w-[75%] laptop:w-[100%] mx-auto transition-all ease-in-out duration-500 absolute left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 ${showSearch ? 'opacity-100 top-10' : 'top-[-100px] opacity-0'}`}>
                <div className=" relative phone:w-full phone:mr-0">
                    <input type="search" className="border-2 border-slate-300 h-14 w-full py-4 px-10 rounded-3xl" placeholder="Search.." />
                    <span><IoSearchOutline size={22} color="#94a3b8" className="absolute top-4 left-4 cursor-pointer"></IoSearchOutline></span>
                    <span ref={closeSearchBtn} onClick={() => setShowSearch(!showSearch)}><AiOutlineClose size={22} className="absolute top-4 right-4 cursor-pointer"></AiOutlineClose></span>
                </div>
            </div>
        </nav>
         </>
    )
}

export default Navigation;
