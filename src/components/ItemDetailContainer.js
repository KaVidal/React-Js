import {useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { firestoreFetchOne } from '../assets/firestore';

const ItemDetailContainer = () => {
    const[detail, setDetail] = useState({}); //Estado
    const{idItem} = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
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