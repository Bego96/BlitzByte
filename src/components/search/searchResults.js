import ResultItem from "./resultItems";

function SearchResults(props) {
    return (
        <div className="rounded-md mt-4 h-[700px] p-4 phone:p-2">
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