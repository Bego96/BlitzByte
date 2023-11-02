import { useEffect, useState } from "react";

function SliderProduct(props) {
    // random bg color generator when each component renders TEST ONLY
    const randomBg = () => {
        const colors = ['blue', 'orange', 'purple'];

        // Generate a random index to pick a color from the array
        const randomIndex = Math.floor(Math.random() * colors.length);

        // Generate a random background color value between 0 and 1000
        const bgColor = Math.floor(Math.random() * 1000);

        // Map the bgColor to the desired range (200, 300, 400, 500)
        const mappedBgColor = 200 + (bgColor % 4) * 100;

        // Construct the CSS class with the selected color and mapped background value
        const bgClass = `bg-${colors[randomIndex]}-${mappedBgColor}`;
        console.log(bgClass);

        // Return the generated CSS class
        return bgClass;
    }

    // Show info on hover, will be improved with framer motion for more dynamic hover effect

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