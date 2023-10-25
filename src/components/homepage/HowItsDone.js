import delivery from '../../assets/images/howitsdone/delivery.png';
import payment from '../../assets/images/howitsdone/money.png';
import refund from '../../assets/images/howitsdone/payback.png';

function HowItsDone() {


    return (
        <div className="grid grid-cols-3 justify-items-center p-10 tablet:grid-cols-2 phone:grid-cols-1 phone:p-6">
            <div className=" flex flex-col items-center tablet:mb-6 phone:my-10">
                <img className="w-20" src={delivery} alt="delivery" />
                <div className="text-center mt-6">
                    <h2 className="text-xl font-semibold text-orange-500">EUROEXPRESS DELIVERY</h2>
                    <p>At home address</p>
                </div>
            </div>
            <div className="flex flex-col items-center tablet:mb-6 phone:my-10">
                <img className="w-20" src={payment} alt="payment" />
                <div className="text-center mt-6">
                    <h2 className="text-xl font-semibold text-green-500">PAYMENT</h2>
                    <p>Upon takeover</p>
                </div>
            </div> 
            <div className="flex flex-col items-center tablet:mb-6 phone:my-10">
                <img className="w-20" src={refund} alt="refund" />
                <div className=" text-center mt-6">
                    <h2 className="text-xl font-semibold text-yellow-500">REFUND</h2>
                    <p>If you are not satisfied with purchase</p>
                </div>
            </div>
        </div>
    )
}

export default HowItsDone;