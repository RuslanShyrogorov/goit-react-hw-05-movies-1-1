import { Box } from 'constants/Box';
import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  console.log('location: ', location.pathname);

  const { id } = useParams();

  const castOnPage = location.pathname.includes('cast');
  const castLink = castOnPage ? `/movies/${id}` : `/movies/${id}/cast`;

  const reviewsOnPage = location.pathname.includes('reviews');
  const reviewsLink = reviewsOnPage ? `/movies/${id}` : `/movies/${id}/reviews`;

  const from = location.state?.from || '/movies';

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
        setError(null);
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

  // const goBack = () => navigate(-1);

  return (
    <Box as="section" backgroundColor="white" widh="100%" p="8px">
      {/* <Link type="button" onClick={goBack}> */}
      <AdditionalLink to={location.state.from}>Go back</AdditionalLink>
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
            <AdditionalLink state={{ from }} to={castLink}>
              Cast
            </AdditionalLink>
            <AdditionalLink state={{ from }} to={reviewsLink}>
              Reviews
            </AdditionalLink>
            <Outlet />
          </div>
        </Box>
      )}
    </Box>
  );
}
