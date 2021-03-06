import db from "../assets/firebaseConfig";
import { doc, getDoc, orderBy } from "firebase/firestore";
import { collection, query, where, getDocs } from '@firebase/firestore';

export const firestoreFetch = async(idCategory) => {
    let q;
    if(idCategory){
        q = query(collection(db, "products"), where('categoryId', '==', idCategory));
    } else{
        q = query(collection(db, "products"), orderBy('name'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        // doc.data() is never undefined for query doc snapshots
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return{
            id: idItem,
            ...docSnap.data()
        }
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
}