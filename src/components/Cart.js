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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TAX_RATE = 0.21;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}
  
function priceRow(qty, unit) {
    return qty * unit;
}
  
function createRow(product, qty, unit) {
    const price = priceRow(qty, unit);
    return { product, qty, unit, price };
}
  
function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i);
}
  
const rows = createRow();
  
const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

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

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center" colSpan={4}>
                                     RESUMEN DE COMPRA
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Productos</TableCell>
                                    <TableCell align="right">Cantidad</TableCell>
                                    <TableCell align="right">Unidad</TableCell>
                                    <TableCell align="right">Total</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {test.cartList.map((p) => (
                                    <TableRow key={p.idItem}>
                                    <TableCell>{p.nameItem}</TableCell>
                                    <TableCell align="right">{p.qtyItem}</TableCell>
                                    <TableCell align="right">{p.costItem}</TableCell>
                                    <TableCell align="right">{priceRow(p.qtyItem, p.costItem)}</TableCell>
                                    </TableRow>
                                ))}
                                {test.cartList.map((sub, i) => (
                                <TableRow key= {sub.costItem}>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2}>Subtotal</TableCell>
                                    <TableCell align="right">{subtotal(sub.costItem, i)}</TableCell>
                                </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell colSpan={2}>IVA(21%)</TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>Total</TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                                </TableRow>
                                
                                </TableBody>
                            </Table>
                            </TableContainer>
                            <Button variant="contained" color="success"> Finalizar Compra</Button>
                    </Grid>
                )
            }
        </Box>
    )
}

export default Cart;


