import { useState } from "react";


function RecentItems(props) {

    
    const [recent, setRecent] = useState([]);

    if (props.recent) {
        //recent.push(props.recent)
    }

    return (
        <div>
            <h2 className="text-xl">Nedavno</h2>
            <div className="flex">
            ...render recent product 
            probably will use swiper
            </div>
        </div>
    )
}

export default RecentItems;