import { useState } from "react";

function SliderProduct(props) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
        >
            <img src={props.image} alt={props.alt} />
            <div
                className={
                    `${showInfo ? 'bottom-0 h-full' : '-bottom-full h-0'} backdrop-blur-md transition-all delay-150 duration-300 bg-sky-800 
                    flex justify-center items-center p-5 absolute text-white bg-opacity-80`
                }
            >
                <div className=' text-white p-5 '>
                    <h2 className="font-bold text-3xl mb-5 phone:text-xl">{props.title}</h2>
                    <p className="text-lg phone:text-sm">{props.about}</p>
                </div>
            </div>
        </div>
    );
};

export default SliderProduct;