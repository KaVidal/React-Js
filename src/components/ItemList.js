import Item from "./Item";
import { Grid } from '@mui/material';

export default function ItemList({productos}) {
    console.log(productos, "estoy en itemList")
    return(
        <>
            <Grid container direction="row" justifyContent="space-around" alignItems="center">
                {productos.map((producto) => (
                    <Item key={producto.id} {...producto} />
                ))
                }
            </Grid>
        </>
    )
}

