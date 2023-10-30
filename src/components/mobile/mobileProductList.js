import { useState } from "react";
import ProductItem from "../main/ProductItem";
import ReactPaginate from 'react-paginate';
import '../styles.css'

function MobileProductList(props) {

    /** PAGINATION TEST  **/
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = props.products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(props.products.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % props.products.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className="p-10 bg-slate-100 w-[80%] rounded-md small-desktop:w-[70%] laptop:w-[65%] tablet:w-full phone:p-2">
            <div className=" grid grid-cols-5 gap-2 place-items-stretch gap-y-8 small-desktop:grid-cols-3 laptop:grid-cols-2 laptop:gap-x-2 phone:place-items-center ">
                {
                    currentItems.map((product) => {
                        return (
                            
                            <ProductItem
                                id={product.id}
                                addToCart={props.addToCart}
                                image={product.product.images}
                                name={product.product.name}
                                description={product.product.description}
                                price={product.product.price}
                                placeProductLink={props.placeProductLink}
                            />
                        
                        )
                    })
                }
            </div>
            {
                props.products.length > itemsPerPage ?
                <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="paginationContainer"
                /> : null
            }
        </div>
    )
}

export default MobileProductList;