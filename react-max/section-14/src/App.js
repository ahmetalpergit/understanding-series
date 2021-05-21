import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    const res = await fetch('http://swapi.dev/api/films/');
    const data = await res.json();

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
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No movies found.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
