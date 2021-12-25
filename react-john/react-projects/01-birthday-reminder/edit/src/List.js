import React, { useState } from 'react';
import Person from './Person';

const List = ({ data }) => {
  const [people, setPeople] = useState(data);

  const clickHandler = () => {
    setPeople([]);
  };

  return (
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      {people.map(el => <Person key={el.id} {...el} />)}
      <button onClick={clickHandler}>Clear all</button>
    </section>
  );
};

export default List;
