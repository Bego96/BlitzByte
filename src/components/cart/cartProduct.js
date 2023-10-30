import {BsCart} from 'react-icons/bs';

function CartProduct(props) {

    const removeFromCart = (productId) => {
        props.removeFromCart(productId);
    }

    return (
        <div className="flex justify-between items-center bg-slate-100 p-6 mb-6 rounded-md phone:flex-col">
            <div className="flex w-[80%] tablet:w-[60%] phone:w-full phone:flex-col">
                <div className="w-[20%] tablet:w-[40%] phone:w-[100%] phone:mx-0">
                    <img src={props.image} alt="Product wishlist"/>
                </div>
                <div className="ml-6 phone:my-10 phone:ml-0">
                    <h2 className="text-2xl mb-4">{props.name}</h2>
                    <p className="text-slate-600 mb-4">{props.description}</p>
                    <p className='text-slate-700 font-semibold text-3xl'>{props.price}</p>
                </div>
            </div>
            <div className='w-[20%] tablet:w-[30%] text-center phone:w-[100%]'>
                <button type="button" className="rounded-md mb-2 bg-blue-500 text-slate-100 h-12 flex justify-center w-full items-center hover:bg-blue-600">Purchase</button>
                <span className='text-red-600 cursor-pointer' onClick={() => removeFromCart(props.id)}>Remove</span>
            </div>
        </div>
    )
}

export default CartProduct;