import { useState } from "react";
import ProductItem from "../main/ProductItem";
import ReactPaginate from 'react-paginate';
import '../styles.css'
import { AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'

function TelevisionProductList(props) {

    /** PAGINATION TEST  **/
    const [itemsPerPage, setItemsPerPage] = useState(props.itemsPerPage)
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
        <div className="p-10 bg-slate-100 rounded-md w-[80%] small-desktop:w-[70%] laptop:w-[65%] tablet:w-full phone:p-6">
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
                nextLabel={<AiOutlineRight></AiOutlineRight>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<AiOutlineLeft></AiOutlineLeft>}
                renderOnZeroPageCount={null}
                containerClassName="paginationContainer"
                /> : null
            }
        </div>
    )
}

export default TelevisionProductList;