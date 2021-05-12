import React from 'react';
import CartContext from './context-cart';

const CartProvider = ({ children }) => {

    const addItemToCartHandler = (item) => { };
    const removeItemFromCartHandler = (id) => { };

    const contextCart = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={contextCart}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
