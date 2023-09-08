import delivery from '../../assets/images/howitsdone/delivery.png';
import payment from '../../assets/images/howitsdone/money.png';
import refund from '../../assets/images/howitsdone/payback.png';

function HowItsDone() {


    return (
        <div className="grid grid-cols-3 justify-items-center p-10 tablet:grid-cols-2 phone:grid-cols-1 phone:p-6">
            <div className=" flex flex-col items-center tablet:mb-6 phone:my-10">
                <img className="w-20" src={delivery} alt="delivery" />
                <div className="text-center mt-6">
                    <h2 className="text-xl font-semibold text-orange-500">EUROEXPRESS DOSTAVA</h2>
                    <p>Na kućnu dostavu</p>
                </div>
            </div>
            <div className="flex flex-col items-center tablet:mb-6 phone:my-10">
                <img className="w-20" src={payment} alt="payment" />
                <div className="text-center mt-6">
                    <h2 className="text-xl font-semibold text-green-500">PLAĆANJE</h2>
                    <p>Po preuzimanju</p>
                </div>
            </div> 
            <div className="flex flex-col items-center tablet:mb-6 phone:my-10">
                <img className="w-20" src={refund} alt="refund" />
                <div className=" text-center mt-6">
                    <h2 className="text-xl font-semibold text-yellow-500">VRAĆAMO NOVAC</h2>
                    <p>Ukoliko niste zadovoljni proizvodom</p>
                </div>
            </div>
        </div>
    )
}

export default HowItsDone;