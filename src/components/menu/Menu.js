import React, { useState } from "react";
import { Link } from "react-router-dom";

function MenuItem({ to, text}) {
    const [underLine, setUnderLine] = useState(false);

    const handleMouseEnter = () => {
      setUnderLine(true);
    };
  
    const handleMouseLeave = () => {
      setUnderLine(false);
    };

  return (
    <li className="mx-6 relative text-lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={to}>{text}</Link>
      <span
        className={`${
          underLine
            ? 'w-full'
            : 'w-0'
        } transition-all ease-in-out duration-300 bg-slate-100 h-0.5 absolute bottom-0 left-0`}
      ></span>
    </li>
  );
}


function Menu() {
  
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
    }
  ];

  return (
    <div className="flex justify-center items-center tablet:hidden p-4 bg-gradient-to-r from-cyan-700 to-blue-800 text-slate-100 rounded-b-md">
      <ul className="flex">
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.id}
            to={item.to}
            text={item.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
