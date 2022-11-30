import './Style.css';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart.Context';

function CartItem({ product }) {

    let { addProduct, substractProduct, removeProduct } = useContext(CartContext);

    const [count, setCount] = useState(product.quantity);

    const onSubstract = () => {
        setCount(count - 1);
        substractProduct(product, count);
    }

    const onAdd = () => {
        setCount(count + 1);
        addProduct(product, count);
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

                <div>
                    <button disabled={count <= 1} onClick={() => onSubstract(count)}>-</button>
                    <span>{count}</span>
                    <button onClick={() => onAdd(count)}>+</button>
                </div>

                <p className='remove-item' onClick={() => removeProduct(product.id)}>Remove</p>
            </div>
            
        </div>
    )
}

export default CartItem