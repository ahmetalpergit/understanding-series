import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import MealsSummary from './components/Meals/MealsSummary';

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(true);
  const hideCartHandler = () => setShowCart(false);

  return (
    <>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default App;
