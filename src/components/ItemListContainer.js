import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import customFetch from "../assets/customFetch";
import products from "../assets/products";
import { useParams } from "react-router-dom";


const ItemListContainer = ({}) => {
    const [productos, setProducts] = useState([]);
    const{idCategory} = useParams(); //OTRO HOOK

    useEffect(() => {
        if(idCategory == undefined){
            customFetch(2000, products)
                .then(result => setProducts(result))
                .catch(err => console.log(err))
        } else{
            customFetch(2000, products.filter(producto => producto.categoryId == parseInt(idCategory)))
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        }   
/*             console.log(idCategory); */
    }, [idCategory]);

    const onAdd = (qty) => {
        alert("Elegiste " + qty + " productos");
    }

    return(
        <>
            <ItemList productos = {productos}></ItemList>
        </>
    );
}

export default ItemListContainer;