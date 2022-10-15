import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieId } from 'services/Api';

export default function MovieInfo() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMivieId = async () => {
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
    fetchMivieId();
  }, [id]);

  return <div>MovieInfo</div>;
}
