import { useState } from 'react';
import { useEffect } from 'react';
import {GrClose} from 'react-icons/gr'; 
import { Link } from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';
import {IoSearchOutline} from 'react-icons/io5';
import { BsCart } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';

function MenuItemList({ to, text}) {
    const [underLine, setUnderLine] = useState(false);

    const handleMouseEnter = () => {
      setUnderLine(true);
    };
  
    const handleMouseLeave = () => {
      setUnderLine(false);
    };

  return (
    <li className="my-6 relative text-lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={to}>{text}</Link>
      <span
        className={`${
          underLine
            ? 'w-[20%]'
            : 'w-0'
        } transition-all ease-in-out duration-300 bg-slate-400 h-0.5 absolute bottom-0 left-0`}
      ></span>
    </li>
  );
}



function Sidebar(props) {
    const [showCloseBtn, setShowCloseBtn] = useState(false);

    const menuItems = [
        { 
            id: 1,
            to: "/", 
            text: "Home"
        },
        { 
            id: 2,
            to: "/Shop",
            text: "Shop" 
        },
        { 
            id: 3,
            to: "/Desktop", 
            text: "Desktop PC" 
        },
        {
            id: 4,
            to: "/Laptops", 
            text: "Laptops" 
        },
        { 
            id: 5,
            to: "/Mobiles", 
            text: "Mobiles" 
        },
        { 
            id: 6,
            to: "/TV's", 
            text: "TV's" 
        },
      ];

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth < 915 ) {
                setShowCloseBtn(true);
            } else {
                setShowCloseBtn(false);
            }
        };

        // Initial check
        handleWindowResize();

        // Attach event listener
        window.addEventListener('resize', handleWindowResize);

        // Clean up event listener
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])

    return (

        <aside className={`p-10 bg-slate-200 h-[100%] w-[28%] fixed transition-all duration-700 ease tablet:z-[130] tablet:w-[60%] small-desktop:p-4 phone:w-[100%] ${props.showAside ? 'left-0 top-0' : 'left-[-30%] top-0 tablet:left-[-100%]'}`}>
            <div className="flex flex-col rounded-md bg-slate-100 h-full p-10 small-desktop:p-4">
                  
                    <div className={`relative hidden tablet:block`}>
                        <GrClose className="absolute right-0 top-0 cursor-pointer" color='white' size={25} onClick={() => props.setAside()}/>
                    </div> 
                
                <div className= {`relative phone:w-full phone:mr-0 ${window.innerWidth < 915 ? 'mt-16' : 'mt-0'}`}>
                    <input type="search" className="border-2 border-slate-300 h-14 w-full p-4 rounded-3xl" placeholder="Search.."/>
                    <span><IoSearchOutline size={22} color="#94a3b8" className="absolute top-4 right-4 cursor-pointer"></IoSearchOutline></span>
                </div>
                <div className="mt-10">
                    <ul>
                    {menuItems.map((item, index) => (
                        <MenuItemList
                            key={item.id}
                            to={item.to}
                            text={item.text}
                        />
                    ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
};

export default Sidebar;