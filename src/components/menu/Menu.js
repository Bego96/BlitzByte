import { Link} from "react-router-dom";

function Menu() {
    return (
        <div className="flex justify-center items-center tablet:hidden">
            <ul className="flex ">
                <li className="mx-6"><Link to="/">Home</Link></li>
                <li className="mx-6"><Link to="/Shop">Shop</Link></li>
                <li className="mx-6"><Link to="/Kontakt">Kontakt</Link></li>
                <li className="mx-6"><Link to="/Snizeno">Sniženo</Link></li>
                <li className="mx-6"><Link to="/O nama">O nama</Link></li>
            </ul>

        </div>
    )
}

export default Menu;