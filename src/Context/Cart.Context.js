import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') || "[]"));

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: quantity + 1 } : product
            }))
        } else {
            setCart([...cart, { ...item, quantity }])
        }
    }

    const substractProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: quantity - 1 } : product
            }))
        } else {
            setCart([...cart, { ...item, quantity }])
        }
    }

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id))
    }

    const totalProducts = () => {
        return cart.reduce((prev, act) => prev + act.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    return <CartContext.Provider value={{
        isInCart,
        removeProduct,
        addProduct,
        substractProduct,
        totalProducts,
        totalPrice,
        cart
    }}>
        {children}</CartContext.Provider>
}

export { CartContext, CartProvider }

