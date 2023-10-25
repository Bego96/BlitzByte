import { Link} from "react-router-dom";

function Menu() {
    return (
        <div className="flex justify-center items-center tablet:hidden p-4">
            <ul className="flex ">
                <li className="mx-6"><Link to="/">Home</Link></li>
                <li className="mx-6"><Link to="/Shop">Shop</Link></li>
                <li className="mx-6"><Link to="/Snizeno">Discounts</Link></li>
            </ul>

        </div>
    )
}

export default Menu;