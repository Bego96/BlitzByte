import ProductItem from "../main/ProductItem";
import ReactPaginate from 'react-paginate';
import '../styles.css'
import { AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'

function LaptopProductList(props) {

    const endOffset = props.itemOffset + props.itemsPerPage;
    const currentItems = props.products.slice(props.itemOffset, endOffset);
    const pageCount = Math.ceil(props.products.length / props.itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * props.itemsPerPage) % props.products.length;
        props.setItemOffset(newOffset);
    };

    return (
        <div className="p-10 bg-slate-100 rounded-md w-[80%] small-desktop:w-[70%] laptop:w-[65%] tablet:w-full phone:p-4">
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
                props.products.length > props.itemsPerPage ?
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

export default LaptopProductList;