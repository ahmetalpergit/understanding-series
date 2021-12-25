import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);


  return <>
    {people.map(person => {
      const { id, name } = person;

      return <div key={id} className='item'>
        <h4>{name}</h4>
        <button onClick={() => setPeople(people.filter(el => el.id !== id))}>delete</button>
      </div>;
    })}
    <button className='btn' onClick={() => people.length > 0 ? setPeople([]) : setPeople(data)}>{people.length > 0 ? 'Clear' : 'Load'} items</button>
  </>;
};

export default UseStateArray;
