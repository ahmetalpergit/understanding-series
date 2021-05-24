import React, { useState, useEffect, useCallback } from 'react';

import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch('https://react-max-http-default-rtdb.europe-west1.firebasedatabase.app/movies.json');
      if (!res.ok) throw Error('Something went wrong');

      const data = await res.json();

      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedData);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(true);
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const res = await fetch('https://react-max-http-default-rtdb.europe-west1.firebasedatabase.app/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
  }

  let content = <p>No movies found.</p>;

  if (error) content = <p>Something went wrong!</p>;

  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && movies.length > 0) content = <MoviesList movies={movies} />;

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
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
