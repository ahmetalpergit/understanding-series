import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [data, setData] = useState(items);
  const handleCategoryClick = (e) => {
    const categoryText = e.target.innerText.toLowerCase();
    if (categoryText === 'all') {
      setData(items);
    } else {
      setData(items.filter(el => el.category === categoryText));
    }
  };

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories data={items} handler={handleCategoryClick} />
      <div className="section-center">
        {data.map(item => <Menu key={item.id} {...item} />)}
      </div>
    </section>
  </main>;
}

export default App;
