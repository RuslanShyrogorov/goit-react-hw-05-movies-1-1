import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Input, Form } from './SearchBar.styled';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieQuery = searchParams.get('movies') || '';
  console.log('movieQuery: ', movieQuery);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim === '') {
      return alert('Not found');
    }

    const form = e.target;
    const formQuery = form.search.value;
    // console.log('formQuery: ', formQuery);
    setSearchParams({ movies: formQuery });

    onSubmit(query);
    setQuery('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="search"
        value={query}
        placeholder="Enter value"
        onChange={handleChange}
      ></Input>
      <Button type="submit">Search</Button>
    </Form>
  );
}
