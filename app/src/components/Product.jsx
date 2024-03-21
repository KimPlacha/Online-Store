import "./Product.css";
import Quantitypicker from "./Quantitypicker";
import constants from "../common/config";  
function Product(props){
    function add(){
        console.log('adding product');
    }
    return (
        <div className="product">
            <img src={constants.IMAGE_PATH + props.info.image} alt="main product"/>
            <h6>{props.info.title}</h6>
            <label>${props.info.price}</label>
        
        <Quantitypicker />

        <button onClick={add} className="btn btn-sm btn-success">
            Add
        </button>
    </div>
);
}

export default Product;
