import React, { useReducer } from 'react';
import CartContext from './context-cart';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        //update existing
        if (state.items.some(item => item.id === action.value.id)) {
            const updatedItems = state.items.map((item) => {
                if (item.id === action.value.id) {
                    return {
                        ...item,
                        amount: item.amount + action.value.amount,
                    };
                }
                return item;
            });
            return {
                items: updatedItems,
                totalAmount: state.totalAmount + +action.value.price * +action.value.amount
            };
        }
        //add new
        return {
            items: [...state.items, action.value],
            totalAmount: state.totalAmount + +action.value.price * +action.value.amount
        };
    }
    if (action.type === 'REMOVE') {
        const filteredItems = state.items.filter(item => item.id !== action.value);
        return {
            items: filteredItems,
            totalAmount: filteredItems.reduce((acc, item) => acc + (item.price * item.amount), 0)
        };
    }
    if (action.type === 'UPDATE') {
        const updatedItems = state.items.map(item => {
            if (item.id === action.value.id) {
                return {
                    ...item,
                    amount: item.amount + action.value.amount
                };
            }
            return item;
        });

        return {
            items: updatedItems,
            totalAmount: updatedItems.reduce((acc, item) => acc + (item.price * item.amount), 0)
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

    const updateItemInCartHandler = (id, amount) => {
        if (cartState.items.some(el => el.id === id && el.amount + amount === 0)) return removeItemFromCartHandler(id);
        cartDispatch({ type: 'UPDATE', value: { id: id, amount: amount } });
    };

    const contextCart = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        updateItem: updateItemInCartHandler
    };

    return (
        <CartContext.Provider value={contextCart}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
