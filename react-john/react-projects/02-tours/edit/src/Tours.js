import React, { useState } from 'react';
import Header from './Header';
import Tour from './Tour';
const Tours = ({ data }) => {

  const [tours, setTours] = useState(data);

  const deleteTour = (id) => {
    setTours(tours.filter(el => el.id !== id));
  };

  return <>
    {tours.length > 0 ? <div>
      <Header />
      {tours.map(tour => {
        return <Tour key={tour.id} {...tour} deleteHandler={deleteTour} />;
      })}
    </div> : <div className="title">
      <h2>no tours left</h2>
      <button className="btn" onClick={() => window.location.reload()}>Refresh</button>
    </div>}
  </>;
};

export default Tours;
