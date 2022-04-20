import { useEffect, useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const[rate, setRate] = useState(0); //ESTO ES UN HOOK
    
    useEffect(() => {
        setRate(initial);
    },[]);

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
            {
                stock
                ? <button type="button" className="btn btn-success" onClick={() => onAdd(rate)}>Add to Cart</button>
                : <button type="disabled">Add to Cart</button>
            }
        </div>
    )
}

export default ItemCount;