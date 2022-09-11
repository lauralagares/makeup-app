import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]); //cart
    console.log(cart)

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({...item, quantity: newQuantity});
        setCart(newCart);
    }
 
    const clearCart = () => { setCart([]) }; // clear the cart

    const isInCart = (id) => { // find a product
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id))
    }


    return <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        cart
    }}>
        {children}</CartContext.Provider>
}

export { CartContext, CartProvider }

