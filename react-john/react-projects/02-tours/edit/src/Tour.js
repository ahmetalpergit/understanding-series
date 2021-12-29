import React, { useState } from 'react';

const Tour = ({ name, info, image, deleteHandler, id, price }) => {
  const [expanded, setExpanded] = useState(false);

  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>
        {expanded ? info : info.slice(0, 100)}
        <button onClick={() => setExpanded(prev => !prev)}>read more</button>
      </p>
      <button className="delete-btn" onClick={() => deleteHandler(id)}>Not Interested</button>
    </footer>
  </article>;
};

export default Tour;
