import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';

export default function CastPage() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const data = await getMovieCast(id);
        setCast(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <div>
      {loading && <p>Loading ...</p>}
      {error && <p>Something went wrong</p>}
      {cast && (
        <div>
          <ul>
            {cast.map(({ name, id, profile_path, character }) => {
              return (
                <li key={id}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : 'https://www.freeiconspng.com/uploads/no-image-icon-4.png'
                    }
                    alt=""
                  />
                  <div>
                    <h4>{name}</h4>
                    <span>"{character}"</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
