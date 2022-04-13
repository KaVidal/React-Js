import ItemCount from "./ItemCount";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ItemDetail = ({item}) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
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
                  Torta estilo dripcake con baño de chocolate, decorada con
                  crema chantilly y alfajorcitos
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
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd}></ItemCount>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
}

export default ItemDetail;

