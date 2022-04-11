import { useEffect, useState } from "react";
import { Wrapper } from './styledComponents';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { getProducts } from "../assets/products";


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function mostrarProductos() {
            let todosProductos = await getProducts();
            setProducts(todosProductos);
        }
        mostrarProductos()
    }, []);

    const onAdd = (qty) => {
        alert("Elegiste " + qty + " productos");
    }

    return(
        <>
            <Wrapper>{greeting}</Wrapper>
            <ItemList productos = {products}></ItemList>
            <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
        </>
    );
}

export default ItemListContainer;