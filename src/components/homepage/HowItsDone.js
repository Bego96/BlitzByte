import delivery from '../../assets/images/howitsdone/delivery.png';
import payment from '../../assets/images/howitsdone/money.png';
import refund from '../../assets/images/howitsdone/payback.png';

function HowItsDone() {


    return (
        <div className="grid grid-cols-3 gap-2 justify-items-center my-20 tablet:grid-cols-2 phone:grid-cols-1 tablet:p-6 phone:my-4 phone:gap-4">
            <div className=" flex flex-col py-10 rounded-md items-center tablet:mb-6 phone:my-0 bg-[#f5f1d5] w-full">
                <img className="w-20" src={delivery} alt="delivery" />
                <div className="text-center mt-6">
                    <h2 className="text-xl font-semibold text-orange-500">EUROEXPRESS DELIVERY</h2>
                    <p className='font-semibold'>At home address</p>
                </div>
            </div>
            <div className="flex flex-col py-10 rounded-md items-center tablet:mb-6 phone:my-0 w-full bg-[#daede0]">
                <img className="w-20" src={payment} alt="payment" />
                <div className="text-center mt-6">
                    <h2 className="text-xl font-semibold text-green-500">PAYMENT</h2>
                    <p className='font-semibold'>Upon takeover</p>
                </div>
            </div> 
            <div className="flex flex-col py-10 rounded-md items-center tablet:mb-6 phone:my-0 w-full bg-[#f5f4c6]">
                <img className="w-20" src={refund} alt="refund" />
                <div className=" text-center mt-6">
                    <h2 className="text-xl font-semibold text-yellow-500">REFUND</h2>
                    <p className='font-semibold'>If you are not satisfied with purchase</p>
                </div>
            </div>
        </div>
    )
}

export default HowItsDone;