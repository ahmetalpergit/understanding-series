import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  return <>
    <section style={{ margin: '4rem 0' }}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' disabled={value === 0} onClick={() => setValue(value - 1)}>decrease</button>
      <button className='btn' onClick={() => setValue(0)}>reset</button>
      <button className='btn' onClick={() => setTimeout(() => {
        setValue(prev => prev + 1);
      }, 2000)}>increase</button>
    </section>
  </>;
};

export default UseStateCounter;
