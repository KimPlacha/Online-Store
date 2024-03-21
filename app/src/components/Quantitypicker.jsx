/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Quantitypicker.css";
function Quantitypicker() {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        let newVal = quantity + 1;
        setQuantity(newVal);
    }
        function decrease() {
            let newVal = quantity - 1;
            if (newVal > 0) {
            setQuantity(newVal);
            }
    }
    return(
        <div className="qt-picker">
            <button className="btn btn-sm btn-primary" disabled={quantity == 1} onClick={decrease}>
                -
            </button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-primary" onClick={increase}>
                +
            </button>
        </div>
    );
}

export default Quantitypicker;