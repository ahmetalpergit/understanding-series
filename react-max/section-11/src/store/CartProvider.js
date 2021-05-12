import React, { useReducer } from 'react';
import CartContext from './context-cart';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action === 'ADD') {
        return {
            items: [...state.items, action.value],
            totalAmount: state.totalAmount + +action.value.price * +action.value.amount
        };
    }
    if (action === 'REMOVE') {
        const filteredItems = state.items.filter(item => item.id !== action.value);
        return {
            items: filteredItems,
            totalAmount: filteredItems.reduce((acc, item) => acc + (item.price * item.amount), 0)
        };
    }
    return defaultCartState;
};

const CartProvider = ({ children }) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        cartDispatch({ type: 'ADD', value: item });
    };
    const removeItemFromCartHandler = (id) => {
        cartDispatch({ type: 'REMOVE', value: id });
    };

    const contextCart = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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
