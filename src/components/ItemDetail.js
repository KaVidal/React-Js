import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GoToCart from './GoToCart';
import { CartContext } from '../components/CartContext';
import { Paper } from '@mui/material';

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);
    const add = useContext(CartContext);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        add.addToCart(item, qty);
    }

    return(
        <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: "100%",
          flexGrow: 1
        }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <img src={item.image}/>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Descripción
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      {item.stock} unidades
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="subtitle1" component="div">
                    $ {item.cost}
                  </Typography>
                </Grid>
                <Grid item xs>
                {
                  itemCount === 0
                  ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}></ItemCount>
                  : <GoToCart/>
                }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
    )
}

export default ItemDetail;

