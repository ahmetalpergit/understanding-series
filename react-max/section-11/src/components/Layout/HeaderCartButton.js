import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/context-cart';

const HeaderCartButton = ({ onClick }) => {

    const ctxCart = useContext(CartContext);
    const numberOfCartItems = ctxCart.items.reduce((accTotal, curItem) => accTotal + curItem.amount, 0);

    return (
        <button className={classes.button} onClick={onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
