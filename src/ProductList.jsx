import ProductItem from "./ProductItem";

function ProductList ({products}) {
    return (
        <div className = "products-container">
            <h1>Yoga & Wellness Packages</h1>
            {products.map((product) => (
                 <ProductItem key={product.id} product={product} />
                ))}
        </div>
    )
}

export default ProductList