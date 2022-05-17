import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../assets/firestore";

const ItemListContainer = () => {
    const [productos, setProducts] = useState([]);
    const{idCategory} = useParams(); //OTRO HOOK

    useEffect(() => {
        firestoreFetch()
        .then(result => setProducts(result))
        .catch(err => console.log(err));
    }, [idCategory]);

    useEffect(() => {
        return(() => {
            setProducts([]);
        })
    }, []);

    return(
        <ItemList productos = {productos}></ItemList>
    );
}

export default ItemListContainer;