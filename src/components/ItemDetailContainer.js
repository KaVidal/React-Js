import {useEffect, useState} from 'react';
import customFetch from "../assets/customFetch";
import ItemDetail from "./ItemDetail";
import products from "../assets/products"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const[detail, setDetail] = useState({}); //Estado
    const{idItem} = useParams();

    useEffect(() => {
        customFetch(2000, products.find(producto => producto.id === parseInt(idItem)))
            .then(result => setDetail(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return(
        <div>
            <ItemDetail item={detail} />
        </div>
    );
}

export default ItemDetailContainer;