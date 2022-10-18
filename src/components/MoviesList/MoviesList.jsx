// import { Link } from 'react-router-dom';
import { LinkItem, Item } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

export default function MoviesList({ items }) {
  const location = useLocation();

  const moviesList = items.map(({ id, title, name }) => (
    <Item key={id}>
      <LinkItem to={`/movies/${id}`} state={{ from: location }}>
        {title || name}
      </LinkItem>
    </Item>
  ));

  return <div>{moviesList}</div>;
}
