// import { Link } from 'react-router-dom';
import { LinkItem, Item } from './MoviesList.styled';

export default function MoviesList({ items }) {
  const moviesList = items.map(({ id, title, name }) => (
    <Item key={id}>
      <LinkItem to={`/movies/${id}`}>{title || name}</LinkItem>
    </Item>
  ));

  return <div>{moviesList}</div>;
}
