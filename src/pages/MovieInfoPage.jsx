import { Box } from 'constants/Box';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { getMovieId } from 'services/Api';
import {
  AdditionalLink,
  MovieTitle,
  Text,
  Title,
  AdditionalTitle,
  Span,
  CardImg,
} from './MovieInfoPage.styled';

export default function MovieInfoPage() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const imagePath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://w7.pngwing.com/pngs/772/172/png-transparent-film-cinema-television-android.png';
  const genres = movie.genres?.map(genre => (
    <Span key={genre.id}>{genre.name} </Span>
  ));

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
    <Box as="section" backgroundColor="white" widh="100%" p="8px">
      <button type="button" onClick={goBack}>
        Back
      </button>
      {loading && <p>Loading ...</p>}
      {error && <p>Something went wromg</p>}
      {movie && (
        <Box>
          <Box display="flex" mt="8px" mb="8px">
            <CardImg src={imagePath} alt="" />
            <Box p="16px">
              <MovieTitle>{movie.title}</MovieTitle>
              <Title>
                User score: <Span>{Math.round(movie.vote_average * 10)}%</Span>
              </Title>
              <Title>Overview</Title>
              <Text>{movie.overview}</Text>
              <Title>Genres: {genres}</Title>
            </Box>
          </Box>
          <div>
            <AdditionalTitle>Additional information</AdditionalTitle>
            <AdditionalLink to={'cast'}>Cast</AdditionalLink>
            <AdditionalLink to={'reviews'}>Reviews</AdditionalLink>
            <Outlet />
          </div>
        </Box>
      )}
    </Box>
  );
}
