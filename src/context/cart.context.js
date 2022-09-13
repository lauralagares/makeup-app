import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]); //cart

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: quantity} : product
            }))
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }

    const isInCart = (id) => { 
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id))
    }

    const totalProducts = () => {
        return cart.reduce((prev,act) =>  prev + act.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((prev,act) => prev + act.quantity * act.price , 0)
    }


    return <CartContext.Provider value={{
        isInCart,
        removeProduct,
        addProduct,
        totalProducts,
        totalPrice,
        cart
    }}>
        {children}</CartContext.Provider>
}

export { CartContext, CartProvider }

