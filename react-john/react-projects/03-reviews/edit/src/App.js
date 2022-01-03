import React, { useState } from 'react';
import Review from './Review';
import data from './data';

function App() {
  const [personIndex, setPersonIndex] = useState(0);

  const nextPerson = () => {
    setPersonIndex(prev => (prev + 1) % data.length);
  };
  const prevPerson = () => {
    setPersonIndex(prev => prev === 0 ? data.length - 1 : prev - 1);
  };
  const randomPerson = () => {
    setPersonIndex(prev => {
      let newIndex = Math.floor(Math.random() * data.length);
      while (prev === newIndex) {
        newIndex = Math.floor(Math.random() * data.length);
      }
      return newIndex;
    });
  };

  return <main>
    <section className="container">
      <div className="title">
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </div>
      <Review key={data[personIndex].id} {...data[personIndex]} handlers={{ nextPerson, prevPerson, randomPerson }} />
    </section>
  </main>;
}

export default App;
