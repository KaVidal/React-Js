import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            {greeting}
            <hr></hr>
            <ItemCount></ItemCount>
        </div>
    );
}

export default ItemListContainer;