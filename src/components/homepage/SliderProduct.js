import { useEffect, useState } from "react";

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
                    `${showInfo ? 'bottom-0 h-full' : '-bottom-full h-0'} transition-all delay-150 duration-300 bg-fuchsia-800 flex justify-center items-center p-5 absolute text-white bg-opacity-80`
                }
            >
                <div className='bg-slate-200 text-black p-5 rounded-md'>
                    <h2 className="text-fuchsia-900 font-semibold text-2xl mb-5">{props.title}</h2>
                    <p className="text-slate-600">{props.about}</p>
                </div>
            </div>
        </div>
    );
};

export default SliderProduct;