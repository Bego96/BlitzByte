import { useState } from 'react';
import { useEffect } from 'react';
import {GrClose} from 'react-icons/gr'; 
import { Link } from 'react-router-dom';

function Sidebar(props) {
    console.log(props.showAside);
    const [showCloseBtn, setShowCloseBtn] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth < 769 ) {
                setShowCloseBtn(true);
            } else {
                setShowCloseBtn(false);
            }
        };

        // Initial check
        handleWindowResize();

        const showCloseBtnOnScroll = () => {
            if (window.innerWidth >= 769) {
                if (window.scrollY > 120) {
                    setShowCloseBtn(true)
                } else {
                    setShowCloseBtn(false);
                }
            }
        }

        window.addEventListener('scroll', showCloseBtnOnScroll);

        // Attach event listener
        window.addEventListener('resize', handleWindowResize);

        // Clean up event listener
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])

    return (

        <aside className={`p-10 bg-slate-200 h-[100%] w-[30%] fixed transition-all duration-700 ease tablet:z-20 tablet:w-[60%] small-desktop:p-4 phone:w-[75%] ${props.showAside ? 'left-0 top-0' : 'left-[-30%] top-0 tablet:left-[-100%]'}`}>
            <div className="flex flex-col bg-slate-100 h-full p-10 small-desktop:p-4">
                {   showCloseBtn ? 
                    <div className={`relative`}>
                        <GrClose className="absolute right-0 top-0 cursor-pointer" color='white' size={25} onClick={() => props.setAside()}/>
                    </div> : null
                }

                <div className={`tablet:mt-10 tablet:flex tablet:flex-col transition-all ${showCloseBtn ? 'mt-14' : 'mt-0'}`}>
                    <input type="text" placeholder="Search.." className="border-[1px] w-[70%] h-12 pl-2 laptop:w-full"/>
                    <button type="button" className="w-[30%] bg-blue-500 h-12 text-white align-top hover:bg-blue-400 laptop:w-full">Search</button>
                </div>
                <div className="mt-10">
                    <ul>
                        <li className="mb-4"><Link to="/">Home</Link></li>
                        <li className="mb-4"><Link to="/Shop">Shop</Link></li>
                        <li className="mb-4"><Link to="/Snizeno">Sniženo</Link></li>
                    </ul>
                </div>
            </div>
            
        </aside>
    )
};

export default Sidebar;