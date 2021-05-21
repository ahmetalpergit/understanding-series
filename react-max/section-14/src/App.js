import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = () => {
    fetch('http://swapi.dev/api/films/').then(res => {
      return res.json();
    }).then(data => {
      const { results } = data;
      const formattedData = results.map(data => {
        return {
          id: data.episode_id,
          title: data.title,
          releaseData: data.release_date,
          openingText: data.opening_crawl
        };
      });
      setMovies(formattedData);
    });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
