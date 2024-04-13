import "./Product.css";
import Quantitypicker from "./Quantitypicker";
import constants from '../common/config';
import { useState, useContext } from "react";

import DataContext from "../context/dataContext";

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    let addProductToCart = useContext(DataContext).addProductToCart;

    function add() {
        let prod = { ...props.info };
        prod.quantity = quantity;

        addProductToCart(prod);
    }

    function quantityChanged(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.info.price * quantity;
        return total.toFixed(2);
    }

    return (
        <div className="product">
            <img src={constants.IMAGE_PATH + props.info.image} alt="" />
            <h6>{props.info.title}</h6>
            <label className="price">${props.info.price.toFixed(2)}/lb</label>
            Total:<label className="total">${getTotal()}</label>

            <Quantitypicker onChange={quantityChanged}></Quantitypicker>

            <button onClick={add} className="btn btn-color1 btn-sm">Add to Cart</button>
        </div>
    );
}

export default Product;