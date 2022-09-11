import './style.css';
import { useState } from 'react';
import {useContext} from 'react';
import {CartContext} from '../../context/cart.context';

function CartItem({ product }) {

    let {addProduct} = useContext(CartContext);

    const [count, setCount] = useState(1);

    const decrease = () => { setCount(count - 1) };
    const increase = () => { setCount(count + 1) };

    const onAdd = (quantity) => {
        addProduct(product,quantity)
        console.log(`Compraste: ${quantity}`)
    }
    return (
        <div className="cart-item-container">
            <img src={product.image_link} alt="product" />

            <div className="counter">
                <section>
                    <button disabled={count <= 1} onClick={decrease}>-</button>
                    <span>{count}</span>
                    <button onClick={increase}>+</button>
                </section>
                <button onClick={() => onAdd(count)}>ADD</button>
            </div>
        </div>
    )
}

export default CartItem