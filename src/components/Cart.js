import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import db from "../assets/firebaseConfig";
import { collection, serverTimestamp, setDoc, doc, updateDoc, increment } from 'firebase/firestore';

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
    let subtotal = 0;
    items.map((item) => {
        subtotal = subtotal + priceRow(item.qtyItem, item.costItem);
    }) 
    return subtotal;
}

function iva(items){
    let impuesto = subtotal(items) * TAX_RATE;
    return impuesto;
}

function total(items){
    let total = subtotal(items) + iva(items);
    return total;
}

const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
        const itemsForDB = test.cartList.map(item => ({
            id: item.idItem,
            title: item.nameItem,
            price: item.costItem,
            qty: item.qtyItem
        }));

        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {  //updateDoc actualiza el stock
                stock: increment(-item.qtyItem) //pasandole un argumento negativo increment decrementa, si es positivo incrementa
            });
        });

        let order = {
            buyer: {
                name: "Leo Messi",
                email: "leomessi@gmail.com",
                phone: "123456789"
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: total(test.cartList),
        };

        const createOrderInFirestore = async() => {
            //Add a new document with a generated id
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
            .then(result => alert("Your order has been created. Please take note of the ID order.\n\n\nOrder ID: " + result.id + "\n\n"))
            .catch(err => console.log(err));

        test.clear();
    }

    return(
        <Box>
            <Grid container justifyContent="center" sx={{bgcolor: 'beige'}}>
                    <h1>Carrito de Compras</h1>
                <Grid container justifyContent="flex-start" spacing={0}>
                    <Button size="large">
                        <Link to= {'/'} style={{textDecoration: "none", color:"darkslategray"}}>Continuar comprando</Link>
                    </Button>
                </Grid>
                <Grid container justifyContent="flex-end" spacing={4}>
                    {
                        (test.cartList.length > 0)
                        ? <Button size="large" onClick={test.clear} style={{color: "darkslategrey"}}>Vaciar Carrito</Button>
                        : <Typography gutterBottom variant="h5">Su carrito est?? vac??o</Typography>
                    }
                </Grid>
            </Grid>
            {
                test.cartList.length > 0 && (
                    <Grid container sx={{margin: 2}}>
                        {
                            test.cartList.map(item =>
                                <Grid container spacing={2} key={item.idItem}>
                                    <Grid item sx={{margin: 1}}>
                                        <img src={item.imgItem}/>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.nameItem}
                                            </Typography>
                                            <Typography variant="h6" color="black">
                                                $ {item.costItem} c/u
                                            </Typography>
                                            </Grid>
                                            <Grid item xs>
                                            <Typography color="grey" component="div">
                                                 {item.qtyItem} seleccionado(s)
                                            </Typography>
                                            </Grid>
                                            <Grid item xs>
                                            <Button size="large" onClick={() => test.removeItem(item.idItem)} startIcon={<DeleteIcon />} style={{color: "red"}}>Eliminar</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        }

                        <TableContainer sx={{  maxWidth: '80%', border: 1, margin: 1}} component={Paper}>
                            <Table aria-label="spanning table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" colSpan={4} sx={{bgcolor: 'black', color: 'white'}}>
                                        RESUMEN DE COMPRA
                                        </TableCell>
                                    </TableRow>
                                    <TableRow sx={{bgcolor: 'lightgray'}}>
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
                                        <TableCell align="right">{ccyFormat(priceRow(p.qtyItem, p.costItem))}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell rowSpan={3} />
                                        <TableCell colSpan={2}>Subtotal</TableCell>
                                        <TableCell align="right">{ccyFormat(subtotal(test.cartList))}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>IVA(21%)</TableCell>
                                        <TableCell align="right">{ccyFormat(iva(test.cartList))}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>Total</TableCell>
                                        <TableCell align="right">{ccyFormat(total(test.cartList))}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Button size="medium" variant="contained" color="success" onClick={createOrder}> Finalizar Compra</Button>
                        </TableContainer>
                    </Grid>
                )
            }
        </Box>
    )
}

export default Cart;

