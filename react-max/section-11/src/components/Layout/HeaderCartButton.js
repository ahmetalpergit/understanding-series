import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/context-cart';

const HeaderCartButton = ({ onClick }) => {
    const [btnBump, setBtnBump] = useState(false);
    const ctxCart = useContext(CartContext);
    const numberOfCartItems = ctxCart.items.reduce((accTotal, curItem) => accTotal + curItem.amount, 0);

    useEffect(() => {
        if (ctxCart.items.length === 0) return;
        setBtnBump(true);
        const timer = setTimeout(() => {
            setBtnBump(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [ctxCart.items]);
    return (
        <button className={btnBump ? `${classes.button} ${classes.bump}` : classes.button} onClick={onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
