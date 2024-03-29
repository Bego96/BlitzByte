import { useState } from 'react';
import { useEffect } from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';


function MenuItemList({ to, text, showAside, toggleAside}) {
    const [underLine, setUnderLine] = useState(false);

    const handleMouseEnter = () => {
      setUnderLine(true);
    };
  
    const handleMouseLeave = () => {
      setUnderLine(false);
    };

  return (
    <Link to={to} onClick={() => toggleAside(false)}><li className="my-6 relative hover:bg-blue-900 p-4 hover:rounded-md cursor-pointer text-lg" 
    onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}>
      {text}
      <span
        className={`${
          underLine
            ? 'w-[20%]'
            : 'w-0'
        } transition-all ease-in-out duration-300 bg-slate-400 h-0.5 absolute bottom-0 left-4`}
      ></span>
    </li>
    </Link>
  );
}



function Sidebar(props) {
    const [showCloseBtn, setShowCloseBtn] = useState(false);

    const menuItems = [
        { 
            id: 1,
            to: "/Home", 
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

    

    return (
        <aside className={`p-10 z-40 text-white flex flex-col bg-blue-500 h-[100%] w-[20%] fixed transition-all duration-700 ease tablet:z-[130] 
        tablet:w-[60%] small-desktop:p-4 phone:w-[100%] ${props.showAside ? 'left-0 top-0' : 'left-[-30%] top-0 tablet:left-[-100%]'}`}>
            <div className={`relative hidden tablet:block`}>
                <AiOutlineClose className="absolute right-0 top-0 cursor-pointer" color='white' size={25} onClick={() => props.setAside()}/>
            </div>
            <div className="tablet:mt-6">
                <ul>
                    {menuItems.map((item, index) => (
                        <MenuItemList
                            key={item.id}
                            to={item.to}
                            text={item.text}
                            showAside={props.showAside}
                            toggleAside={props.setAside}
                        />
                    ))}
                </ul>
            </div>
        </aside>
    )
};

export default Sidebar;