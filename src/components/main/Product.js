// This Product component will be used as a single page to set product details when user clicks on Product Item in a list of products (From latest products in Home page, from all products in Shop, and discounted in Discounts ). Essentialy it opens new page for clicked products details.
// Regarding images, there will be main image and under it array of images, when we click on image in array then main image changes, detecting is done with image's id.
import { Link} from "react-router-dom";

function Product(props) {

    console.log(props)

    return (
        <div className="bg-slate-200">
            <ul>
                    
                </ul>
            <div>
                <div>
                    <img />
                    .. main image
                </div>
                <div><h1>{props.name}</h1></div>
            </div>
            <div>
                .. about product
                <h2>{}</h2>
                <p>.. Name</p>
                <p>.. type</p>
                <p>.. description</p>
                <p>.. price</p>
                <ul>
                    .. components
                    map array to print component list
                    <li>..</li>
                </ul>

            </div>
        </div>
        
    )
}

export default Product;