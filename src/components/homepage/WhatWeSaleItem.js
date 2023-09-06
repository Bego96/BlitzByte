function WhatWeSaleItem(props) {
    return (
        <div className="flex items-center bg-slate-300 p-4">
            <div className="w-[50%]">
                <img src={props.image} alt={props.alt}/>
            </div>
            <div className="w-[50%] ml-10">
                <h2 className="font-semibold text-lg">{props.about}</h2>
            </div>
        </div>
    )
}

export default WhatWeSaleItem;