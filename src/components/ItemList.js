import Item from "./Item";
import { Grid } from '@mui/material';

const ItemList = ({productos}) => {
    return(
        <>
            <Grid container direction="row" justifyContent="space-around" alignItems="center">
                {productos.map(producto => <Item key={producto.id} id={producto.id} name={producto.name} cost={producto.cost} stock={producto.stock} image={producto.image} /> )
                }
            </Grid>
        </>
    )
}

export default ItemList;