import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom';
import { getMovieId } from 'services/Api';

export default function MovieInfoPage() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieId = async () => {
      try {
        setLoading(true);
        const data = await getMovieId(id);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieId();
  }, [id]);

  const goBack = () => navigate(-1);

  return (
    <>
      <button type="button" onClick={goBack}>
        Back
      </button>
      {loading && <p>Loading ...</p>}
      {error && <p>Something went wromg</p>}
      {movie && (
        <div>
          <img src={movie.srcPath} alt="" widh="100%" />
          <div>
            <h2>{movie.title}</h2>
            <p>
              User score: <span>{Math.round(movie.vote_average * 10)}%</span>
            </p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
          </div>
          <div>
            <h3>Additional information</h3>
            <Link to={'cast'}>Cast</Link>
            <Link to={'reviews'}>Reviews</Link>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
