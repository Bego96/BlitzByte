import { useState, useEffect, useRef } from "react";
import { IoSearchOutline } from 'react-icons/io5';
import { BsCart } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Search from "../search/search";
import Logo from '../../assets/images/logo/logo.png'

function Navigation(props) {

    const [showSearch, setShowSearch] = useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(window.innerWidth > 914 ? false : true); // Initially true for all screen sizes
    const searchBar = useRef();
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
        <nav className={`transition-all ease-in-out duration-300 delay-250 bg-gradient-to-r from-cyan-700 to-blue-800`}>
            <div className={`p-6 flex justify-between items-center`}>
                <div className="flex justify-between items-center w-[50%] tablet:w-[100%]">
                    <div className="flex items-center tablet:justify-between">
                    {
                        showHamburgerMenu && props && typeof props.showAside !== 'undefined' ?
                        <div className={`cursor-pointer`} onClick={() => setSideBar()}>
                            <div className={`w-[30px] h-[3px] bg-white mb-[6px] transition-all ease-in-out delay-250 duration-500 phone:mb-[4px] phone:h-[2px] phone:w-[25px] 
                            ${props.showAside ? 'rotate-45 translate-x-0 translate-y-[13px] tablet:rotate-0 tablet:translate-y-0 ml-44 tablet:ml-0' : ''}`}></div>
                            <div className={`w-[30px] h-[3px] bg-white mb-[6px] transition-all ease-in-out delay-250 duration-500 phone:mb-[4px] phone:h-[2px] phone:w-[25px] 
                            ${props.showAside ? 'opacity-0 tablet:opacity-100 ml-44 tablet:ml-0' : ''}`}></div>
                            <div className={`w-[30px] h-[3px] bg-white mb-[6px] transition-all ease-in-out delay-250 duration-500 phone:mb-[4px] phone:h-[2px] phone:w-[25px] 
                            ${props.showAside ? '-rotate-45 translate-x-0 translate-y-[-5px] tablet:-rotate-0 tablet:translate-y-0 ml-44 tablet:ml-0' : ''}`}></div>
                        </div> : null
                    }

                        <Link to='/Home'><div className={`transition-all w-[250px] tablet:w-[200px] phone:w-[150px] ${showHamburgerMenu ? 'ml-4' : 'ml-0 '}`}>
                            <img src={Logo} alt="Logo"/>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="ml-[20px] flex justify-center items-center">
                    <div className="flex items-center">
                        <div ref={searchBar} onClick={() => props.setShowSearch(!props.showSearch)} className="mr-[20px] phone:mr-[14px]">
                            <IoSearchOutline size={window.innerWidth > 480 ? 25 : 22} color="white" className='cursor-pointer' />
                        </div>
                        <div className="block mr-[20px] phone:mr-[14px]"><BsPerson size={window.innerWidth > 480 ? 25 : 20} color="white" className='cursor-pointer' /></div>
                        <Link to="/Cart"><div className="block mr-[20px] phone:mr-0"><BsCart size={window.innerWidth > 914 ? 25 : 22} color="white" 
                        className='cursor-pointer relative' /></div>
                        {
                            props.showCartCount < 1 ? 
                            null : 
                            <span className="w-6 rounded-full bg-red-600 absolute text-center text-sm text-white right-14 phone:right-8">
                                {props.showCartCount}
                            </span>
                        }
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
         </>
    )
}

export default Navigation;
