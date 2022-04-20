import { Link } from "react-router-dom";

const GoToCart = () => {
    return(
        <Link to='/cart'>
            <button type="button" className="btn btn-info">Ver Carrito</button>
        </Link>
    )
}

export default GoToCart;