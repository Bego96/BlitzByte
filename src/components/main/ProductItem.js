// Product item will be used to show different products in a list of shop and latest products up to 10 days oldest in Home page 
import {BsCart} from 'react-icons/bs';

function ProductItem(props) {
    return (
        <div>
            <div className="">
                <img className="" src={props.image} alt="product"/>
            </div>
            <div className="bg-slate-200 p-4">
                <div className="">
                    <h2 className="text-orange-700 font-semibold text-xl mb-5">{ props.name} </h2>
                    <p>{ props.description }</p>
                    <p className="font-semibold text-lg mt-5">{ props.price }</p>
                </div>
                <div className="flex justify-center mt-5">
                    <button type="button" className="bg-blue-500 text-slate-100 h-12 flex justify-center items-center w-full hover:bg-blue-600"><BsCart size={20} color="#ffff" className='cursor-pointer mr-3'/>Dodaj u korpu</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;