import {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        console.log('CartContextProvider', item);
        setCartList([
            ...cartList,
            item
        ]);
    }
    return(
        <CartContext.Provider value={{cartList, addToCart}}> {/* está envuelto en un objeto */}
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
