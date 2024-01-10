import { useEffect, useState } from "react";

function SliderProduct(props) {
    

    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 915) {
            document.getElementById(`${props.contentId}`).addEventListener('click', () => {
                setShowInfo(!showInfo);
            })
        }   else {
            document.getElementById(`${props.contentId}`).removeEventListener('click', () => {
                setShowInfo(!showInfo)
            })
        }
    }, [showInfo])
    
    return (
        <div id={props.contentId} className="relative cursor-pointer" onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <img src={props.image} alt={props.alt}/>
            <div className={`${showInfo ? 'opacity-100' : 'opacity-0'} transition-all delay-50 bg-blue-200 flex justify-center items-center p-5 absolute left-0 right-0 top-0 bottom-0 text-white bg-opacity-50`}>
                <div className='bg-slate-200 text-black p-5 rounded-md'>
                    <h2 className="text-orange-700 font-semibold text-xl mb-5">{props.title}</h2>
                    <p className="text-slate-600">{props.about}</p>
                </div>
            </div>  
        </div>
    )
};

export default SliderProduct;