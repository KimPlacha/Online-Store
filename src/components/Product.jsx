import "./Product.css";
import Quantitypicker from "./Quantitypicker";
function Product(props){
    return (
        <div className="product">
            <img src="https://picsum.photos/200" alt="" />
            <h6>{props.info.title}</h6>
            <label>${props.info.price}</label>
        
        <Quantitypicker />
        </div>
    );
}

export default Product;
