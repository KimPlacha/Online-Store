import { useState } from 'react';
import "./Quantitypicker.css";

function Quantitypicker() {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        let newVal = quantity + 1;
        console.log('+ clicked');
    }
    return(
        <div className="qt-picker">
            <button>-</button>
            <button>1</button>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default Quantitypicker;