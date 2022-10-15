import { Link } from 'react-router-dom';

export default function MoviesList({ items }) {
  const moviesList = items.map(({ id, title, name }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title || name}</Link>
    </li>
  ));

  return <div>{moviesList}</div>;
}
