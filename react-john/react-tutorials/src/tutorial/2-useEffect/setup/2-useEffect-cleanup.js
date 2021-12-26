import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  function resize() {
    setSize(window.innerWidth);
  }

  return <>
    <h1>Window</h1>
    <h2>{size} px</h2>
  </>;
};

export default UseEffectCleanup;
