import React, { useState } from 'react';

const ErrorExample = () => {
  const [title, setTitle] = useState('useState error example');

  const clickHandler = () => {
    if (title === 'useState error example') {
      setTitle('random title');
    } else {
      setTitle('useState error example');
    }
  };
  return <div>
    <h2>{title}</h2>
    <button className='btn' onClick={clickHandler}>change title</button>
  </div>;
};

export default ErrorExample;
