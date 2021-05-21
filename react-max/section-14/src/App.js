import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);

    try {
      const res = await fetch('http://swapi.dev/api/film/');
      if (!res.ok) throw Error('Something went wrong');

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
    } catch (err) {
      setIsLoading(false);
      setError(true);
      console.error(err);
    }
  };
  let content = <p>No movies found.</p>;

  if (error) content = <p>Something went wrong!</p>;

  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && movies.length > 0) content = <MoviesList movies={movies} />;

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
