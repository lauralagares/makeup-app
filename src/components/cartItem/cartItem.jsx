import './style.css';
import { useState } from 'react';

function CartItem({ product }) {

    const [count, setCount] = useState(1);

    const decrease = () => { setCount(count - 1) };
    const increase = () => { setCount(count + 1) };
    return (
        <div className="cart-item-container">
            <img src={product.image_link} alt="product" />

            <div className="counter">
                <section>
                    <button disabled={count <= 1} onClick={decrease}>-</button>
                    <span>{count}</span>
                    <button onClick={increase}>+</button>
                </section>
                <button>ADD</button>
            </div>
        </div>
    )
}

export default CartItem