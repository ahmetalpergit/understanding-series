import React from 'react';

const Categories = ({ data, handler }) => {
  const categoryArray = Array.from(new Set(data.map(el => el.category)));
  return <div className="btn-container">
    <button className="filter-btn" onClick={handler}>all</button>
    {categoryArray.map((el, i) => <button className="filter-btn" onClick={handler} key={i}>{el}</button>)}
  </div>;
};

export default Categories;
