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

    const [showInfo, setShowInfo] = useState(window.screen.width < 769 ? true : false);


    useEffect(() => {

        const showInfoOnSmallDevices = () => {
            if (window.screen.width < 769) {
                setShowInfo(true);
            } else {
                setShowInfo(false);
            }
        }
        window.addEventListener('resize', showInfoOnSmallDevices);
    }, [showInfo]);
    
    return (
        <div className="relative" onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <img src={props.image} alt={props.alt}/>
            {
                showInfo ? 
                <div className={`bg-blue-600 flex justify-center items-center p-5 absolute left-0 right-0 top-0 bottom-0 text-white bg-opacity-50`}>
                <div className="bg-slate-200 text-black p-5">
                    <h2 className="text-orange-700 font-semibold text-xl mb-5">{props.title}</h2>
                    <p>{props.about}</p>
                </div>
            </div> : null
            }
        </div>
    )
};

export default SliderProduct;