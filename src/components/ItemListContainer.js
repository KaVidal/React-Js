import { useEffect, useState } from "react";
import { Wrapper } from './styledComponents';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import customFetch from "../assets/customFetch";
/* import Item from "./Item"; */
import products from "../assets/products";


const ItemListContainer = ({greeting}) => {
    const [productos, setProducts] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, []);

    const onAdd = (qty) => {
        alert("Elegiste " + qty + " productos");
    }

    return(
        <>
            <Wrapper>{greeting}</Wrapper>
            <ItemList productos = {productos}></ItemList>
            <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
        </>
    );
}

export default ItemListContainer;