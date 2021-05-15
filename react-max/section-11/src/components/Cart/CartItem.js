import React from 'react';
import classes from './CartItem.module.css';

const CartItem = ({ id, name, price, amount }) => {
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
                <button>-</button>
                <button>+</button>
            </div>
        </li>
    );
};

export default CartItem;
