import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return <>
    <button className="btn" onClick={() => setShow(prev => !prev)}>show/hide</button>
    {show && <Item />}
  </>;
};

const Item = () => {
  const [size, setsize] = useState(window.innerWidth);

  const resize = () => {
    setsize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <div style={{ marginTop: '2rem' }}>
    <h1>window</h1>
    <h2>size: {size}</h2>
  </div>;
};

export default ShowHide;
