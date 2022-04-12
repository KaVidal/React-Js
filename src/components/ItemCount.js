import { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const[rate, setRate] = useState(initial); //ESTO ES UN HOOK
    const increment = () => {
        if(rate < stock){
            setRate(rate+1);
        }
    }
    const decrease = () => {
        if(rate > initial){
            setRate(rate-1);
        }
    }
    return(
        <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary" onClick={increment}>+</button>
            <button type="disabled">{rate}</button>
            <button type="button" className="btn btn-outline-primary" onClick={decrease}>-</button>
            <button type="button" className="btn btn-success" onClick={() => onAdd={rate}}>Add to Cart</button>
        </div>
    )
}

export default ItemCount;