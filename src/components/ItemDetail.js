import ItemCount from './ItemCount';
import { useState } from 'react';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GoToCart from './GoToCart';

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
    }

    return(
        <Grid container>
          <img src={item.image}/>
          <Grid item xs container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Descripción
                </Typography>
              </Grid>
              <Grid item xs>
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
    )
}

export default ItemDetail;

