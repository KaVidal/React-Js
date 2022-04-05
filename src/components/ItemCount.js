import { useState } from "react";

const ItemCount = (props) => {
    const[rate, setRate] = useState(1); //ESTO ES UN HOOK
    const increment = () => {
        if(rate < 5){
            setRate(rate+1);
        }
    }
    const decrease = () => {
        if(rate > 1){
            setRate(rate-1);
        }
    }
    return(
        <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary" onClick={increment}>+</button>
            <button type="disabled">{rate}</button>
            <button type="button" class="btn btn-outline-primary" onClick={decrease}>-</button>
            <button type="button" class="btn btn-success">Add to Cart</button>
        </div>
    )
}

export default ItemCount;