import ResultItem from "./resultItems";

function SearchResults(props) {
    return (
        <div className="rounded-md small-desktop:w-[75%] tablet:w-[90%] left-1/2 transform -translate-x-1/2 fixed top-24 w-[58%] mt-4 h-[700px] p-4 phone:p-0">
            <div className="h-full overflow-y-scroll p-4 phone:p-2">
                {
                    props.results.map((product) => {
                        return (
                            <ResultItem id={product.id}
                            image={product.product.images}
                            name={product.product.name}
                            description={product.product.description}
                            price={product.product.price}
                            placeProductLink={props.placeProductLink}
                            addToCart={props.addToCart}
                            setShowSearch={props.setShowSearch}
                            showSearch={props.showSearch}
                            closeSearchOnClickLink={props.closeSearchOnClickLink}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchResults;