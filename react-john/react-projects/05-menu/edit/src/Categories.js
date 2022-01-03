import React from 'react';

const Categories = ({ handler }) => {
  return <div className="btn-container">
    <button className="filter-btn" onClick={handler}>all</button>
    <button className="filter-btn" onClick={handler}>breakfast</button>
    <button className="filter-btn" onClick={handler}>lunch</button>
    <button className="filter-btn" onClick={handler}>shakes</button>
  </div>;
};

export default Categories;
