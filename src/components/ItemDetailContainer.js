import {useEffect, useState} from 'react';
import customFetch from "../assets/customFetch";
import ItemDetail from "./ItemDetail";
import products from "../assets/products"

const ItemDetailContainer = () => {
    const[detail, setDetail] = useState({}); //Estado

    useEffect(() => {
        customFetch(2000, products[4])
            .then(result => setDetail(result))
            .catch(err => console.log(err))
    }, []);

    return(
        <div>
            <ItemDetail item={detail} />
        </div>
    );
}

export default ItemDetailContainer;