import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/context-cart';

const MealItem = ({ id, name, description, price }) => {

    const ctxCart = useContext(CartContext);

    const addItemHandler = (amount) => {
        ctxCart.addItem({
            id: id,
            name: name,
            price: price,
            amount: amount
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <MealItemForm id={id} onAddItem={addItemHandler} />
        </li>
    );
};

export default MealItem;
