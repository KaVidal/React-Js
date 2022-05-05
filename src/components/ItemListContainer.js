import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs } from "firebase/firestore";
import db from "../assets/firebaseConfig";

const ItemListContainer = ({}) => {
    const [productos, setProducts] = useState([]);
    const{idCategory} = useParams(); //OTRO HOOK

    useEffect(() => {
        const fetchFromFirestore = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFromFirestore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data() 
            })); 
            return dataFromFirestore;
        }
        fetchFromFirestore()
        .then(result => setProducts(result))
        .catch(err => console.log(err));
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