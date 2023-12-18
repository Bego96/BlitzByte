import whatWeSaleService from "../../assets/services/whatWeSaleService";
import { useState } from "react";
import WhatWeSaleItem from "./WhatWeSaleItem";

function WhatWeSale() {

    const [whatWeSale, setWhatWeSale] = useState(
        whatWeSaleService
    )

    return (
        <div className="grid grid-cols-3 justify-items-center gap-2 my-20 laptop:grid-cols-2 phone:grid-cols-1 phone:gap-6 phone:place-items-stretch phone:m-0 phone:p-6">
            {
                whatWeSale.map((item) => {
                    return (
                        <WhatWeSaleItem key={item.id} image={item.image} about={item.about} alt={item.alt}/>
                    )
                })
            }
            
        </div>
    )
}

export default WhatWeSale;