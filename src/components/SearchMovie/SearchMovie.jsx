import { useState, useEffect } from 'react';
import { getQueryMovie } from 'services/Api';

import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';

export default function SearchMovie() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onQuery = query => {
    setQuery(query);
    setMovies([]);
  };

  useEffect(() => {
    const fetchQuery = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getQueryMovie(query);
        setMovies([...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchQuery();
  }, [query]);

  return (
    <div>
      <SearchBar onSubmit={onQuery} />
      {movies && <MoviesList items={movies} />}
      {loading && <p>Loading ...</p>}
      {error && <p>Something went wrong</p>}
    </div>
  );
}
