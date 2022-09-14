import './style.css';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

function CartItem({ product }) {

    let { addProduct, removeProduct } = useContext(CartContext);

    const [count, setCount] = useState(1);
    const decrease = () => { setCount(count - 1) };
    const increase = () => { setCount(count + 1) };

    const onAdd = (quantity) => {
        addProduct(product, quantity)
        console.log(`Compraste: ${quantity}`)
    }

    const handleError = (e) => {
        e.target.src = "https://cdn.dribbble.com/users/1314233/screenshots/6081627/media/8809f8695b8adb03a571b0dd66a220ea.jpg?compress=1&resize=1200x900&vertical=top"
        e.onError = null;
    }

    return (
        <div className="cart-item-container">
            <div className="item-img-container">
                <img src={product.image_link} alt={product.name} className="img-fluid"
                onError={handleError} />
            </div>


            <div className="cart-item-name">
                <p>{product.name}</p>
             
            </div>

            <div className="counter">
                <section>
                    <button disabled={count <= 1} onClick={decrease}>-</button>
                    <span>{count}</span>
                    <button onClick={increase}>+</button>
                </section>
                <button onClick={() => onAdd(count)}>UPDATE</button>

                   <p>${product.price * product.quantity}</p>
            </div>
            
            <div className="item-remove-button">
                <button onClick={() => removeProduct(product.id)}>X</button>
            </div>
            
        </div>
    )
}

export default CartItem