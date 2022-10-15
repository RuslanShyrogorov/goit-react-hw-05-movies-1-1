import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={query}
        placeholder="Enter value"
        onChange={handleChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}
