import { useState, useEffect } from 'react';
import { searchTrendMovie } from 'services/Api';
import TrendMoviesList from 'components/TrendMoviesList/TrendMoviesList';

export default function TrendMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await searchTrendMovie();

        // setMovies(prevMovies => [...prevMovies, ...data.results]);
        setMovies([...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trending day movies</h2>
      {loading && <p>Loading...</p>}
      {Boolean(movies.length) && <TrendMoviesList items={movies} />}
      {error && <p>Sorry! Something went wrong</p>}
    </div>
  );
}
