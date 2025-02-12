import "../Css/products-list.css"
import Product from "./Product"
export default function ProductsList({ products }) {
    const list = products.map(p => {
        return <Product product={p} key={p.id} />
    })
    return (
        <div className="products-list">
            {list}
        </div>
    )
}