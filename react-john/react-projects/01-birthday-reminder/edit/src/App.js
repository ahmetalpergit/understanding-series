import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return <main>
    <List data={data} />
  </main>;
}

export default App;
