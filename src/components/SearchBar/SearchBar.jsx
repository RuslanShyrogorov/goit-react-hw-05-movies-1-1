import { useState } from 'react';
import { Button, Input, Form } from './SearchBar.styled';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim === '') {
      return alert('Not found');
    }

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
