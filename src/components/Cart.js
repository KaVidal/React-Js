import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const test = useContext(CartContext);

    return(
        <div className="card mb-3" style="max-width: 540px;">
            <h1>Carrito de Compras</h1>
            {
                test.cartList.length > 0 ?
                test.cartList.map(item => 
                    <div className="row g-0">
                            <div>
                                <div className="col-md-4">
                                    <img src={test.image} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{test.name}</h5>
                                        <p className="card-text">$ {test.cost} c/u</p>
                                        <p className="card-text"><small className="text-muted">{test.stock} producto(s)</small></p>
                                    </div>
                                </div>
                            </div>        
                    </div>
                )
                :<h1></h1>
            }
           
        </div>
    )
}

export default Cart;