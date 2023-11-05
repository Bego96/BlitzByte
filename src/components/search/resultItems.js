import { Link, useLocation } from "react-router-dom";

function ResultItem(props) {

    
    return (
        <div className="bg-white rounded-md mb-4 flex justify-between items-center p-4 bg-slate-200">
            <Link to={`/Shop/${props.id}`}><div className="w-[70%] flex items-center">
                <div className="w-[20%] mr-4 tablet:w-full">
                    <img src={props.image[0].img} alt="produt"/>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">{props.name}</h2>
                </div>
                </div>
            </Link>
            <div className="w-[30%] flex flex-col items-end">
                <div>
                    <p className="font-semibold text-lg">{props.price}$</p>
                </div>
            </div>
        </div>
    )
}

export default ResultItem;