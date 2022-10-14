import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovieId } from 'services/Api';

export default function MovieInfo() {
  const [movie, setMovie] = useState(null);

  return <div>MovieInfo</div>;
}
