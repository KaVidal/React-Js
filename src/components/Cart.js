import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardMedia } from '@mui/material';
import { useContext } from "react";
import { CartContext } from "../components/CartContext";

const Cart = () => {
    const test = useContext(CartContext);

    return(
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <Grid container spacing={0}>
                    <h1>Carrito de Compras</h1>
                <Grid container justifyContent="flex-start" spacing={0}>
                    <Button size="small">
                        <Link to= {'/'}>Continuar comprando</Link>
                    </Button>
                </Grid>
                <Grid container justifyContent="flex-end" spacing={4}>
                    <Button size="small" onClick={test.clear}>Vaciar Carrito</Button>
                </Grid>
            </Grid>
            {
                test.cartList.length > 0 && (
                    <Grid container spacing={-5}>
                        {
                            test.cartList.map(item =>
                                <Grid item xs= "auto" width="100%" container direction="row" spacing={0} key={item.idItem}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image= {item.imgItem}
                                        alt="Producto elegido"
                                    />
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.nameItem}
                                        </Typography>
                              
                                        <Typography gutterBottom variant="h6" component="div">
                                            $ {item.costItem} c/u
                                        </Typography>

                                        <Typography color="text.secondary" component="div">
                                            {item.qtyItem} seleccionado(s)
                                        </Typography>
                                    </Grid>
                                    <Grid container>
                                        <Button variant="outlined" onClick={() => test.removeItem(item.idItem)} startIcon={<DeleteIcon />}>Eliminar</Button>
                                    </Grid>
                                </Grid>
                            )
                        }
                    </Grid>
                )
            }
        </Box>
    )
}

export default Cart;