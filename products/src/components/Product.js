import "../Css/product.css"
import Button from "./Button"
export default function Product(props) {
    return (
        <div className="product">
            <img src={props.product.image} alt="product-image" />
            <h2>{props.product.title}</h2>
            <p>{props.product.description}</p>
            <div className="info">
                <Button>Add to Cart</Button>
                <span className="price">{props.product.price}</span>
            </div>
        </div>
    )
}