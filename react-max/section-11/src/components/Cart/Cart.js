import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/context-cart';
import CartItem from './CartItem';

const Cart = ({ onClose }) => {

    const ctxCart = useContext(CartContext);

    const cartItems = (
        <ul className={classes['cart-items']}>
            {ctxCart.items.map(item => <CartItem {...item} key={item.id} />)}
        </ul>
    );

    return (
        <Modal onClose={onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${ctxCart.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
