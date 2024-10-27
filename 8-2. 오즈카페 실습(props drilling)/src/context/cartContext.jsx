import {createContext, useState, useContext} from "react";

const cartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    const addToCart = (quantity, options, id) => {
        setCart([...cart, {quantity, options, id}]);
    };
    const removeFromCart = id => {
        setCart(cart.filter(el => el.id !== id));
    };
    return <cartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}>{children}</cartContext.Provider>;
}

export function useCart() {
    return useContext(cartContext);
}
