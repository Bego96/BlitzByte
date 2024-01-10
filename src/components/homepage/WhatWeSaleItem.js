function WhatWeSaleItem(props) {
    return (
        <div className="flex items-center bg-slate-200 p-4 rounded-md">
            <div className="w-[50%]">
                <img src={props.image} alt={props.alt}/>
            </div>
            <div className="w-[50%] ml-10">
                <h2 className="font-semibold text-lg text-slate-600">{props.about}</h2>
            </div>
        </div>
    )
}

export default WhatWeSaleItem;