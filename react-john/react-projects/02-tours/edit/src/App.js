import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          setLoading(false);
          throw new Error('something went wrong');
        }
      })
      .then(data => {
        setLoading(false);
        setTours(data);
      })
      .catch(err => console.error(err));
  }, []);

  return <main>
    {loading ? <Loading /> : <section>
      {tours && <Tours data={tours} />}
    </section>}
  </main>;
}

export default App;
