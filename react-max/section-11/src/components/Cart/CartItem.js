import React, { useContext } from 'react';
import CartContext from '../../store/context-cart';
import classes from './CartItem.module.css';

const CartItem = ({ id, name, price, amount }) => {
    const ctxCart = useContext(CartContext);
    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price.toFixed(2)}$</span>
                    <span className={classes.amount}>{amount}</span>
                </div>
            </div>
            <div>
                <button onClick={ctxCart.updateItem.bind(null, id, -1)}>-</button>
                <button onClick={ctxCart.updateItem.bind(null, id, 1)}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
