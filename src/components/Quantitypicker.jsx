/* eslint-disable no-undef */
import { useState } from "react";
import "./Quantitypicker.css";

function Quantitypicker(props) {
    const [quantity, setQuantity] = useState(1);


    function increase() {
        let newVal = quantity + 1;
        setQuantity(newVal);
        props.onChange(newVal);
    }

    function decrease() {
        let newVal = quantity - 1;
        setQuantity(newVal);
        props.onChange(newVal);
    }


    return (
        <div className="qt-picker">
            <button className="minus" disabled={quantity === 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="plus" onClick={increase}>+</button>
        </div>
    )
}

export default Quantitypicker;