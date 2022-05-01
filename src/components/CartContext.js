import {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if(found === undefined){
            setCartList([
                ...cartList,
                {
                    idItem : item.id,
                    imgItem : item.image,
                    nameItem : item.name,
                    costItem : item.cost,
                    qtyItem : qty
                }
            ]);
        } else{
            found.qtyItem += qty;
        }
            
    }

    const removeItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const clear = () => {
        setCartList([]);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, clear, removeItem}}> {/* está envuelto en un objeto */}
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
